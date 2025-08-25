import { Article } from '../../../models/Article'

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    const body = await readBody(event)
    
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

    // Update article
    const updatedArticle = await Article.findByIdAndUpdate(
      id,
      {
        ...body,
        updatedAt: new Date()
      },
      { new: true, runValidators: true }
    ).populate('author', 'firstName lastName username')

    return {
      success: true,
      message: 'Article updated successfully',
      data: updatedArticle
    }

  } catch (error: any) {
    console.error('Article update error:', error)
    
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
      statusMessage: 'Failed to update article'
    })
  }
})
