export default defineEventHandler(async (event) => {
  try {
    // Clear the authentication cookie
    deleteCookie(event, 'auth-token')
    
    return {
      success: true,
      message: 'Logout successful'
    }
  } catch (error) {
    console.error('Logout error:', error)
    
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal server error during logout'
    })
  }
})
