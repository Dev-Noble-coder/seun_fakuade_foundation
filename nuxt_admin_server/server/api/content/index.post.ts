import { Article } from '../../models/Article'
import { Initiative } from '../../models/Initiative'
import { ThoughtLeadership } from '../../models/ThoughtLeadership'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { type, ...contentData } = body

    if (!type) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Content type is required'
      })
    }

    let result: any

    switch (type) {
      case 'article':
        const article = new Article({
          ...contentData,
          author: contentData.authorId || '64f8b1c2e4b0a1b2c3d4e5f6', // Default author ID
          status: contentData.status || 'draft'
        })
        result = await article.save()
        break

      case 'initiative':
        const initiative = new Initiative({
          ...contentData,
          status: contentData.status || 'planned'
        })
        result = await initiative.save()
        break

      case 'thought-leadership':
        const thoughtLeadership = new ThoughtLeadership({
          ...contentData,
          author: contentData.authorId || '64f8b1c2e4b0a1b2c3d4e5f6', // Default author ID
          status: contentData.status || 'draft'
        })
        result = await thoughtLeadership.save()
        break

      default:
        throw createError({
          statusCode: 400,
          statusMessage: 'Invalid content type'
        })
    }

    return {
      success: true,
      message: `${type} created successfully`,
      data: result
    }

  } catch (error: any) {
    console.error('Content creation error:', error)
    
    if (error.statusCode) {
      throw error
    }

    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to create content'
    })
  }
})
