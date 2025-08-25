import { User } from '../../models/User'
import jwt from 'jsonwebtoken'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { email, password } = body

    if (!email || !password) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Email and password are required'
      })
    }

    // Find user by email
    const user = await User.findOne({ email }).select('+password')
    
    if (!user) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Invalid credentials'
      })
    }

    if (!user.isActive) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Account is deactivated'
      })
    }

    // Verify password
    const isValidPassword = await user.comparePassword(password)
    
    if (!isValidPassword) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Invalid credentials'
      })
    }

    // Update last login
    user.lastLogin = new Date()
    await user.save()

    // Generate JWT token
    const config = useRuntimeConfig()
    const token = jwt.sign(
      { 
        userId: user._id, 
        email: user.email, 
        role: user.role 
      },
      config.jwtSecret,
      { expiresIn: '24h' }
    )

    // Remove password from response
    const userResponse = {
      _id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
      firstName: user.firstName,
      lastName: user.lastName,
      isActive: user.isActive,
      lastLogin: user.lastLogin
    }

    return {
      success: true,
      message: 'Login successful',
      token,
      user: userResponse
    }

  } catch (error: any) {
    console.error('Login error:', error)
    
    if (error.statusCode) {
      throw error
    }

    throw createError({
      statusCode: 500,
      statusMessage: 'Internal server error'
    })
  }
})
