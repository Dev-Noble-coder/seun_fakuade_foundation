import { Article } from '../../../models/Article'

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    
    if (!id) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Article ID is required'
      })
    }

    const article = await Article.findById(id)
      .populate('author', 'firstName lastName username')
      .lean()

    if (!article) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Article not found'
      })
    }

    // Increment view count
    await Article.findByIdAndUpdate(id, { $inc: { viewCount: 1 } })

    return {
      success: true,
      data: article
    }

  } catch (error: any) {
    console.error('Article fetch error:', error)
    
    if (error.statusCode) {
      throw error
    }

    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch article'
    })
  }
})
