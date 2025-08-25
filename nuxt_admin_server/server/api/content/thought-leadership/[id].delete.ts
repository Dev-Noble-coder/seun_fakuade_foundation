import { ThoughtLeadership } from '../../../models/ThoughtLeadership'

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    
    if (!id) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Thought leadership ID is required'
      })
    }

    // Check if thought leadership content exists
    const existingThoughtLeadership = await ThoughtLeadership.findById(id)
    if (!existingThoughtLeadership) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Thought leadership content not found'
      })
    }

    // Delete thought leadership content
    await ThoughtLeadership.findByIdAndDelete(id)

    return {
      success: true,
      message: 'Thought leadership content deleted successfully'
    }

  } catch (error: any) {
    console.error('Thought leadership deletion error:', error)
    
    if (error.statusCode) {
      throw error
    }

    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to delete thought leadership content'
    })
  }
})
