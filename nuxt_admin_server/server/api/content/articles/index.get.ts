import { Article } from '../../../models/Article'

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
      sortOrder = 'desc'
    } = query

    const limitNum = parseInt(limit as string)
    const pageNum = parseInt(page as string)
    const skip = (pageNum - 1) * limitNum

    // Build query
    const queryFilter: any = {}
    
    if (status) queryFilter.status = status
    if (category) queryFilter.category = category
    if (author) queryFilter.author = author
    
    // Text search
    if (search) {
      queryFilter.$text = { $search: search as string }
    }

    // Build sort object
    const sortObj: any = {}
    sortObj[sortBy as string] = sortOrder === 'desc' ? -1 : 1

    // Fetch articles
    const articles = await Article.find(queryFilter)
      .populate('author', 'firstName lastName username')
      .sort(sortObj)
      .skip(skip)
      .limit(limitNum)
      .lean()

    const totalArticles = await Article.countDocuments(queryFilter)

    return {
      success: true,
      data: {
        articles,
        pagination: {
          page: pageNum,
          limit: limitNum,
          total: totalArticles,
          pages: Math.ceil(totalArticles / limitNum)
        }
      }
    }

  } catch (error: any) {
    console.error('Articles fetch error:', error)
    
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch articles'
    })
  }
})
