import { Initiative } from '../../../models/Initiative'

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    const { 
      status, 
      category, 
      location, 
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
    if (location) queryFilter.location = location
    if (featured !== undefined) queryFilter.isFeatured = featured === 'true'
    
    // Text search
    if (search) {
      queryFilter.$text = { $search: search as string }
    }

    // Build sort object
    const sortObj: any = {}
    sortObj[sortBy as string] = sortOrder === 'desc' ? -1 : 1

    // Fetch initiatives
    const initiatives = await Initiative.find(queryFilter)
      .sort(sortObj)
      .skip(skip)
      .limit(limitNum)
      .lean()

    const totalInitiatives = await Initiative.countDocuments(queryFilter)

    return {
      success: true,
      data: {
        initiatives,
        pagination: {
          page: pageNum,
          limit: limitNum,
          total: totalInitiatives,
          pages: Math.ceil(totalInitiatives / limitNum)
        }
      }
    }

  } catch (error: any) {
    console.error('Initiatives fetch error:', error)
    
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch initiatives'
    })
  }
})
