import mongoose from 'mongoose'
// const mongoose  = require('mongoose')
import dotenv from 'dotenv'
dotenv.config()
// MongoDB connection configuration
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/seun_fakuade_foundation'

// Connect to MongoDB
export async function connectDB() {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log('MongoDB already connected')
      return
    }

    await mongoose.connect(MONGODB_URI)
    console.log('MongoDB connected successfully')
  } catch (error) {
    console.error('MongoDB connection error:', error)
    process.exit(1)
  }
}

// Disconnect from MongoDB
export async function disconnectDB() {
  try {
    await mongoose.disconnect()
    console.log('MongoDB disconnected successfully')
  } catch (error) {
    console.error('MongoDB disconnection error:', error)
  }
}

// Handle graceful shutdown
process.on('SIGINT', async () => {
  await disconnectDB()
  process.exit(0)
})

process.on('SIGTERM', async () => {
  await disconnectDB()
  process.exit(0)
})
