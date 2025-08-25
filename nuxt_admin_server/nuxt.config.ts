// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  // Core modules for admin functionality
  modules: [
    '@nuxt/content', 
    '@nuxt/image', 
    '@nuxt/ui'
  ],

  // Runtime config for environment variables
  runtimeConfig: {
    // Private keys (only available on server-side)
    mongodbUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/seun_fakuade_foundation',
    jwtSecret: process.env.JWT_SECRET || 'your-secret-key-change-in-production',
    
    // Public keys (exposed to client-side)
    public: {
      apiBase: process.env.API_BASE || '/api'
    }
  },

  // CSS and styling - temporarily commented out to isolate the issue
  // css: ['assets/css/main.css'],

  // Build configuration
  build: {
    transpile: ['@nuxt/ui']
  }
})