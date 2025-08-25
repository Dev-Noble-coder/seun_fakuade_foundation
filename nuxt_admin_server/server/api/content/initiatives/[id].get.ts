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

    const initiative = await Initiative.findById(id).lean()

    if (!initiative) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Initiative not found'
      })
    }

    return {
      success: true,
      data: initiative
    }

  } catch (error: any) {
    console.error('Initiative fetch error:', error)
    
    if (error.statusCode) {
      throw error
    }

    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch initiative'
    })
  }
})
