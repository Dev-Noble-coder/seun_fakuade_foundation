<template>
  <div class="space-y-6">
    <!-- Page Header -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">Create New Initiative</h1>
        <p class="text-gray-600">Add a new foundation initiative or project</p>
      </div>
      <div class="flex space-x-3">
        <UButton variant="ghost" @click="navigateTo('/admin/content')">
          Cancel
        </UButton>
        <UButton 
          :loading="isSaving" 
          :disabled="isSaving"
          @click="saveInitiative"
        >
          {{ isSaving ? 'Saving...' : 'Save Initiative' }}
        </UButton>
      </div>
    </div>

    <!-- Initiative Form -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Main Content -->
      <div class="lg:col-span-2 space-y-6">
        <UCard>
          <template #header>
            <h3 class="text-lg font-medium text-gray-900">Initiative Details</h3>
          </template>
          
          <div class="space-y-4">
            <div>
              <label class="admin-label">Title *</label>
              <UInput 
                v-model="initiative.title" 
                placeholder="Enter initiative title"
                class="mt-1"
              />
            </div>
            
            <div>
              <label class="admin-label">Tagline</label>
              <UInput 
                v-model="initiative.tagline" 
                placeholder="Brief description or tagline"
                class="mt-1"
              />
            </div>
            
            <div>
              <label class="admin-label">Description *</label>
              <UTextarea 
                v-model="initiative.description" 
                placeholder="Detailed description of the initiative"
                rows="6"
                class="mt-1"
              />
            </div>
            
            <div>
              <label class="admin-label">Objectives</label>
              <UTextarea 
                v-model="initiative.objectives" 
                placeholder="List the main objectives (one per line)"
                rows="4"
                class="mt-1"
              />
            </div>
            
            <div>
              <label class="admin-label">Expected Outcomes</label>
              <UTextarea 
                v-model="initiative.expectedOutcomes" 
                placeholder="What do you expect to achieve?"
                rows="4"
                class="mt-1"
              />
            </div>
            
            <div>
              <label class="admin-label">Implementation Plan</label>
              <UTextarea 
                v-model="initiative.implementationPlan" 
                placeholder="How will this initiative be implemented?"
                rows="6"
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
                v-model="initiative.metaTitle" 
                placeholder="SEO title (if different from main title)"
                class="mt-1"
              />
            </div>
            
            <div>
              <label class="admin-label">Meta Description</label>
              <UTextarea 
                v-model="initiative.metaDescription" 
                placeholder="SEO description for search engines"
                rows="3"
                class="mt-1"
              />
            </div>
            
            <div>
              <label class="admin-label">Keywords</label>
              <UInput 
                v-model="initiative.keywords" 
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
                v-model="initiative.status" 
                :options="statusOptions"
                class="mt-1"
              />
            </div>
            
            <div>
              <label class="admin-label">Category</label>
              <USelect 
                v-model="initiative.category" 
                :options="categoryOptions"
                class="mt-1"
              />
            </div>
            
            <div>
              <label class="admin-label">Tags</label>
              <UInput 
                v-model="initiative.tags" 
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
            <h3 class="text-lg font-medium text-gray-900">Timeline & Resources</h3>
          </template>
          
          <div class="space-y-4">
            <div>
              <label class="admin-label">Start Date</label>
              <UInput 
                v-model="initiative.startDate" 
                type="date"
                class="mt-1"
              />
            </div>
            
            <div>
              <label class="admin-label">End Date</label>
              <UInput 
                v-model="initiative.endDate" 
                type="date"
                class="mt-1"
              />
            </div>
            
            <div>
              <label class="admin-label">Duration (months)</label>
              <UInput 
                v-model="initiative.duration" 
                type="number"
                min="1"
                placeholder="Project duration in months"
                class="mt-1"
              />
            </div>
            
            <div>
              <label class="admin-label">Budget Range</label>
              <USelect 
                v-model="initiative.budgetRange" 
                :options="budgetOptions"
                placeholder="Select budget range"
                class="mt-1"
              />
            </div>
            
            <div>
              <label class="admin-label">Team Size</label>
              <UInput 
                v-model="initiative.teamSize" 
                type="number"
                min="1"
                placeholder="Number of team members"
                class="mt-1"
              />
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
                v-model="initiative.featured" 
                id="featured"
              />
              <label for="featured" class="ml-2 text-sm text-gray-700">
                Featured Initiative
              </label>
            </div>
            
            <div class="flex items-center">
              <UCheckbox 
                v-model="initiative.allowComments" 
                id="comments"
              />
              <label for="comments" class="ml-2 text-sm text-gray-700">
                Allow Comments
              </label>
            </div>
            
            <div class="flex items-center">
              <UCheckbox 
                v-model="initiative.socialShare" 
                id="social"
              />
              <label for="social" class="ml-2 text-sm text-gray-700">
                Enable Social Sharing
              </label>
            </div>
            
            <div class="flex items-center">
              <UCheckbox 
                v-model="initiative.showProgress" 
                id="progress"
              />
              <label for="progress" class="ml-2 text-sm text-gray-700">
                Show Progress Updates
              </label>
            </div>
          </div>
        </UCard>

        <UCard>
          <template #header>
            <h3 class="text-lg font-medium text-gray-900">Partnerships</h3>
          </template>
          
          <div class="space-y-4">
            <div>
              <label class="admin-label">Partners</label>
              <UInput 
                v-model="initiative.partners" 
                placeholder="Comma-separated partner names"
                class="mt-1"
              />
            </div>
            
            <div>
              <label class="admin-label">Sponsors</label>
              <UInput 
                v-model="initiative.sponsors" 
                placeholder="Comma-separated sponsor names"
                class="mt-1"
              />
            </div>
            
            <div>
              <label class="admin-label">Collaborators</label>
              <UInput 
                v-model="initiative.collaborators" 
                placeholder="Comma-separated collaborator names"
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

// Initiative data
const initiative = ref({
  title: '',
  tagline: '',
  description: '',
  objectives: '',
  expectedOutcomes: '',
  implementationPlan: '',
  metaTitle: '',
  metaDescription: '',
  keywords: '',
  status: 'draft',
  category: '',
  tags: '',
  startDate: '',
  endDate: '',
  duration: '',
  budgetRange: '',
  teamSize: '',
  featured: false,
  allowComments: true,
  socialShare: true,
  showProgress: false,
  partners: '',
  sponsors: '',
  collaborators: ''
})

// Form options
const statusOptions = ref([
  { label: 'Draft', value: 'draft' },
  { label: 'Planning', value: 'planning' },
  { label: 'Active', value: 'active' },
  { label: 'Completed', value: 'completed' },
  { label: 'On Hold', value: 'on-hold' }
])

const categoryOptions = ref([
  { label: 'Education', value: 'education' },
  { label: 'Technology', value: 'technology' },
  { label: 'Healthcare', value: 'healthcare' },
  { label: 'Environment', value: 'environment' },
  { label: 'Economic Development', value: 'economic-development' },
  { label: 'Social Welfare', value: 'social-welfare' },
  { label: 'Arts & Culture', value: 'arts-culture' },
  { label: 'Research', value: 'research' }
])

const budgetOptions = ref([
  { label: 'Under $10K', value: 'under-10k' },
  { label: '$10K - $50K', value: '10k-50k' },
  { label: '$50K - $100K', value: '50k-100k' },
  { label: '$100K - $500K', value: '100k-500k' },
  { label: '$500K - $1M', value: '500k-1m' },
  { label: 'Over $1M', value: 'over-1m' }
])

// State
const isSaving = ref(false)

// Methods
const saveInitiative = async () => {
  try {
    isSaving.value = true
    
    // Validate required fields
    if (!initiative.value.title || !initiative.value.description) {
      console.error('Title and description are required')
      return
    }
    
    // Prepare initiative data
    const initiativeData = {
      ...initiative.value,
      tags: initiative.value.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      objectives: initiative.value.objectives.split('\n').filter(obj => obj.trim()),
      expectedOutcomes: initiative.value.expectedOutcomes.split('\n').filter(outcome => outcome.trim()),
      partners: initiative.value.partners.split(',').map(partner => partner.trim()).filter(partner => partner),
      sponsors: initiative.value.sponsors.split(',').map(sponsor => sponsor.trim()).filter(sponsor => sponsor),
      collaborators: initiative.value.collaborators.split(',').map(collaborator => collaborator.trim()).filter(collaborator => collaborator),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    
    // In a real app, this would make an API call
    console.log('Saving initiative:', initiativeData)
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Redirect to content list
    await navigateTo('/admin/content')
    
  } catch (error) {
    console.error('Error saving initiative:', error)
  } finally {
    isSaving.value = false
  }
}
</script>
