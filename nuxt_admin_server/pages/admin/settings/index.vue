<template>
  <div class="space-y-6">
    <!-- Page Header -->
    <div>
      <h1 class="text-2xl font-bold text-gray-900">Settings</h1>
      <p class="text-gray-600">Manage your admin dashboard and system preferences</p>
    </div>

    <!-- Settings Tabs -->
    <UTabs :items="settingsTabs" v-model="activeTab">
      <template #item="{ item }">
        <div class="flex items-center space-x-2">
          <UIcon :name="item.icon" class="w-5 h-5" />
          <span>{{ item.label }}</span>
        </div>
      </template>

      <!-- General Settings -->
      <template #general>
        <UCard>
          <template #header>
            <h3 class="text-lg font-medium text-gray-900">General Settings</h3>
          </template>
          
          <div class="space-y-6">
            <div>
              <label class="admin-label">Site Name</label>
              <UInput 
                v-model="settings.general.siteName" 
                placeholder="Seun Fakuade Foundation"
                class="mt-1"
              />
            </div>
            
            <div>
              <label class="admin-label">Site Description</label>
              <UTextarea 
                v-model="settings.general.siteDescription" 
                placeholder="Brief description of your organization"
                rows="3"
                class="mt-1"
              />
            </div>
            
            <div>
              <label class="admin-label">Admin Email</label>
              <UInput 
                v-model="settings.general.adminEmail" 
                type="email"
                placeholder="admin@sfoundation.org"
                class="mt-1"
              />
            </div>
            
            <div>
              <label class="admin-label">Timezone</label>
              <USelect 
                v-model="settings.general.timezone" 
                :options="timezoneOptions"
                class="mt-1"
              />
            </div>
            
            <div>
              <label class="admin-label">Date Format</label>
              <USelect 
                v-model="settings.general.dateFormat" 
                :options="dateFormatOptions"
                class="mt-1"
              />
            </div>
          </div>
        </UCard>
      </template>

      <!-- Content Settings -->
      <template #content>
        <UCard>
          <template #header>
            <h3 class="text-lg font-medium text-gray-900">Content Settings</h3>
          </template>
          
          <div class="space-y-6">
            <div>
              <label class="admin-label">Default Article Status</label>
              <USelect 
                v-model="settings.content.defaultArticleStatus" 
                :options="statusOptions"
                class="mt-1"
              />
            </div>
            
            <div>
              <label class="admin-label">Allow Comments</label>
              <UCheckbox 
                v-model="settings.content.allowComments" 
                id="allow-comments"
              />
              <label for="allow-comments" class="ml-2 text-sm text-gray-700">
                Enable comments on articles by default
              </label>
            </div>
            
            <div>
              <label class="admin-label">Auto-save Drafts</label>
              <UCheckbox 
                v-model="settings.content.autoSaveDrafts" 
                id="auto-save"
              />
              <label for="auto-save" class="ml-2 text-sm text-gray-700">
                Automatically save drafts while editing
              </label>
            </div>
            
            <div>
              <label class="admin-label">Draft Auto-save Interval (minutes)</label>
              <UInput 
                v-model="settings.content.draftAutoSaveInterval" 
                type="number"
                min="1"
                max="60"
                class="mt-1"
              />
            </div>
            
            <div>
              <label class="admin-label">Maximum File Upload Size (MB)</label>
              <UInput 
                v-model="settings.content.maxFileSize" 
                type="number"
                min="1"
                max="100"
                class="mt-1"
              />
            </div>
            
            <div>
              <label class="admin-label">Allowed File Types</label>
              <UInput 
                v-model="settings.content.allowedFileTypes" 
                placeholder="jpg,jpeg,png,gif,pdf,doc,docx"
                class="mt-1"
              />
            </div>
          </div>
        </UCard>
      </template>

      <!-- SEO Settings -->
      <template #seo>
        <UCard>
          <template #header>
            <h3 class="text-lg font-medium text-gray-900">SEO Settings</h3>
          </template>
          
          <div class="space-y-6">
            <div>
              <label class="admin-label">Default Meta Title</label>
              <UInput 
                v-model="settings.seo.defaultMetaTitle" 
                placeholder="Default title for pages without custom meta title"
                class="mt-1"
              />
            </div>
            
            <div>
              <label class="admin-label">Default Meta Description</label>
              <UTextarea 
                v-model="settings.seo.defaultMetaDescription" 
                placeholder="Default description for pages without custom meta description"
                rows="3"
                class="mt-1"
              />
            </div>
            
            <div>
              <label class="admin-label">Default Keywords</label>
              <UInput 
                v-model="settings.seo.defaultKeywords" 
                placeholder="Comma-separated default keywords"
                class="mt-1"
              />
            </div>
            
            <div>
              <label class="admin-label">Google Analytics ID</label>
              <UInput 
                v-model="settings.seo.googleAnalyticsId" 
                placeholder="G-XXXXXXXXXX"
                class="mt-1"
              />
            </div>
            
            <div>
              <label class="admin-label">Enable Social Media Meta Tags</label>
              <UCheckbox 
                v-model="settings.seo.enableSocialMeta" 
                id="social-meta"
              />
              <label for="social-meta" class="ml-2 text-sm text-gray-700">
                Generate Open Graph and Twitter Card meta tags
              </label>
            </div>
          </div>
        </UCard>
      </template>

      <!-- User Settings -->
      <template #user>
        <UCard>
          <template #header>
            <h3 class="text-lg font-medium text-gray-900">User Preferences</h3>
          </template>
          
          <div class="space-y-6">
            <div>
              <label class="admin-label">Display Name</label>
              <UInput 
                v-model="settings.user.displayName" 
                placeholder="Your display name"
                class="mt-1"
              />
            </div>
            
            <div>
              <label class="admin-label">Email Notifications</label>
              <div class="space-y-3 mt-2">
                <div class="flex items-center">
                  <UCheckbox 
                    v-model="settings.user.notifications.newContent" 
                    id="notify-content"
                  />
                  <label for="notify-content" class="ml-2 text-sm text-gray-700">
                    New content submissions
                  </label>
                </div>
                <div class="flex items-center">
                  <UCheckbox 
                    v-model="settings.user.notifications.comments" 
                    id="notify-comments"
                  />
                  <label for="notify-comments" class="ml-2 text-sm text-gray-700">
                    New comments
                  </label>
                </div>
                <div class="flex items-center">
                  <UCheckbox 
                    v-model="settings.user.notifications.system" 
                    id="notify-system"
                  />
                  <label for="notify-system" class="ml-2 text-sm text-gray-700">
                    System updates and maintenance
                  </label>
                </div>
              </div>
            </div>
            
            <div>
              <label class="admin-label">Dashboard Theme</label>
              <USelect 
                v-model="settings.user.theme" 
                :options="themeOptions"
                class="mt-1"
              />
            </div>
            
            <div>
              <label class="admin-label">Items Per Page</label>
              <USelect 
                v-model="settings.user.itemsPerPage" 
                :options="itemsPerPageOptions"
                class="mt-1"
              />
            </div>
          </div>
        </UCard>
      </template>

      <!-- Security Settings -->
      <template #security>
        <UCard>
          <template #header>
            <h3 class="text-lg font-medium text-gray-900">Security Settings</h3>
          </template>
          
          <div class="space-y-6">
            <div>
              <label class="admin-label">Session Timeout (minutes)</label>
              <UInput 
                v-model="settings.security.sessionTimeout" 
                type="number"
                min="15"
                max="1440"
                class="mt-1"
              />
            </div>
            
            <div>
              <label class="admin-label">Require Two-Factor Authentication</label>
              <UCheckbox 
                v-model="settings.security.require2FA" 
                id="require-2fa"
              />
              <label for="require-2fa" class="ml-2 text-sm text-gray-700">
                Force all users to enable 2FA
              </label>
            </div>
            
            <div>
              <label class="admin-label">Password Policy</label>
              <div class="space-y-3 mt-2">
                <div class="flex items-center">
                  <UCheckbox 
                    v-model="settings.security.passwordPolicy.minLength" 
                    id="min-length"
                  />
                  <label for="min-length" class="ml-2 text-sm text-gray-700">
                    Minimum 8 characters
                  </label>
                </div>
                <div class="flex items-center">
                  <UCheckbox 
                    v-model="settings.security.passwordPolicy.requireUppercase" 
                    id="require-upper"
                  />
                  <label for="require-upper" class="ml-2 text-sm text-gray-700">
                    Require uppercase letters
                  </label>
                </div>
                <div class="flex items-center">
                  <UCheckbox 
                    v-model="settings.security.passwordPolicy.requireNumbers" 
                    id="require-numbers"
                  />
                  <label for="require-numbers" class="ml-2 text-sm text-gray-700">
                    Require numbers
                  </label>
                </div>
                <div class="flex items-center">
                  <UCheckbox 
                    v-model="settings.security.passwordPolicy.requireSpecialChars" 
                    id="require-special"
                  />
                  <label for="require-special" class="ml-2 text-sm text-gray-700">
                    Require special characters
                  </label>
                </div>
              </div>
            </div>
            
            <div>
              <label class="admin-label">Failed Login Attempts Before Lockout</label>
              <UInput 
                v-model="settings.security.maxLoginAttempts" 
                type="number"
                min="3"
                max="10"
                class="mt-1"
              />
            </div>
          </div>
        </UCard>
      </template>
    </UTabs>

    <!-- Save Button -->
    <div class="flex justify-end">
      <UButton 
        :loading="isSaving" 
        :disabled="isSaving"
        @click="saveSettings"
        size="lg"
      >
        {{ isSaving ? 'Saving...' : 'Save Settings' }}
      </UButton>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'admin',
  middleware: 'auth'
})

// State
const activeTab = ref('general')
const isSaving = ref(false)

// Settings data
const settings = ref({
  general: {
    siteName: 'Seun Fakuade Foundation',
    siteDescription: 'Empowering communities through innovation and leadership',
    adminEmail: 'admin@sfoundation.org',
    timezone: 'Africa/Lagos',
    dateFormat: 'MM/DD/YYYY'
  },
  content: {
    defaultArticleStatus: 'draft',
    allowComments: true,
    autoSaveDrafts: true,
    draftAutoSaveInterval: 5,
    maxFileSize: 10,
    allowedFileTypes: 'jpg,jpeg,png,gif,pdf,doc,docx'
  },
  seo: {
    defaultMetaTitle: 'Seun Fakuade Foundation - Empowering Communities',
    defaultMetaDescription: 'Leading innovation and development in Africa through policy, technology, and community engagement.',
    defaultKeywords: 'Africa, innovation, policy, technology, development, community',
    googleAnalyticsId: '',
    enableSocialMeta: true
  },
  user: {
    displayName: 'Admin User',
    notifications: {
      newContent: true,
      comments: true,
      system: false
    },
    theme: 'light',
    itemsPerPage: 20
  },
  security: {
    sessionTimeout: 60,
    require2FA: false,
    passwordPolicy: {
      minLength: true,
      requireUppercase: true,
      requireNumbers: true,
      requireSpecialChars: false
    },
    maxLoginAttempts: 5
  }
})

// Options
const settingsTabs = ref([
  { key: 'general', label: 'General', icon: 'i-heroicons-cog-6-tooth' },
  { key: 'content', label: 'Content', icon: 'i-heroicons-document-text' },
  { key: 'seo', label: 'SEO', icon: 'i-heroicons-magnifying-glass' },
  { key: 'user', label: 'User', icon: 'i-heroicons-user' },
  { key: 'security', label: 'Security', icon: 'i-heroicons-shield-check' }
])

const timezoneOptions = ref([
  { label: 'Africa/Lagos (GMT+1)', value: 'Africa/Lagos' },
  { label: 'UTC (GMT+0)', value: 'UTC' },
  { label: 'America/New_York (GMT-5)', value: 'America/New_York' },
  { label: 'Europe/London (GMT+0)', value: 'Europe/London' }
])

const dateFormatOptions = ref([
  { label: 'MM/DD/YYYY', value: 'MM/DD/YYYY' },
  { label: 'DD/MM/YYYY', value: 'DD/MM/YYYY' },
  { label: 'YYYY-MM-DD', value: 'YYYY-MM-DD' }
])

const statusOptions = ref([
  { label: 'Draft', value: 'draft' },
  { label: 'Review', value: 'review' },
  { label: 'Published', value: 'published' }
])

const themeOptions = ref([
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' },
  { label: 'Auto', value: 'auto' }
])

const itemsPerPageOptions = ref([
  { label: '10 items', value: 10 },
  { label: '20 items', value: 20 },
  { label: '50 items', value: 50 },
  { label: '100 items', value: 100 }
])

// Methods
const saveSettings = async () => {
  try {
    isSaving.value = true
    
    // In a real app, this would make an API call to save settings
    console.log('Saving settings:', settings.value)
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Show success message
    console.log('Settings saved successfully')
    
  } catch (error) {
    console.error('Error saving settings:', error)
  } finally {
    isSaving.value = false
  }
}
</script>
