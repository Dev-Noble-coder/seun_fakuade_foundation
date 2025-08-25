<template>
  <div class="space-y-6">
    <!-- Page Header -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">Media Library</h1>
        <p class="text-gray-600">Manage your images, documents, and other media files</p>
      </div>
      <UButton icon="i-heroicons-plus" @click="showUploadModal = true">
        Upload Media
      </UButton>
    </div>

    <!-- Media Filters -->
    <UCard>
      <div class="flex items-center space-x-4">
        <div class="flex-1">
          <UInput 
            v-model="searchQuery" 
            placeholder="Search media files..."
            icon="i-heroicons-magnifying-glass"
          />
        </div>
        <USelect 
          v-model="selectedType" 
          :options="typeOptions"
          placeholder="All Types"
        />
        <USelect 
          v-model="selectedCategory" 
          :options="categoryOptions"
          placeholder="All Categories"
        />
      </div>
    </UCard>

    <!-- Media Grid -->
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      <div 
        v-for="media in filteredMedia" 
        :key="media.id"
        class="group relative bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
      >
        <!-- Media Preview -->
        <div class="aspect-square bg-gray-100 flex items-center justify-center">
          <img 
            v-if="media.type === 'image'" 
            :src="media.url" 
            :alt="media.name"
            class="w-full h-full object-cover"
          />
          <div v-else class="text-gray-400">
            <UIcon :name="getFileIcon(media.type)" class="w-12 h-12 mx-auto" />
          </div>
        </div>
        
        <!-- Media Info -->
        <div class="p-3">
          <p class="text-sm font-medium text-gray-900 truncate">{{ media.name }}</p>
          <p class="text-xs text-gray-500">{{ formatFileSize(media.size) }}</p>
        </div>
        
        <!-- Actions Overlay -->
        <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div class="flex space-x-2">
            <UButton 
              icon="i-heroicons-eye" 
              color="white" 
              variant="ghost" 
              size="sm"
              @click="openPreviewModal(media)"
            />
            <UButton 
              icon="i-heroicons-pencil-square" 
              color="white" 
              variant="ghost" 
              size="sm"
              @click="editMedia(media)"
            />
            <UButton 
              icon="i-heroicons-trash" 
              color="white" 
              variant="ghost" 
              size="sm"
              @click="deleteMedia(media)"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Upload Modal -->
    <UModal v-model="showUploadModal">
      <UCard>
        <template #header>
          <h3 class="text-lg font-medium text-gray-900">Upload Media</h3>
        </template>
        
        <div class="space-y-4">
          <!-- Drag & Drop Zone -->
          <div 
            class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors"
            :class="{ 'border-blue-400 bg-blue-50': isDragOver }"
            @drop="handleDrop"
            @dragover="isDragOver = true"
            @dragleave="isDragOver = false"
          >
            <UIcon name="i-heroicons-cloud-arrow-up" class="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p class="text-lg font-medium text-gray-900 mb-2">Drop files here</p>
            <p class="text-gray-500 mb-4">or click to browse</p>
            <UButton variant="outline" @click="triggerFileInput">
              Choose Files
            </UButton>
            <input 
              ref="fileInput"
              type="file" 
              multiple 
              accept="image/*,.pdf,.doc,.docx,.txt"
              class="hidden"
              @change="handleFileSelect"
            />
          </div>
          
          <!-- File List -->
          <div v-if="selectedFiles.length > 0" class="space-y-2">
            <h4 class="font-medium text-gray-900">Selected Files:</h4>
            <div v-for="file in selectedFiles" :key="file.name" class="flex items-center justify-between p-2 bg-gray-50 rounded">
              <span class="text-sm text-gray-700">{{ file.name }}</span>
              <UButton 
                icon="i-heroicons-x-mark" 
                color="red" 
                variant="ghost" 
                size="sm"
                @click="removeFile(file)"
              />
            </div>
          </div>
          
          <!-- Upload Options -->
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="admin-label">Category</label>
              <USelect 
                v-model="uploadCategory" 
                :options="categoryOptions"
                placeholder="Select category"
              />
            </div>
            <div>
              <label class="admin-label">Tags</label>
              <UInput 
                v-model="uploadTags" 
                placeholder="Comma-separated tags"
              />
            </div>
          </div>
        </div>

        <template #footer>
          <div class="flex justify-end space-x-3">
            <UButton variant="ghost" @click="showUploadModal = false">Cancel</UButton>
            <UButton 
              :loading="isUploading" 
              :disabled="isUploading || selectedFiles.length === 0"
              @click="uploadFiles"
            >
              {{ isUploading ? 'Uploading...' : `Upload ${selectedFiles.length} File${selectedFiles.length !== 1 ? 's' : ''}` }}
            </UButton>
          </div>
        </template>
      </UCard>
    </UModal>

    <!-- Preview Modal -->
    <UModal v-model="showPreviewModal">
      <UCard>
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-medium text-gray-900">{{ previewMedia?.name }}</h3>
            <UButton 
              icon="i-heroicons-x-mark" 
              color="gray" 
              variant="ghost" 
              @click="showPreviewModal = false"
            />
          </div>
        </template>
        
        <div v-if="previewMedia" class="space-y-4">
          <!-- Media Preview -->
          <div class="flex justify-center">
            <img 
              v-if="previewMedia.type === 'image'" 
              :src="previewMedia.url" 
              :alt="previewMedia.name"
              class="max-w-full max-h-96 object-contain"
            />
            <div v-else class="text-center py-12">
              <UIcon :name="getFileIcon(previewMedia.type)" class="w-24 h-24 text-gray-400 mx-auto mb-4" />
              <p class="text-gray-500">{{ previewMedia.name }}</p>
            </div>
          </div>
          
          <!-- Media Details -->
          <div class="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span class="font-medium text-gray-700">Size:</span>
              <span class="ml-2 text-gray-500">{{ formatFileSize(previewMedia.size) }}</span>
            </div>
            <div>
              <span class="font-medium text-gray-700">Type:</span>
              <span class="ml-2 text-gray-500">{{ previewMedia.type }}</span>
            </div>
            <div>
              <span class="font-medium text-gray-700">Uploaded:</span>
              <span class="ml-2 text-gray-500">{{ formatDate(previewMedia.uploadedAt) }}</span>
            </div>
            <div>
              <span class="font-medium text-gray-700">Category:</span>
              <span class="ml-2 text-gray-500">{{ previewMedia.category || 'Uncategorized' }}</span>
            </div>
          </div>
          
          <!-- Tags -->
          <div v-if="previewMedia.tags?.length">
            <span class="font-medium text-gray-700">Tags:</span>
            <div class="flex flex-wrap gap-2 mt-2">
              <UBadge 
                v-for="tag in previewMedia.tags" 
                :key="tag"
                :value="tag"
                color="gray"
                variant="soft"
              />
            </div>
          </div>
        </div>
      </UCard>
    </UModal>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'admin',
  middleware: 'auth'
})

// State
const showUploadModal = ref(false)
const showPreviewModal = ref(false)
const isDragOver = ref(false)
const isUploading = ref(false)
const searchQuery = ref('')
const selectedType = ref('')
const selectedCategory = ref('')
const selectedFiles = ref([])
const uploadCategory = ref('')
const uploadTags = ref('')
const previewMedia = ref(null)

// File input ref
const fileInput = ref(null)

// Options
const typeOptions = ref([
  { label: 'All Types', value: '' },
  { label: 'Images', value: 'image' },
  { label: 'Documents', value: 'document' },
  { label: 'Videos', value: 'video' }
])

const categoryOptions = ref([
  { label: 'All Categories', value: '' },
  { label: 'Articles', value: 'articles' },
  { label: 'Thought Leadership', value: 'thought-leadership' },
  { label: 'Initiatives', value: 'initiatives' },
  { label: 'General', value: 'general' }
])

// Sample media data
const media = ref([
  {
    id: 1,
    name: 'digital-transformation.jpg',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop',
    size: 2048576,
    category: 'articles',
    tags: ['technology', 'digital'],
    uploadedAt: '2024-08-22T10:00:00Z'
  },
  {
    id: 2,
    name: 'policy-framework.pdf',
    type: 'document',
    url: null,
    size: 1048576,
    category: 'thought-leadership',
    tags: ['policy', 'framework'],
    uploadedAt: '2024-08-21T15:30:00Z'
  }
])

// Computed
const filteredMedia = computed(() => {
  return media.value.filter(item => {
    const matchesSearch = !searchQuery.value || 
      item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesType = !selectedType.value || item.type === selectedType.value
    const matchesCategory = !selectedCategory.value || item.category === selectedCategory.value
    
    return matchesSearch && matchesType && matchesCategory
  })
})

// Methods
const getFileIcon = (type) => {
  switch (type) {
    case 'image': return 'i-heroicons-photo'
    case 'document': return 'i-heroicons-document'
    case 'video': return 'i-heroicons-video-camera'
    default: return 'i-heroicons-document'
  }
}

const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString()
}

const triggerFileInput = () => {
  fileInput.value?.click()
}

const handleFileSelect = (event) => {
  const files = Array.from(event.target.files)
  selectedFiles.value.push(...files)
}

const handleDrop = (event) => {
  event.preventDefault()
  isDragOver.value = false
  
  const files = Array.from(event.dataTransfer.files)
  selectedFiles.value.push(...files)
}

const removeFile = (file) => {
  const index = selectedFiles.value.indexOf(file)
  if (index > -1) {
    selectedFiles.value.splice(index, 1)
  }
}

const uploadFiles = async () => {
  try {
    isUploading.value = true
    
    // Simulate upload process
    for (const file of selectedFiles.value) {
      await new Promise(resolve => setTimeout(resolve, 500))
      
      // Create new media item
      const newMedia = {
        id: Date.now() + Math.random(),
        name: file.name,
        type: file.type.startsWith('image/') ? 'image' : 'document',
        url: file.type.startsWith('image/') ? URL.createObjectURL(file) : null,
        size: file.size,
        category: uploadCategory.value || 'general',
        tags: uploadTags.value.split(',').map(tag => tag.trim()).filter(tag => tag),
        uploadedAt: new Date().toISOString()
      }
      
      media.value.unshift(newMedia)
    }
    
    // Reset form
    selectedFiles.value = []
    uploadCategory.value = ''
    uploadTags.value = ''
    showUploadModal.value = false
    
  } catch (error) {
    console.error('Upload error:', error)
  } finally {
    isUploading.value = false
  }
}

const openPreviewModal = (mediaItem) => {
  previewMedia.value = mediaItem
  showPreviewModal.value = true
}

const editMedia = (mediaItem) => {
  // Implement edit functionality
  console.log('Edit media:', mediaItem)
}

const deleteMedia = (mediaItem) => {
  // Implement delete functionality
  console.log('Delete media:', mediaItem)
}
</script>
