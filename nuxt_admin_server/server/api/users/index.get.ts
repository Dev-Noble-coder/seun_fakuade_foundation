import { User } from '../../models/User'

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    const { 
      role, 
      status, 
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
    
    if (role) queryFilter.role = role
    if (status !== undefined) queryFilter.isActive = status === 'true'
    
    // Text search
    if (search) {
      queryFilter.$or = [
        { username: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { firstName: { $regex: search, $options: 'i' } },
        { lastName: { $regex: search, $options: 'i' } }
      ]
    }

    // Build sort object
    const sortObj: any = {}
    sortObj[sortBy as string] = sortOrder === 'desc' ? -1 : 1

    // Fetch users (exclude password field)
    const users = await User.find(queryFilter)
      .select('-password')
      .sort(sortObj)
      .skip(skip)
      .limit(limitNum)
      .lean()

    const totalUsers = await User.countDocuments(queryFilter)

    return {
      success: true,
      data: {
        users,
        pagination: {
          page: pageNum,
          limit: limitNum,
          total: totalUsers,
          pages: Math.ceil(totalUsers / limitNum)
        }
      }
    }

  } catch (error: any) {
    console.error('Users fetch error:', error)
    
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch users'
    })
  }
})
