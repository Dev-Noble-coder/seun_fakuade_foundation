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

    const thoughtLeadership = await ThoughtLeadership.findById(id)
      .populate('author', 'firstName lastName username')
      .lean()

    if (!thoughtLeadership) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Thought leadership content not found'
      })
    }

    // Increment view count
    await ThoughtLeadership.findByIdAndUpdate(id, { $inc: { viewCount: 1 } })

    return {
      success: true,
      data: thoughtLeadership
    }

  } catch (error: any) {
    console.error('Thought leadership fetch error:', error)
    
    if (error.statusCode) {
      throw error
    }

    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch thought leadership content'
    })
  }
})
