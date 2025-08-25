import { Initiative } from '../../../models/Initiative'

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    
    if (!id) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Initiative ID is required'
      })
    }

    // Check if initiative exists
    const existingInitiative = await Initiative.findById(id)
    if (!existingInitiative) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Initiative not found'
      })
    }

    // Delete initiative
    await Initiative.findByIdAndDelete(id)

    return {
      success: true,
      message: 'Initiative deleted successfully'
    }

  } catch (error: any) {
    console.error('Initiative deletion error:', error)
    
    if (error.statusCode) {
      throw error
    }

    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to delete initiative'
    })
  }
})
