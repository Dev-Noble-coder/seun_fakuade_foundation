<template>
  <div class="space-y-6">
    <!-- Page Header -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">Create New Thought Leadership</h1>
        <p class="text-gray-600">Add a new thought leadership piece to showcase expertise</p>
      </div>
      <div class="flex space-x-3">
        <UButton variant="ghost" @click="navigateTo('/admin/content')">
          Cancel
        </UButton>
        <UButton 
          :loading="isSaving" 
          :disabled="isSaving"
          @click="saveThoughtLeadership"
        >
          {{ isSaving ? 'Saving...' : 'Save Thought Leadership' }}
        </UButton>
      </div>
    </div>

    <!-- Thought Leadership Form -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Main Content -->
      <div class="lg:col-span-2 space-y-6">
        <UCard>
          <template #header>
            <h3 class="text-lg font-medium text-gray-900">Content</h3>
          </template>
          
          <div class="space-y-4">
            <div>
              <label class="admin-label">Title *</label>
              <UInput 
                v-model="thoughtLeadership.title" 
                placeholder="Enter thought leadership title"
                class="mt-1"
              />
            </div>
            
            <div>
              <label class="admin-label">Subtitle</label>
              <UInput 
                v-model="thoughtLeadership.subtitle" 
                placeholder="Brief subtitle or tagline"
                class="mt-1"
              />
            </div>
            
            <div>
              <label class="admin-label">Executive Summary</label>
              <UTextarea 
                v-model="thoughtLeadership.executiveSummary" 
                placeholder="Key insights and takeaways"
                rows="4"
                class="mt-1"
              />
            </div>
            
            <div>
              <label class="admin-label">Content *</label>
              <UTextarea 
                v-model="thoughtLeadership.content" 
                placeholder="Write your thought leadership content here..."
                rows="15"
                class="mt-1"
              />
            </div>
            
            <div>
              <label class="admin-label">Key Insights</label>
              <UTextarea 
                v-model="thoughtLeadership.keyInsights" 
                placeholder="List key insights (one per line)"
                rows="4"
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
                v-model="thoughtLeadership.metaTitle" 
                placeholder="SEO title (if different from main title)"
                class="mt-1"
              />
            </div>
            
            <div>
              <label class="admin-label">Meta Description</label>
              <UTextarea 
                v-model="thoughtLeadership.metaDescription" 
                placeholder="SEO description for search engines"
                rows="3"
                class="mt-1"
              />
            </div>
            
            <div>
              <label class="admin-label">Keywords</label>
              <UInput 
                v-model="thoughtLeadership.keywords" 
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
                v-model="thoughtLeadership.status" 
                :options="statusOptions"
                class="mt-1"
              />
            </div>
            
            <div>
              <label class="admin-label">Category</label>
              <USelect 
                v-model="thoughtLeadership.category" 
                :options="categoryOptions"
                class="mt-1"
              />
            </div>
            
            <div>
              <label class="admin-label">Tags</label>
              <UInput 
                v-model="thoughtLeadership.tags" 
                placeholder="Comma-separated tags"
                class="mt-1"
              />
            </div>
            
            <div>
              <label class="admin-label">Author</label>
              <UInput 
                v-model="thoughtLeadership.author" 
                placeholder="Author name"
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
                v-model="thoughtLeadership.featured" 
                id="featured"
              />
              <label for="featured" class="ml-2 text-sm text-gray-700">
                Featured Thought Leadership
              </label>
            </div>
            
            <div class="flex items-center">
              <UCheckbox 
                v-model="thoughtLeadership.allowComments" 
                id="comments"
              />
              <label for="comments" class="ml-2 text-sm text-gray-700">
                Allow Comments
              </label>
            </div>
            
            <div class="flex items-center">
              <UCheckbox 
                v-model="thoughtLeadership.socialShare" 
                id="social"
              />
              <label for="social" class="ml-2 text-sm text-gray-700">
                Enable Social Sharing
              </label>
            </div>
            
            <div class="flex items-center">
              <UCheckbox 
                v-model="thoughtLeadership.newsletter" 
                id="newsletter"
              />
              <label for="newsletter" class="ml-2 text-sm text-gray-700">
                Include in Newsletter
              </label>
            </div>
          </div>
        </UCard>

        <UCard>
          <template #header>
            <h3 class="text-lg font-medium text-gray-900">Additional Information</h3>
          </template>
          
          <div class="space-y-4">
            <div>
              <label class="admin-label">Reading Time (minutes)</label>
              <UInput 
                v-model="thoughtLeadership.readingTime" 
                type="number"
                min="1"
                placeholder="Estimated reading time"
                class="mt-1"
              />
            </div>
            
            <div>
              <label class="admin-label">Target Audience</label>
              <USelect 
                v-model="thoughtLeadership.targetAudience" 
                :options="audienceOptions"
                placeholder="Select target audience"
                class="mt-1"
              />
            </div>
            
            <div>
              <label class="admin-label">Industry Focus</label>
              <UInput 
                v-model="thoughtLeadership.industryFocus" 
                placeholder="e.g., Technology, Healthcare, Finance"
                class="mt-1"
              />
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

// Thought Leadership data
const thoughtLeadership = ref({
  title: '',
  subtitle: '',
  executiveSummary: '',
  content: '',
  keyInsights: '',
  metaTitle: '',
  metaDescription: '',
  keywords: '',
  status: 'draft',
  category: '',
  tags: '',
  author: '',
  featured: false,
  allowComments: true,
  socialShare: true,
  newsletter: false,
  readingTime: '',
  targetAudience: '',
  industryFocus: ''
})

// Form options
const statusOptions = ref([
  { label: 'Draft', value: 'draft' },
  { label: 'Review', value: 'review' },
  { label: 'Published', value: 'published' }
])

const categoryOptions = ref([
  { label: 'Policy & Governance', value: 'policy-governance' },
  { label: 'Technology & Innovation', value: 'technology-innovation' },
  { label: 'Economic Development', value: 'economic-development' },
  { label: 'Social Impact', value: 'social-impact' },
  { label: 'Education & Skills', value: 'education-skills' },
  { label: 'Sustainability', value: 'sustainability' }
])

const audienceOptions = ref([
  { label: 'Policy Makers', value: 'policy-makers' },
  { label: 'Business Leaders', value: 'business-leaders' },
  { label: 'Academics', value: 'academics' },
  { label: 'General Public', value: 'general-public' },
  { label: 'Industry Professionals', value: 'industry-professionals' }
])

// State
const isSaving = ref(false)

// Methods
const saveThoughtLeadership = async () => {
  try {
    isSaving.value = true
    
    // Validate required fields
    if (!thoughtLeadership.value.title || !thoughtLeadership.value.content) {
      console.error('Title and content are required')
      return
    }
    
    // Prepare thought leadership data
    const thoughtLeadershipData = {
      ...thoughtLeadership.value,
      tags: thoughtLeadership.value.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      keyInsights: thoughtLeadership.value.keyInsights.split('\n').filter(insight => insight.trim()),
      author: thoughtLeadership.value.author || 'Admin', // In real app, get from authenticated user
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    
    // In a real app, this would make an API call
    console.log('Saving thought leadership:', thoughtLeadershipData)
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Redirect to content list
    await navigateTo('/admin/content')
    
  } catch (error) {
    console.error('Error saving thought leadership:', error)
  } finally {
    isSaving.value = false
  }
}
</script>
