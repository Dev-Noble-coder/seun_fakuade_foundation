import { Initiative } from '../../models/Initiative'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    
    // Validate required fields
    if (!body.title || !body.description || !body.content) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Title, description, and content are required'
      })
    }

    // Create new initiative
    const initiative = new Initiative({
      title: body.title,
      description: body.description,
      content: body.content,
      status: body.status || 'planned',
      category: body.category || 'General',
      startDate: body.startDate ? new Date(body.startDate) : new Date(),
      endDate: body.endDate ? new Date(body.endDate) : undefined,
      location: body.location || 'TBD',
      impact: {
        beneficiaries: body.beneficiaries || 0,
        description: body.impactDescription || 'To be determined'
      },
      featuredImage: body.featuredImage || '',
      tags: body.tags ? (Array.isArray(body.tags) ? body.tags : body.tags.split(',').map(tag => tag.trim()).filter(tag => tag)) : [],
      isFeatured: body.isFeatured || false
    })

    const savedInitiative = await initiative.save()

    return {
      success: true,
      message: 'Initiative created successfully',
      data: savedInitiative
    }
  } catch (error: any) {
    console.error('Initiative creation error:', error)
    
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
      statusMessage: 'Failed to create initiative'
    })
  }
})
