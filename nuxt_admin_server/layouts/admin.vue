<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Sidebar -->
    <aside class="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out" :class="{ '-translate-x-full': !sidebarOpen }">
      <div class="flex items-center justify-between h-16 px-6 border-b border-gray-200">
        <div class="flex items-center">
          <img src="" alt="SF Logo" class="w-8 h-8" />
          <span class="ml-2 text-lg font-semibold text-gray-900">SF Foundation</span>
        </div>
        <button @click="sidebarOpen = false" class="lg:hidden">
          <UIcon name="i-heroicons-x-mark" class="w-6 h-6 text-gray-500" />
        </button>
      </div>
      
      <nav class="mt-6 px-3">
        <div class="space-y-1">
          <NuxtLink 
            v-for="item in navigation" 
            :key="item.name"
            :to="item.href"
            :class="[
              $route.path === item.href
                ? 'bg-blue-50 border-blue-500 text-blue-700'
                : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900',
              'group flex items-center px-3 py-2 text-sm font-medium border-l-4'
            ]"
          >
            <UIcon :name="item.icon" class="mr-3 h-5 w-5" />
            {{ item.name }}
          </NuxtLink>
        </div>
      </nav>

      <!-- User section -->
      <div class="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
        <div class="flex items-center">
          <UAvatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Admin User" />
          <div class="ml-3">
            <p class="text-sm font-medium text-gray-900">Admin User</p>
            <p class="text-xs text-gray-500">admin@sfoundation.org</p>
          </div>
        </div>
      </div>
    </aside>

    <!-- Main content -->
    <div class="lg:pl-64">
      <!-- Top bar -->
      <div class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
        <button @click="sidebarOpen = true" class="lg:hidden">
          <UIcon name="i-heroicons-bars-3" class="w-6 h-6 text-gray-500" />
        </button>
        
        <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
          <div class="flex flex-1"></div>
          <div class="flex items-center gap-x-4 lg:gap-x-6">
            <UButton icon="i-heroicons-bell" color="gray" variant="ghost" />
            <UDropdown :items="userMenuItems">
              <UAvatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Admin User" />
            </UDropdown>
          </div>
        </div>
      </div>

      <!-- Page content -->
      <main class="py-6">
        <slot />
      </main>
    </div>

    <!-- Mobile overlay -->
    <div v-if="sidebarOpen" class="fixed inset-0 z-40 lg:hidden" @click="sidebarOpen = false">
      <div class="fixed inset-0 bg-gray-600 bg-opacity-75"></div>
    </div>
  </div>
</template>

<script setup>
// Sidebar state
const sidebarOpen = ref(false)

// Navigation items
const navigation = ref([
  { name: 'Dashboard', href: '/admin', icon: 'i-heroicons-home' },
  { name: 'Content', href: '/admin/content', icon: 'i-heroicons-document-text' },
  { name: 'Articles', href: '/admin/content/articles', icon: 'i-heroicons-newspaper' },
  { name: 'Thought Leadership', href: '/admin/content/thought-leadership', icon: 'i-heroicons-academic-cap' },
  { name: 'Initiatives', href: '/admin/content/initiatives', icon: 'i-heroicons-light-bulb' },
  { name: 'Partnerships', href: '/admin/content/partnerships', icon: 'i-heroicons-users' },
  { name: 'Media', href: '/admin/media', icon: 'i-heroicons-photo' },
  { name: 'Users', href: '/admin/users', icon: 'i-heroicons-user-group' },
  { name: 'Settings', href: '/admin/settings', icon: 'i-heroicons-cog-6-tooth' }
])

// User menu items
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
const handleSignOut = () => {
  // Clear authentication token
  const authCookie = useCookie('auth-token')
  authCookie.value = null
  
  // Redirect to login page
  navigateTo('/admin/login')
}

// Close sidebar on route change
watch(() => $route.path, () => {
  sidebarOpen.value = false
})
</script>
