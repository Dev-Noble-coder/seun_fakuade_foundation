import { User } from '../../models/User'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    
    // Validate required fields
    if (!body.username || !body.email || !body.password || !body.firstName || !body.lastName) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Username, email, password, firstName, and lastName are required'
      })
    }

    // Check if user already exists
    const existingUser = await User.findOne({
      $or: [{ username: body.username }, { email: body.email }]
    })

    if (existingUser) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Username or email already exists'
      })
    }

    // Create new user
    const user = new User({
      username: body.username,
      email: body.email,
      password: body.password,
      role: body.role || 'viewer',
      firstName: body.firstName,
      lastName: body.lastName,
      isActive: body.isActive !== undefined ? body.isActive : true
    })

    const savedUser = await user.save()

    // Remove password from response
    const userResponse = {
      _id: savedUser._id,
      username: savedUser.username,
      email: savedUser.email,
      role: savedUser.role,
      firstName: savedUser.firstName,
      lastName: savedUser.lastName,
      isActive: savedUser.isActive,
      createdAt: savedUser.createdAt,
      updatedAt: savedUser.updatedAt
    }

    return {
      success: true,
      message: 'User created successfully',
      data: userResponse
    }

  } catch (error: any) {
    console.error('User creation error:', error)
    
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

    // Handle duplicate key errors
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0]
      throw createError({
        statusCode: 400,
        statusMessage: `${field} already exists`
      })
    }

    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to create user'
    })
  }
})
