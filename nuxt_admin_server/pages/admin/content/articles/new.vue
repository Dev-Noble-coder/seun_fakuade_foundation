<template>
  <div class="space-y-6">
    <!-- Page Header -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">Create New Article</h1>
        <p class="text-gray-600">Add a new article to your content library</p>
      </div>
      <div class="flex space-x-3">
        <UButton variant="ghost" @click="navigateTo('/admin/content')">
          Cancel
        </UButton>
        <UButton 
          :loading="isSaving" 
          :disabled="isSaving"
          @click="saveArticle"
        >
          {{ isSaving ? 'Saving...' : 'Save Article' }}
        </UButton>
      </div>
    </div>

    <!-- Article Form -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Main Content -->
      <div class="lg:col-span-2 space-y-6">
        <UCard>
          <template #header>
            <h3 class="text-lg font-medium text-gray-900">Article Content</h3>
          </template>
          
          <div class="space-y-4">
            <div>
              <label class="admin-label">Title *</label>
              <UInput 
                v-model="article.title" 
                placeholder="Enter article title"
                class="mt-1"
              />
            </div>
            
            <div>
              <label class="admin-label">Excerpt</label>
              <UTextarea 
                v-model="article.excerpt" 
                placeholder="Brief description of the article"
                rows="3"
                class="mt-1"
              />
            </div>
            
            <div>
              <label class="admin-label">Content *</label>
              <UTextarea 
                v-model="article.content" 
                placeholder="Write your article content here..."
                rows="12"
                class="mt-1"
              />
            </div>
          </div>
        </UCard>

        <UCard>
          <template #header>
            <h3 class="text-lg font-medium text-gray-900">SEO & Meta</h3>
          </template>
          
          <div class="space-y-4">
            <div>
              <label class="admin-label">Meta Title</label>
              <UInput 
                v-model="article.metaTitle" 
                placeholder="SEO title (if different from main title)"
                class="mt-1"
              />
            </div>
            
            <div>
              <label class="admin-label">Meta Description</label>
              <UTextarea 
                v-model="article.metaDescription" 
                placeholder="SEO description for search engines"
                rows="3"
                class="mt-1"
              />
            </div>
            
            <div>
              <label class="admin-label">Keywords</label>
              <UInput 
                v-model="article.keywords" 
                placeholder="Comma-separated keywords"
                class="mt-1"
              />
            </div>
          </div>
        </UCard>
      </div>

      <!-- Sidebar -->
      <div class="space-y-6">
        <UCard>
          <template #header>
            <h3 class="text-lg font-medium text-gray-900">Publishing</h3>
          </template>
          
          <div class="space-y-4">
            <div>
              <label class="admin-label">Status</label>
              <USelect 
                v-model="article.status" 
                :options="statusOptions"
                class="mt-1"
              />
            </div>
            
            <div>
              <label class="admin-label">Category</label>
              <USelect 
                v-model="article.category" 
                :options="categoryOptions"
                class="mt-1"
              />
            </div>
            
            <div>
              <label class="admin-label">Tags</label>
              <UInput 
                v-model="article.tags" 
                placeholder="Comma-separated tags"
                class="mt-1"
              />
            </div>
            
            <div>
              <label class="admin-label">Featured Image</label>
              <div class="mt-1">
                <UButton variant="outline" class="w-full">
                  <UIcon name="i-heroicons-photo" class="w-5 h-5 mr-2" />
                  Upload Image
                </UButton>
              </div>
            </div>
          </div>
        </UCard>

        <UCard>
          <template #header>
            <h3 class="text-lg font-medium text-gray-900">Settings</h3>
          </template>
          
          <div class="space-y-4">
            <div class="flex items-center">
              <UCheckbox 
                v-model="article.featured" 
                id="featured"
              />
              <label for="featured" class="ml-2 text-sm text-gray-700">
                Featured Article
              </label>
            </div>
            
            <div class="flex items-center">
              <UCheckbox 
                v-model="article.allowComments" 
                id="comments"
              />
              <label for="comments" class="ml-2 text-sm text-gray-700">
                Allow Comments
              </label>
            </div>
            
            <div class="flex items-center">
              <UCheckbox 
                v-model="article.socialShare" 
                id="social"
              />
              <label for="social" class="ml-2 text-sm text-gray-700">
                Enable Social Sharing
              </label>
            </div>
          </div>
        </UCard>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'admin',
  middleware: 'auth'
})

// Article data
const article = ref({
  title: '',
  excerpt: '',
  content: '',
  metaTitle: '',
  metaDescription: '',
  keywords: '',
  status: 'draft',
  category: '',
  tags: '',
  featured: false,
  allowComments: true,
  socialShare: true
})

// Form options
const statusOptions = ref([
  { label: 'Draft', value: 'draft' },
  { label: 'Review', value: 'review' },
  { label: 'Published', value: 'published' }
])

const categoryOptions = ref([
  { label: 'Technology', value: 'technology' },
  { label: 'Policy', value: 'policy' },
  { label: 'Development', value: 'development' },
  { label: 'Innovation', value: 'innovation' },
  { label: 'Education', value: 'education' }
])

// State
const isSaving = ref(false)

// Methods
const saveArticle = async () => {
  try {
    isSaving.value = true
    
    // Validate required fields
    if (!article.value.title || !article.value.content) {
      // Show error message
      console.error('Title and content are required')
      return
    }
    
    // Prepare article data
    const articleData = {
      ...article.value,
      tags: article.value.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      author: 'Admin', // In real app, get from authenticated user
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    
    // In a real app, this would make an API call
    console.log('Saving article:', articleData)
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Redirect to articles list
    await navigateTo('/admin/content')
    
  } catch (error) {
    console.error('Error saving article:', error)
  } finally {
    isSaving.value = false
  }
}
</script>
