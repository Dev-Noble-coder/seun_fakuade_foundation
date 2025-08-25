import { Article } from '../../models/Article'
import { Initiative } from '../../models/Initiative'
import { ThoughtLeadership } from '../../models/ThoughtLeadership'

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    const { type, status, limit = '10', page = '1' } = query

    const limitNum = parseInt(limit as string)
    const pageNum = parseInt(page as string)
    const skip = (pageNum - 1) * limitNum

    let result: any = {}

    // Fetch articles
    if (!type || type === 'articles') {
      const articlesQuery = status ? { status } : {}
      const articles = await Article.find(articlesQuery)
        .populate('author', 'firstName lastName username')
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limitNum)
        .lean()

      const totalArticles = await Article.countDocuments(articlesQuery)
      
      result.articles = {
        data: articles,
        pagination: {
          page: pageNum,
          limit: limitNum,
          total: totalArticles,
          pages: Math.ceil(totalArticles / limitNum)
        }
      }
    }

    // Fetch initiatives
    if (!type || type === 'initiatives') {
      const initiativesQuery = status ? { status } : {}
      const initiatives = await Initiative.find(initiativesQuery)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limitNum)
        .lean()

      const totalInitiatives = await Initiative.countDocuments(initiativesQuery)
      
      result.initiatives = {
        data: initiatives,
        pagination: {
          page: pageNum,
          limit: limitNum,
          total: totalInitiatives,
          pages: Math.ceil(totalInitiatives / limitNum)
        }
      }
    }

    // Fetch thought leadership
    if (!type || type === 'thought-leadership') {
      const thoughtLeadershipQuery = status ? { status } : {}
      const thoughtLeadership = await ThoughtLeadership.find(thoughtLeadershipQuery)
        .populate('author', 'firstName lastName username')
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limitNum)
        .lean()

      const totalThoughtLeadership = await ThoughtLeadership.countDocuments(thoughtLeadershipQuery)
      
      result.thoughtLeadership = {
        data: thoughtLeadership,
        pagination: {
          page: pageNum,
          limit: limitNum,
          total: totalThoughtLeadership,
          pages: Math.ceil(totalThoughtLeadership / limitNum)
        }
      }
    }

    // If no specific type requested, return all with summary
    if (!type) {
      const summary = {
        articles: await Article.countDocuments({ status: 'published' }),
        initiatives: await Initiative.countDocuments({ status: 'active' }),
        thoughtLeadership: await ThoughtLeadership.countDocuments({ status: 'published' })
      }
      result.summary = summary
    }

    return {
      success: true,
      data: result
    }

  } catch (error: any) {
    console.error('Content fetch error:', error)
    
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch content'
    })
  }
})
