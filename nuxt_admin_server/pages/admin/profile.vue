<template>
  <div class="space-y-6">
    <!-- Page Header -->
    <div>
      <h1 class="text-2xl font-bold text-gray-900">Profile</h1>
      <p class="text-gray-600">Manage your account information and preferences</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Profile Information -->
      <div class="lg:col-span-2 space-y-6">
        <UCard>
          <template #header>
            <h3 class="text-lg font-medium text-gray-900">Profile Information</h3>
          </template>
          
          <div class="space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="admin-label">First Name</label>
                <UInput 
                  v-model="profile.firstName" 
                  placeholder="Enter your first name"
                  class="mt-1"
                />
              </div>
              
              <div>
                <label class="admin-label">Last Name</label>
                <UInput 
                  v-model="profile.lastName" 
                  placeholder="Enter your last name"
                  class="mt-1"
                />
              </div>
            </div>
            
            <div>
              <label class="admin-label">Email Address</label>
              <UInput 
                v-model="profile.email" 
                type="email"
                placeholder="your.email@example.com"
                class="mt-1"
              />
            </div>
            
            <div>
              <label class="admin-label">Bio</label>
              <UTextarea 
                v-model="profile.bio" 
                placeholder="Tell us about yourself..."
                rows="4"
                class="mt-1"
              />
            </div>
            
            <div>
              <label class="admin-label">Job Title</label>
              <UInput 
                v-model="profile.jobTitle" 
                placeholder="e.g., Administrator, Content Manager"
                class="mt-1"
              />
            </div>
            
            <div>
              <label class="admin-label">Phone Number</label>
              <UInput 
                v-model="profile.phone" 
                placeholder="+234 XXX XXX XXXX"
                class="mt-1"
              />
            </div>
          </div>
        </UCard>

        <UCard>
          <template #header>
            <h3 class="text-lg font-medium text-gray-900">Change Password</h3>
          </template>
          
          <div class="space-y-4">
            <div>
              <label class="admin-label">Current Password</label>
              <UInput 
                v-model="passwordChange.currentPassword" 
                type="password"
                placeholder="Enter your current password"
                class="mt-1"
              />
            </div>
            
            <div>
              <label class="admin-label">New Password</label>
              <UInput 
                v-model="passwordChange.newPassword" 
                type="password"
                placeholder="Enter your new password"
                class="mt-1"
              />
            </div>
            
            <div>
              <label class="admin-label">Confirm New Password</label>
              <UInput 
                v-model="passwordChange.confirmPassword" 
                type="password"
                placeholder="Confirm your new password"
                class="mt-1"
              />
            </div>
            
            <div class="flex justify-end">
              <UButton 
                :loading="isChangingPassword" 
                :disabled="isChangingPassword"
                @click="changePassword"
              >
                {{ isChangingPassword ? 'Changing...' : 'Change Password' }}
              </UButton>
            </div>
          </div>
        </UCard>
      </div>

      <!-- Sidebar -->
      <div class="space-y-6">
        <!-- Profile Picture -->
        <UCard>
          <template #header>
            <h3 class="text-lg font-medium text-gray-900">Profile Picture</h3>
          </template>
          
          <div class="text-center">
            <div class="relative inline-block">
              <img 
                :src="profile.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'" 
                alt="Profile Picture"
                class="w-32 h-32 rounded-full object-cover mx-auto"
              />
              <button 
                class="absolute bottom-0 right-0 bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 transition-colors"
                @click="triggerAvatarUpload"
              >
                <UIcon name="i-heroicons-camera" class="w-4 h-4" />
              </button>
            </div>
            
            <input 
              ref="avatarInput"
              type="file" 
              accept="image/*"
              class="hidden"
              @change="handleAvatarChange"
            />
            
            <p class="text-sm text-gray-500 mt-2">Click the camera icon to change</p>
          </div>
        </UCard>

        <!-- Account Status -->
        <UCard>
          <template #header>
            <h3 class="text-lg font-medium text-gray-900">Account Status</h3>
          </template>
          
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-600">Status</span>
              <UBadge value="Active" color="green" variant="soft" />
            </div>
            
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-600">Role</span>
              <span class="text-sm font-medium text-gray-900">Administrator</span>
            </div>
            
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-600">Member Since</span>
              <span class="text-sm text-gray-900">August 2024</span>
            </div>
            
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-600">Last Login</span>
              <span class="text-sm text-gray-900">Today</span>
            </div>
          </div>
        </UCard>

        <!-- Two-Factor Authentication -->
        <UCard>
          <template #header>
            <h3 class="text-lg font-medium text-gray-900">Two-Factor Authentication</h3>
          </template>
          
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-600">2FA Status</span>
              <UBadge value="Disabled" color="gray" variant="soft" />
            </div>
            
            <UButton 
              variant="outline" 
              size="sm"
              class="w-full"
              @click="enable2FA"
            >
              Enable 2FA
            </UButton>
            
            <p class="text-xs text-gray-500">
              Add an extra layer of security to your account
            </p>
          </div>
        </UCard>
      </div>
    </div>

    <!-- Save Button -->
    <div class="flex justify-end">
      <UButton 
        :loading="isSaving" 
        :disabled="isSaving"
        @click="saveProfile"
        size="lg"
      >
        {{ isSaving ? 'Saving...' : 'Save Changes' }}
      </UButton>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'admin',
  middleware: 'auth'
})

// Profile data
const profile = ref({
  firstName: 'Admin',
  lastName: 'User',
  email: 'admin@sfoundation.org',
  bio: 'Administrator for the Seun Fakuade Foundation. Passionate about community development and innovation.',
  jobTitle: 'System Administrator',
  phone: '+234 800 000 0000',
  avatar: null
})

// Password change data
const passwordChange = ref({
  currentPassword: '',
  newPassword: '',
  confirmPassword: ''
})

// State
const isSaving = ref(false)
const isChangingPassword = ref(false)

// Refs
const avatarInput = ref(null)

// Methods
const triggerAvatarUpload = () => {
  avatarInput.value?.click()
}

const handleAvatarChange = (event) => {
  const file = event.target.files[0]
  if (file) {
    // Create a preview URL
    profile.value.avatar = URL.createObjectURL(file)
    
    // In a real app, you would upload this file to your server
    console.log('Avatar file selected:', file)
  }
}

const saveProfile = async () => {
  try {
    isSaving.value = true
    
    // In a real app, this would make an API call to save profile
    console.log('Saving profile:', profile.value)
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Show success message
    console.log('Profile saved successfully')
    
  } catch (error) {
    console.error('Error saving profile:', error)
  } finally {
    isSaving.value = false
  }
}

const changePassword = async () => {
  try {
    isChangingPassword.value = true
    
    // Validate passwords
    if (passwordChange.value.newPassword !== passwordChange.value.confirmPassword) {
      console.error('New passwords do not match')
      return
    }
    
    if (passwordChange.value.newPassword.length < 8) {
      console.error('Password must be at least 8 characters long')
      return
    }
    
    // In a real app, this would make an API call to change password
    console.log('Changing password...')
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Reset form
    passwordChange.value = {
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    }
    
    console.log('Password changed successfully')
    
  } catch (error) {
    console.error('Error changing password:', error)
  } finally {
    isChangingPassword.value = false
  }
}

const enable2FA = () => {
  // Implement 2FA setup
  console.log('Enabling 2FA...')
}
</script>
