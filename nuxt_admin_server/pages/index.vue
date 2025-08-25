<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">Seun Fakuade Foundation</h1>
      <p class="text-xl text-gray-600 mb-8">Admin Dashboard</p>
      <UButton 
        size="lg" 
        @click="navigateTo('/admin/login')"
        class="bg-blue-600 hover:bg-blue-700"
      >
        Access Admin Dashboard
      </UButton>
    </div>
  </div>
</template>

<script setup>
// Redirect to admin login on page load
onMounted(() => {
  navigateTo('/admin/login')
})
</script>
