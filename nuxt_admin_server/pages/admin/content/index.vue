<template>
  <div class="space-y-6">
    <!-- Page Header -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">Content Management</h1>
        <p class="text-gray-600">Manage all your content including articles, thought leadership, and initiatives</p>
      </div>
      <UButton icon="i-heroicons-plus" @click="showCreateModal = true">
        Create Content
      </UButton>
    </div>

    <!-- Content Tabs -->
    <UTabs :items="contentTabs" v-model="activeTab">
      <template #item="{ item }">
        <div class="flex items-center space-x-2">
          <UIcon :name="item.icon" class="w-5 h-5" />
          <span>{{ item.label }}</span>
          <UBadge :value="getContentCount(item.key)" color="gray" variant="soft" />
        </div>
      </template>

      <!-- Articles Tab -->
      <template #articles>
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-medium text-gray-900">Articles</h3>
            <UButton icon="i-heroicons-plus" size="sm" @click="navigateTo('/admin/content/articles/new')">
              New Article
            </UButton>
          </div>
          <UTable :rows="articles" :columns="articleColumns">
            <template #status-data="{ row }">
              <UBadge :value="row.status" :color="getStatusColor(row.status)" variant="soft" />
            </template>
            <template #actions-data="{ row }">
              <UDropdown :items="getArticleActions(row)">
                <UButton icon="i-heroicons-ellipsis-vertical" color="gray" variant="ghost" size="sm" />
              </UDropdown>
            </template>
          </UTable>
        </div>
      </template>

      <!-- Thought Leadership Tab -->
      <template #thought-leadership>
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-medium text-gray-900">Thought Leadership</h3>
            <UButton icon="i-heroicons-plus" size="sm" @click="navigateTo('/admin/content/thought-leadership/new')">
              New Thought Leadership
            </UButton>
          </div>
          <UTable :rows="thoughtLeadership" :columns="thoughtLeadershipColumns">
            <template #status-data="{ row }">
              <UBadge :value="row.status" :color="getStatusColor(row.status)" variant="soft" />
            </template>
            <template #actions-data="{ row }">
              <UDropdown :items="getThoughtLeadershipActions(row)">
                <UButton icon="i-heroicons-ellipsis-vertical" color="gray" variant="ghost" size="sm" />
              </UDropdown>
            </template>
          </UTable>
        </div>
      </template>

      <!-- Initiatives Tab -->
      <template #initiatives>
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-medium text-gray-900">Initiatives</h3>
            <UButton icon="i-heroicons-plus" size="sm" @click="navigateTo('/admin/content/initiatives/new')">
              New Initiative
            </UButton>
          </div>
          <UTable :rows="initiatives" :columns="initiativeColumns">
            <template #status-data="{ row }">
              <UBadge :value="row.status" :color="getStatusColor(row.status)" variant="soft" />
            </template>
            <template #actions-data="{ row }">
              <UDropdown :items="getInitiativeActions(row)">
                <UButton icon="i-heroicons-ellipsis-vertical" color="gray" variant="ghost" size="sm" />
              </UDropdown>
            </template>
          </UTable>
        </div>
      </template>
    </UTabs>

    <!-- Create Content Modal -->
    <UModal v-model="showCreateModal">
      <UCard>
        <template #header>
          <h3 class="text-lg font-medium text-gray-900">Create New Content</h3>
        </template>
        
        <div class="space-y-4">
          <div>
            <label class="admin-label">Content Type</label>
            <USelect 
              v-model="newContent.type" 
              :options="contentTypes"
              placeholder="Select content type"
            />
          </div>
          
          <div>
            <label class="admin-label">Title</label>
            <UInput v-model="newContent.title" placeholder="Enter content title" />
          </div>
          
          <div>
            <label class="admin-label">Description</label>
            <UTextarea v-model="newContent.description" placeholder="Enter content description" />
          </div>
        </div>

        <template #footer>
          <div class="flex justify-end space-x-3">
            <UButton variant="ghost" @click="showCreateModal = false">Cancel</UButton>
            <UButton @click="createContent">Create Content</UButton>
          </div>
        </template>
      </UCard>
    </UModal>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'admin',
  middleware: 'auth'
})

// Reactive data
const activeTab = ref('articles')
const showCreateModal = ref(false)
const newContent = ref({
  type: '',
  title: '',
  description: ''
})

// Content tabs
const contentTabs = ref([
  { key: 'articles', label: 'Articles', icon: 'i-heroicons-newspaper' },
  { key: 'thought-leadership', label: 'Thought Leadership', icon: 'i-heroicons-academic-cap' },
  { key: 'initiatives', label: 'Initiatives', icon: 'i-heroicons-light-bulb' }
])

// Content types for modal
const contentTypes = ref([
  { label: 'Article', value: 'article' },
  { label: 'Thought Leadership', value: 'thought-leadership' },
  { label: 'Initiative', value: 'initiative' }
])

// Sample data
const articles = ref([
  { id: 1, title: 'Digital Transformation in Africa', author: 'Admin', status: 'Published', date: '2024-08-22', views: 1250 },
  { id: 2, title: 'Policy Innovation Framework', author: 'Admin', status: 'Draft', date: '2024-08-21', views: 0 },
  { id: 3, title: 'Sustainable Development Goals', author: 'Admin', status: 'Published', date: '2024-08-20', views: 890 }
])

const thoughtLeadership = ref([
  { id: 1, title: 'Future of African Technology', author: 'Admin', status: 'Published', date: '2024-08-22', category: 'Technology' },
  { id: 2, title: 'Policy Innovation in Digital Age', author: 'Admin', status: 'Review', date: '2024-08-21', category: 'Policy' }
])

const initiatives = ref([
  { id: 1, title: 'Digital Ekiti Initiative', author: 'Admin', status: 'Active', date: '2024-08-22', progress: 75 },
  { id: 2, title: 'Youth Empowerment Program', author: 'Admin', status: 'Planning', date: '2024-08-21', progress: 25 }
])

// Table columns
const articleColumns = ref([
  { key: 'title', label: 'Title' },
  { key: 'author', label: 'Author' },
  { key: 'status', label: 'Status' },
  { key: 'date', label: 'Date' },
  { key: 'views', label: 'Views' },
  { key: 'actions', label: 'Actions' }
])

const thoughtLeadershipColumns = ref([
  { key: 'title', label: 'Title' },
  { key: 'author', label: 'Author' },
  { key: 'status', label: 'Status' },
  { key: 'date', label: 'Date' },
  { key: 'category', label: 'Category' },
  { key: 'actions', label: 'Actions' }
])

const initiativeColumns = ref([
  { key: 'title', label: 'Title' },
  { key: 'author', label: 'Author' },
  { key: 'status', label: 'Status' },
  { key: 'date', label: 'Date' },
  { key: 'progress', label: 'Progress' },
  { key: 'actions', label: 'Actions' }
])

// Methods
const getContentCount = (key) => {
  switch (key) {
    case 'articles': return articles.value.length
    case 'thought-leadership': return thoughtLeadership.value.length
    case 'initiatives': return initiatives.value.length
    default: return 0
  }
}

const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case 'published':
    case 'active':
      return 'green'
    case 'draft':
    case 'planning':
      return 'yellow'
    case 'review':
      return 'blue'
    default:
      return 'gray'
  }
}

const getArticleActions = (row) => {
  return [
    [{
      label: 'Edit',
      icon: 'i-heroicons-pencil-square',
      click: () => navigateTo(`/admin/content/articles/edit/${row.id}`)
    }, {
      label: 'View',
      icon: 'i-heroicons-eye',
      click: () => navigateTo(`/admin/content/articles/view/${row.id}`)
    }],
    [{
      label: 'Delete',
      icon: 'i-heroicons-trash',
      click: () => handleDeleteArticle(row.id)
    }]
  ]
}

const getThoughtLeadershipActions = (row) => {
  return [
    [{
      label: 'Edit',
      icon: 'i-heroicons-pencil-square',
      click: () => navigateTo(`/admin/content/thought-leadership/edit/${row.id}`)
    }, {
      label: 'View',
      icon: 'i-heroicons-eye',
      click: () => navigateTo(`/admin/content/thought-leadership/view/${row.id}`)
    }],
    [{
      label: 'Delete',
      icon: 'i-heroicons-trash',
      click: () => handleDeleteThoughtLeadership(row.id)
    }]
  ]
}

const getInitiativeActions = (row) => {
  return [
    [{
      label: 'Edit',
      icon: 'i-heroicons-pencil-square',
      click: () => navigateTo(`/admin/content/initiatives/edit/${row.id}`)
    }, {
      label: 'View',
      icon: 'i-heroicons-eye',
      click: () => navigateTo(`/admin/content/initiatives/view/${row.id}`)
    }],
    [{
      label: 'Delete',
      icon: 'i-heroicons-trash',
      click: () => handleDeleteInitiative(row.id)
    }]
  ]
}

const createContent = () => {
  // Implement content creation logic
  console.log('Creating content:', newContent.value)
  showCreateModal.value = false
  newContent.value = { type: '', title: '', description: '' }
}

const handleDeleteArticle = (id) => {
  // Implement delete logic
  console.log('Deleting article:', id)
}

const handleDeleteThoughtLeadership = (id) => {
  // Implement delete logic
  console.log('Deleting thought leadership:', id)
}

const handleDeleteInitiative = (id) => {
  // Implement delete logic
  console.log('Deleting initiative:', id)
}
</script>
