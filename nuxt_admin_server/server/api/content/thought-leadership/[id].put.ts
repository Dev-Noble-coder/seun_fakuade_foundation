import { ThoughtLeadership } from '../../../models/ThoughtLeadership'

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    const body = await readBody(event)
    
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

    // Update thought leadership content
    const updatedThoughtLeadership = await ThoughtLeadership.findByIdAndUpdate(
      id,
      {
        ...body,
        updatedAt: new Date()
      },
      { new: true, runValidators: true }
    ).populate('author', 'firstName lastName username')

    return {
      success: true,
      message: 'Thought leadership content updated successfully',
      data: updatedThoughtLeadership
    }

  } catch (error: any) {
    console.error('Thought leadership update error:', error)
    
    if (error.statusCode) {
      throw error
    }

    // Handle MongoDB validation errors
    if (error.name === 'ValidationError') {
      throw createError({
        statusCode: 400,
        statusMessage: Object.values(error.errors).map((err: any) => err.message).join(', ')
      })
    }

    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to update thought leadership content'
    })
  }
})
