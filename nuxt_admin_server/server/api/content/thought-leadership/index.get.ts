import { ThoughtLeadership } from '../../../models/ThoughtLeadership'

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    const { 
      status, 
      category, 
      author, 
      search, 
      limit = '10', 
      page = '1',
      sortBy = 'createdAt',
      sortOrder = 'desc',
      featured
    } = query

    const limitNum = parseInt(limit as string)
    const pageNum = parseInt(page as string)
    const skip = (pageNum - 1) * limitNum

    // Build query
    const queryFilter: any = {}
    
    if (status) queryFilter.status = status
    if (category) queryFilter.category = category
    if (author) queryFilter.author = author
    if (featured !== undefined) queryFilter.isFeatured = featured === 'true'
    
    // Text search
    if (search) {
      queryFilter.$text = { $search: search as string }
    }

    // Build sort object
    const sortObj: any = {}
    sortObj[sortBy as string] = sortOrder === 'desc' ? -1 : 1

    // Fetch thought leadership content
    const thoughtLeadership = await ThoughtLeadership.find(queryFilter)
      .populate('author', 'firstName lastName username')
      .sort(sortObj)
      .skip(skip)
      .limit(limitNum)
      .lean()

    const totalThoughtLeadership = await ThoughtLeadership.countDocuments(queryFilter)

    return {
      success: true,
      data: {
        thoughtLeadership,
        pagination: {
          page: pageNum,
          limit: limitNum,
          total: totalThoughtLeadership,
          pages: Math.ceil(totalThoughtLeadership / limitNum)
        }
      }
    }

  } catch (error: any) {
    console.error('Thought leadership fetch error:', error)
    
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch thought leadership content'
    })
  }
})
