export default defineNuxtRouteMiddleware((to, from) => {
  // Check if user is already authenticated
  const authToken = useCookie('auth-token')
  
  if (authToken.value) {
    // User is already logged in, redirect to admin dashboard
    return navigateTo('/admin')
  }
})
