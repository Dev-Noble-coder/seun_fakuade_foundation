<template>
  <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <div class="flex justify-center">
        <img src="" alt="SF Foundation" class="w-16 h-16" />
      </div>
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Admin Dashboard
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        Sign in to access the Seun Fakuade Foundation admin panel
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6" @submit.prevent="handleLogin">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <div class="mt-1">
              <UInput
                id="email"
                v-model="form.email"
                name="email"
                type="email"
                autocomplete="email"
                required
                placeholder="admin@sfoundation.org"
                class="w-full"
              />
            </div>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div class="mt-1">
              <UInput
                id="password"
                v-model="form.password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                placeholder="Enter your password"
                class="w-full"
              />
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <UCheckbox
                id="remember-me"
                v-model="form.rememberMe"
                name="remember-me"
                class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div class="text-sm">
              <a href="#" class="font-medium text-blue-600 hover:text-blue-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <UButton
              type="submit"
              :loading="isLoading"
              :disabled="isLoading"
              class="w-full flex justify-center"
              size="lg"
            >
              <UIcon v-if="!isLoading" name="i-heroicons-arrow-right-on-rectangle" class="w-5 h-5 mr-2" />
              {{ isLoading ? 'Signing in...' : 'Sign in' }}
            </UButton>
          </div>
        </form>

        <div v-if="error" class="mt-4">
          <UAlert
            :title="error"
            color="red"
            variant="soft"
            icon="i-heroicons-exclamation-triangle"
          />
        </div>

        <div class="mt-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300" />
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-white text-gray-500">Demo Credentials</span>
            </div>
          </div>

          <div class="mt-4 bg-gray-50 p-4 rounded-md">
            <p class="text-sm text-gray-600 mb-2">For demonstration purposes:</p>
            <div class="space-y-1 text-sm">
              <p><strong>Email:</strong> admin@sfoundation.org</p>
              <p><strong>Password:</strong> admin123</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false,
  middleware: 'guest'
})

// Form data
const form = ref({
  email: 'admin@sfoundation.org',
  password: 'admin123',
  rememberMe: false
})

// State
const isLoading = ref(false)
const error = ref('')

// Methods
const handleLogin = async () => {
  try {
    isLoading.value = true
    error.value = ''

    // Validate form
    if (!form.value.email || !form.value.password) {
      error.value = 'Please fill in all fields'
      return
    }

    // In a real app, this would make an API call to authenticate
    // For now, we'll simulate authentication with demo credentials
    if (form.value.email === 'admin@sfoundation.org' && form.value.password === 'admin123') {
      // Set authentication token/cookie
      const token = 'demo-auth-token-' + Date.now()
      const authCookie = useCookie('auth-token', {
        default: () => token,
        maxAge: form.value.rememberMe ? 60 * 60 * 24 * 30 : 60 * 60 * 24 // 30 days or 1 day
      })
      authCookie.value = token

      // Redirect to admin dashboard
      await navigateTo('/admin')
    } else {
      error.value = 'Invalid email or password'
    }
  } catch (err) {
    console.error('Login error:', err)
    error.value = 'An error occurred during login. Please try again.'
  } finally {
    isLoading.value = false
  }
}

// Auto-fill demo credentials on mount
onMounted(() => {
  form.value.email = 'admin@sfoundation.org'
  form.value.password = 'admin123'
})
</script>
