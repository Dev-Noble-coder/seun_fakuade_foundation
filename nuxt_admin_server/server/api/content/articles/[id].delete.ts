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

    // Check if article exists
    const existingArticle = await Article.findById(id)
    if (!existingArticle) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Article not found'
      })
    }

    // Delete article
    await Article.findByIdAndDelete(id)

    return {
      success: true,
      message: 'Article deleted successfully'
    }

  } catch (error: any) {
    console.error('Article deletion error:', error)
    
    if (error.statusCode) {
      throw error
    }

    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to delete article'
    })
  }
})
