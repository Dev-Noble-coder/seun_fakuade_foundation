import { ThoughtLeadership } from '../../models/ThoughtLeadership'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    
    // Validate required fields
    if (!body.title || !body.content || !body.excerpt) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Title, content, and excerpt are required'
      })
    }

    // Create new thought leadership content
    const thoughtLeadership = new ThoughtLeadership({
      title: body.title,
      content: body.content,
      excerpt: body.excerpt,
      author: body.authorId || '64f8b1c2e4b0a1b2c3d4e5f6', // Default author ID
      category: body.category || 'policy',
      status: body.status || 'draft',
      featuredImage: body.featuredImage || '',
      tags: body.tags ? (Array.isArray(body.tags) ? body.tags : body.tags.split(',').map(tag => tag.trim()).filter(tag => tag)) : [],
      metaTitle: body.metaTitle || body.title,
      metaDescription: body.metaDescription || body.excerpt,
      isFeatured: body.isFeatured || false
    })

    const savedThoughtLeadership = await thoughtLeadership.save()

    return {
      success: true,
      message: 'Thought leadership content created successfully',
      data: savedThoughtLeadership
    }
  } catch (error: any) {
    console.error('Thought leadership creation error:', error)
    
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
      statusMessage: 'Failed to create thought leadership content'
    })
  }
})
