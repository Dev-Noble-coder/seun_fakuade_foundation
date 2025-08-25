import { connectDB } from '../utils/database'

export default defineNitroPlugin(async () => {
  // Connect to MongoDB when server starts
  await connectDB()
})
