import { Initiative } from '../../../models/Initiative'

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    const body = await readBody(event)
    
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

    // Update initiative
    const updatedInitiative = await Initiative.findByIdAndUpdate(
      id,
      {
        ...body,
        updatedAt: new Date()
      },
      { new: true, runValidators: true }
    )

    return {
      success: true,
      message: 'Initiative updated successfully',
      data: updatedInitiative
    }

  } catch (error: any) {
    console.error('Initiative update error:', error)
    
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
      statusMessage: 'Failed to update initiative'
    })
  }
})
