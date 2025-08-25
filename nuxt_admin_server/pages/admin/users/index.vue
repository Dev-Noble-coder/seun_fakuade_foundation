<template>
  <div class="space-y-6">
    <!-- Page Header -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">User Management</h1>
        <p class="text-gray-600">Manage admin users, roles, and permissions</p>
      </div>
      <UButton icon="i-heroicons-plus" @click="showCreateModal = true">
        Add User
      </UButton>
    </div>

    <!-- User Filters -->
    <UCard>
      <div class="flex items-center space-x-4">
        <div class="flex-1">
          <UInput 
            v-model="searchQuery" 
            placeholder="Search users..."
            icon="i-heroicons-magnifying-glass"
          />
        </div>
        <USelect 
          v-model="selectedRole" 
          :options="roleOptions"
          placeholder="All Roles"
        />
        <USelect 
          v-model="selectedStatus" 
          :options="statusOptions"
          placeholder="All Status"
        />
      </div>
    </UCard>

    <!-- Users Table -->
    <UCard>
      <UTable 
        :rows="filteredUsers" 
        :columns="columns"
        :loading="isLoading"
      >
        <template #status-data="{ row }">
          <UBadge 
            :value="row.status" 
            :color="getStatusColor(row.status)"
            variant="soft"
          />
        </template>

        <template #role-data="{ row }">
          <UBadge 
            :value="row.role" 
            :color="getRoleColor(row.role)"
            variant="soft"
          />
        </template>

        <template #actions-data="{ row }">
          <UDropdown :items="getActionItems(row)">
            <UButton 
              icon="i-heroicons-ellipsis-vertical" 
              color="gray" 
              variant="ghost" 
              size="sm"
            />
          </UDropdown>
        </template>
      </UTable>
    </UCard>

    <!-- Create User Modal -->
    <UModal v-model="showCreateModal">
      <UCard>
        <template #header>
          <h3 class="text-lg font-medium text-gray-900">Add New User</h3>
        </template>
        
        <div class="space-y-4">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="admin-label">First Name</label>
              <UInput 
                v-model="newUser.firstName" 
                placeholder="Enter first name"
                class="mt-1"
              />
            </div>
            <div>
              <label class="admin-label">Last Name</label>
              <UInput 
                v-model="newUser.lastName" 
                placeholder="Enter last name"
                class="mt-1"
              />
            </div>
          </div>
          
          <div>
            <label class="admin-label">Email Address</label>
            <UInput 
              v-model="newUser.email" 
              type="email"
              placeholder="user@example.com"
              class="mt-1"
            />
          </div>
          
          <div>
            <label class="admin-label">Role</label>
            <USelect 
              v-model="newUser.role" 
              :options="roleOptions"
              placeholder="Select role"
              class="mt-1"
            />
          </div>
          
          <div>
            <label class="admin-label">Permissions</label>
            <div class="space-y-2 mt-2">
              <div v-for="permission in availablePermissions" :key="permission.key" class="flex items-center">
                <UCheckbox 
                  v-model="newUser.permissions[permission.key]" 
                  :id="permission.key"
                />
                <label :for="permission.key" class="ml-2 text-sm text-gray-700">
                  {{ permission.label }}
                </label>
              </div>
            </div>
          </div>
        </div>

        <template #footer>
          <div class="flex justify-end space-x-3">
            <UButton variant="ghost" @click="showCreateModal = false">Cancel</UButton>
            <UButton 
              :loading="isCreating" 
              :disabled="isCreating"
              @click="createUser"
            >
              {{ isCreating ? 'Creating...' : 'Create User' }}
            </UButton>
          </div>
        </template>
      </UCard>
    </UModal>

    <!-- Edit User Modal -->
    <UModal v-model="showEditModal">
      <UCard>
        <template #header>
          <h3 class="text-lg font-medium text-gray-900">Edit User</h3>
        </template>
        
        <div class="space-y-4">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="admin-label">First Name</label>
              <UInput 
                v-model="editingUser.firstName" 
                placeholder="Enter first name"
                class="mt-1"
              />
            </div>
            <div>
              <label class="admin-label">Last Name</label>
              <UInput 
                v-model="editingUser.lastName" 
                placeholder="Enter last name"
                class="mt-1"
              />
            </div>
          </div>
          
          <div>
            <label class="admin-label">Email Address</label>
            <UInput 
              v-model="editingUser.email" 
              type="email"
              placeholder="user@example.com"
              class="mt-1"
            />
          </div>
          
          <div>
            <label class="admin-label">Role</label>
            <USelect 
              v-model="editingUser.role" 
              :options="roleOptions"
              placeholder="Select role"
              class="mt-1"
            />
          </div>
          
          <div>
            <label class="admin-label">Status</label>
            <USelect 
              v-model="editingUser.status" 
              :options="statusOptions"
              placeholder="Select status"
              class="mt-1"
            />
          </div>
          
          <div>
            <label class="admin-label">Permissions</label>
            <div class="space-y-2 mt-2">
              <div v-for="permission in availablePermissions" :key="permission.key" class="flex items-center">
                <UCheckbox 
                  v-model="editingUser.permissions[permission.key]" 
                  :id="`edit-${permission.key}`"
                />
                <label :for="`edit-${permission.key}`" class="ml-2 text-sm text-gray-700">
                  {{ permission.label }}
                </label>
              </div>
            </div>
          </div>
        </div>

        <template #footer>
          <div class="flex justify-end space-x-3">
            <UButton variant="ghost" @click="showEditModal = false">Cancel</UButton>
            <UButton 
              :loading="isUpdating" 
              :disabled="isUpdating"
              @click="updateUser"
            >
              {{ isUpdating ? 'Updating...' : 'Update User' }}
            </UButton>
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

// State
const showCreateModal = ref(false)
const showEditModal = ref(false)
const isLoading = ref(false)
const isCreating = ref(false)
const isUpdating = ref(false)
const searchQuery = ref('')
const selectedRole = ref('')
const selectedStatus = ref('')
const editingUser = ref(null)

// New user data
const newUser = ref({
  firstName: '',
  lastName: '',
  email: '',
  role: '',
  permissions: {}
})

// Table columns
const columns = ref([
  {
    key: 'name',
    label: 'Name',
    sortable: true
  },
  {
    key: 'email',
    label: 'Email',
    sortable: true
  },
  {
    key: 'role',
    label: 'Role',
    sortable: true
  },
  {
    key: 'status',
    label: 'Status',
    sortable: true
  },
  {
    key: 'lastLogin',
    label: 'Last Login',
    sortable: true
  },
  {
    key: 'actions',
    label: 'Actions'
  }
])

// Options
const roleOptions = ref([
  { label: 'All Roles', value: '' },
  { label: 'Super Admin', value: 'super-admin' },
  { label: 'Administrator', value: 'admin' },
  { label: 'Content Manager', value: 'content-manager' },
  { label: 'Editor', value: 'editor' },
  { label: 'Viewer', value: 'viewer' }
])

const statusOptions = ref([
  { label: 'All Status', value: '' },
  { label: 'Active', value: 'active' },
  { label: 'Inactive', value: 'inactive' },
  { label: 'Suspended', value: 'suspended' }
])

const availablePermissions = ref([
  { key: 'content_manage', label: 'Manage Content' },
  { key: 'users_manage', label: 'Manage Users' },
  { key: 'settings_manage', label: 'Manage Settings' },
  { key: 'media_manage', label: 'Manage Media' },
  { key: 'analytics_view', label: 'View Analytics' },
  { key: 'system_admin', label: 'System Administration' }
])

// Sample users data
const users = ref([
  {
    id: 1,
    firstName: 'Admin',
    lastName: 'User',
    email: 'admin@sfoundation.org',
    role: 'super-admin',
    status: 'active',
    lastLogin: '2024-08-22T10:00:00Z',
    permissions: {
      content_manage: true,
      users_manage: true,
      settings_manage: true,
      media_manage: true,
      analytics_view: true,
      system_admin: true
    }
  },
  {
    id: 2,
    firstName: 'Content',
    lastName: 'Manager',
    email: 'content@sfoundation.org',
    role: 'content-manager',
    status: 'active',
    lastLogin: '2024-08-21T15:30:00Z',
    permissions: {
      content_manage: true,
      users_manage: false,
      settings_manage: false,
      media_manage: true,
      analytics_view: true,
      system_admin: false
    }
  }
])

// Computed
const filteredUsers = computed(() => {
  return users.value.filter(user => {
    const matchesSearch = !searchQuery.value || 
      `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesRole = !selectedRole.value || user.role === selectedRole.value
    const matchesStatus = !selectedStatus.value || user.status === selectedStatus.value
    
    return matchesSearch && matchesRole && matchesStatus
  })
})

// Methods
const getStatusColor = (status) => {
  switch (status) {
    case 'active': return 'green'
    case 'inactive': return 'gray'
    case 'suspended': return 'red'
    default: return 'gray'
  }
}

const getRoleColor = (role) => {
  switch (role) {
    case 'super-admin': return 'red'
    case 'admin': return 'blue'
    case 'content-manager': return 'purple'
    case 'editor': return 'green'
    case 'viewer': return 'gray'
    default: return 'gray'
  }
}

const getActionItems = (user) => {
  return [
    [{
      label: 'Edit',
      icon: 'i-heroicons-pencil-square',
      click: () => editUser(user)
    }, {
      label: 'View Profile',
      icon: 'i-heroicons-user-circle',
      click: () => viewProfile(user)
    }],
    [{
      label: user.status === 'active' ? 'Suspend' : 'Activate',
      icon: user.status === 'active' ? 'i-heroicons-pause' : 'i-heroicons-play',
      click: () => toggleUserStatus(user)
    }, {
      label: 'Reset Password',
      icon: 'i-heroicons-key',
      click: () => resetPassword(user)
    }],
    [{
      label: 'Delete',
      icon: 'i-heroicons-trash',
      click: () => deleteUser(user)
    }]
  ]
}

const editUser = (user) => {
  editingUser.value = { ...user }
  showEditModal.value = true
}

const viewProfile = (user) => {
  // Navigate to user profile page
  console.log('View profile:', user)
}

const toggleUserStatus = (user) => {
  user.status = user.status === 'active' ? 'suspended' : 'active'
  console.log('User status updated:', user)
}

const resetPassword = (user) => {
  // Implement password reset
  console.log('Reset password for:', user)
}

const deleteUser = (user) => {
  if (confirm(`Are you sure you want to delete ${user.firstName} ${user.lastName}?`)) {
    const index = users.value.findIndex(u => u.id === user.id)
    if (index > -1) {
      users.value.splice(index, 1)
    }
  }
}

const createUser = async () => {
  try {
    isCreating.value = true
    
    // Validate required fields
    if (!newUser.value.firstName || !newUser.value.lastName || !newUser.value.email || !newUser.value.role) {
      console.error('Please fill in all required fields')
      return
    }
    
    // Create new user
    const user = {
      id: Date.now(),
      ...newUser.value,
      status: 'active',
      lastLogin: null,
      permissions: newUser.value.permissions || {}
    }
    
    users.value.push(user)
    
    // Reset form
    newUser.value = {
      firstName: '',
      lastName: '',
      email: '',
      role: '',
      permissions: {}
    }
    
    showCreateModal.value = false
    
  } catch (error) {
    console.error('Error creating user:', error)
  } finally {
    isCreating.value = false
  }
}

const updateUser = async () => {
  try {
    isUpdating.value = true
    
    // Find and update user
    const index = users.value.findIndex(u => u.id === editingUser.value.id)
    if (index > -1) {
      users.value[index] = { ...editingUser.value }
    }
    
    showEditModal.value = false
    
  } catch (error) {
    console.error('Error updating user:', error)
  } finally {
    isUpdating.value = false
  }
}

// Initialize permissions for new user
onMounted(() => {
  availablePermissions.value.forEach(permission => {
    newUser.value.permissions[permission.key] = false
  })
})
</script>
