<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-white shadow-sm border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-6">
          <div class="flex items-center">
            <h1 class="text-2xl font-bold text-gray-900">Seun Fakuade Foundation</h1>
            <span class="ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              Admin Dashboard
            </span>
          </div>
          <div class="flex items-center space-x-4">
            <UButton icon="i-heroicons-bell" color="gray" variant="ghost" />
            <UDropdown :items="userMenuItems">
              <UAvatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Admin User" />
            </UDropdown>
          </div>
        </div>
      </div>
    </header>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Stats Overview -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <UCard>
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <div class="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
                <UIcon name="i-heroicons-document-text" class="w-5 h-5 text-white" />
              </div>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-500">Total Articles</p>
              <p class="text-2xl font-semibold text-gray-900">{{ stats.articles }}</p>
            </div>
          </div>
        </UCard>

        <UCard>
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <div class="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
                <UIcon name="i-heroicons-academic-cap" class="w-5 h-5 text-white" />
              </div>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-500">Thought Leadership</p>
              <p class="text-2xl font-semibold text-gray-900">{{ stats.thoughtLeadership }}</p>
            </div>
          </div>
        </UCard>

        <UCard>
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <div class="w-8 h-8 bg-purple-500 rounded-md flex items-center justify-center">
                <UIcon name="i-heroicons-light-bulb" class="w-5 h-5 text-white" />
              </div>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-500">Initiatives</p>
              <p class="text-2xl font-semibold text-gray-900">{{ stats.initiatives }}</p>
            </div>
          </div>
        </UCard>

        <UCard>
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <div class="w-8 h-8 bg-yellow-500 rounded-md flex items-center justify-center">
                <UIcon name="i-heroicons-users" class="w-5 h-5 text-white" />
              </div>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-500">Partnerships</p>
              <p class="text-2xl font-semibold text-gray-900">{{ stats.partnerships }}</p>
            </div>
          </div>
        </UCard>
      </div>

      <!-- Quick Actions -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <UCard>
          <template #header>
            <h3 class="text-lg font-medium text-gray-900">Quick Actions</h3>
          </template>
          <div class="space-y-4">
            <UButton 
              v-for="action in quickActions" 
              :key="action.name"
              :icon="action.icon"
              :color="action.color"
              variant="ghost"
              class="w-full justify-start"
              @click="handleQuickAction(action)"
            >
              {{ action.name }}
            </UButton>
          </div>
        </UCard>

        <UCard>
          <template #header>
            <h3 class="text-lg font-medium text-gray-900">Recent Activity</h3>
          </template>
          <div class="space-y-4">
            <div v-for="activity in recentActivity" :key="activity.id" class="flex items-start space-x-3">
              <div class="flex-shrink-0">
                <div :class="`w-2 h-2 rounded-full ${activity.status === 'published' ? 'bg-green-400' : 'bg-yellow-400'}`"></div>
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm text-gray-900">{{ activity.description }}</p>
                <p class="text-sm text-gray-500">{{ activity.time }}</p>
              </div>
            </div>
          </div>
        </UCard>
      </div>

      <!-- Content Management -->
      <UCard>
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-medium text-gray-900">Content Management</h3>
            <UButton icon="i-heroicons-plus" @click="navigateTo('/admin/content/new')">
              Add Content
            </UButton>
          </div>
        </template>
        <UTable :rows="contentItems" :columns="contentColumns">
          <template #actions-data="{ row }">
            <UDropdown :items="getContentActions(row)">
              <UButton icon="i-heroicons-ellipsis-vertical" color="gray" variant="ghost" />
            </UDropdown>
          </template>
        </UTable>
      </UCard>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'admin',
  middleware: 'auth'
})

// Reactive data
const stats = ref({
  articles: 24,
  thoughtLeadership: 12,
  initiatives: 8,
  partnerships: 15
})

const quickActions = ref([
  { name: 'Create New Article', icon: 'i-heroicons-document-plus', color: 'blue', action: 'create-article' },
  { name: 'Add Thought Leadership', icon: 'i-heroicons-academic-cap', color: 'green', action: 'add-thought-leadership' },
  { name: 'Manage Initiatives', icon: 'i-heroicons-light-bulb', color: 'purple', action: 'manage-initiatives' },
  { name: 'Update Partnerships', icon: 'i-heroicons-users', color: 'yellow', action: 'update-partnerships' }
])

const recentActivity = ref([
  { id: 1, description: 'New article "Digital Transformation in Africa" published', status: 'published', time: '2 hours ago' },
  { id: 2, description: 'Thought leadership piece "Policy Innovation" updated', status: 'published', time: '4 hours ago' },
  { id: 3, description: 'New initiative "Digital Ekiti" created', status: 'draft', time: '6 hours ago' },
  { id: 4, description: 'Partnership with Tech Hub confirmed', status: 'published', time: '1 day ago' }
])

const contentItems = ref([
  { id: 1, title: 'Digital Transformation in Africa', type: 'Article', status: 'Published', author: 'Admin', date: '2024-08-22' },
  { id: 2, title: 'Policy Innovation Framework', type: 'Thought Leadership', status: 'Draft', author: 'Admin', date: '2024-08-21' },
  { id: 3, title: 'Digital Ekiti Initiative', type: 'Initiative', status: 'Published', author: 'Admin', date: '2024-08-20' }
])

const contentColumns = ref([
  { key: 'title', label: 'Title' },
  { key: 'type', label: 'Type' },
  { key: 'status', label: 'Status' },
  { key: 'author', label: 'Author' },
  { key: 'date', label: 'Date' },
  { key: 'actions', label: 'Actions' }
])

const userMenuItems = ref([
  [{
    label: 'Profile',
    icon: 'i-heroicons-user-circle',
    click: () => navigateTo('/admin/profile')
  }, {
    label: 'Settings',
    icon: 'i-heroicons-cog-6-tooth',
    click: () => navigateTo('/admin/settings')
  }],
  [{
    label: 'Sign out',
    icon: 'i-heroicons-arrow-left-on-rectangle',
    click: () => handleSignOut()
  }]
])

// Methods
const handleQuickAction = (action) => {
  switch (action.action) {
    case 'create-article':
      navigateTo('/admin/content/articles/new')
      break
    case 'add-thought-leadership':
      navigateTo('/admin/content/thought-leadership/new')
      break
    case 'manage-initiatives':
      navigateTo('/admin/content/initiatives')
      break
    case 'update-partnerships':
      navigateTo('/admin/content/partnerships')
      break
  }
}

const getContentActions = (row) => {
  return [
    [{
      label: 'Edit',
      icon: 'i-heroicons-pencil-square',
      click: () => navigateTo(`/admin/content/edit/${row.id}`)
    }, {
      label: 'View',
      icon: 'i-heroicons-eye',
      click: () => navigateTo(`/admin/content/view/${row.id}`)
    }],
    [{
      label: 'Delete',
      icon: 'i-heroicons-trash',
      click: () => handleDeleteContent(row.id)
    }]
  ]
}

const handleDeleteContent = (id) => {
  // Implement delete functionality
  console.log('Delete content:', id)
}

const handleSignOut = () => {
  // Implement sign out functionality
  navigateTo('/admin/login')
}
</script>
