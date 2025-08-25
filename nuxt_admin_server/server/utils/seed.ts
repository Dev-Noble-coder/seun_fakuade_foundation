import { connectDB, disconnectDB } from './database'
import { User } from '../models/User'
import { Article } from '../models/Article'
import { Initiative } from '../models/Initiative'
import { ThoughtLeadership } from '../models/ThoughtLeadership'


async function seedDatabase() {
  try {
    await connectDB()
    console.log('Connected to MongoDB')

    // Clear existing data
    await User.deleteMany({})
    await Article.deleteMany({})
    await Initiative.deleteMany({})
    await ThoughtLeadership.deleteMany({})
    console.log('Cleared existing data')

    // Create admin user
    const adminUser = new User({
      username: 'admin',
      email: 'admin@sfoundation.org',
      password: 'admin123',
      role: 'admin',
      firstName: 'Admin',
      lastName: 'User',
      isActive: true
    })

    await adminUser.save()
    console.log('Created admin user')

    // Create sample articles
    const articles = [
      {
        title: 'Digital Transformation in Africa',
        content: 'Exploring the digital transformation journey across African nations and the opportunities it presents for sustainable development.',
        excerpt: 'Exploring the digital transformation journey across African nations...',
        author: adminUser._id,
        status: 'published',
        category: 'Technology',
        tags: ['Digital Transformation', 'Africa', 'Technology'],
        publishedAt: new Date()
      },
      {
        title: 'Policy Innovation Framework',
        content: 'A comprehensive framework for policy innovation in the digital age, focusing on sustainable development and inclusive growth.',
        excerpt: 'A comprehensive framework for policy innovation in the digital age...',
        author: adminUser._id,
        status: 'draft',
        category: 'Policy',
        tags: ['Policy', 'Innovation', 'Framework']
      }
    ]

    for (const articleData of articles) {
      const article = new Article(articleData)
      await article.save()
    }
    console.log('Created sample articles')

    // Create sample initiatives
    const initiatives = [
      {
        title: 'Digital Ekiti Initiative',
        description: 'Transforming Ekiti State through digital innovation and technology adoption.',
        content: 'A comprehensive initiative to digitize Ekiti State, focusing on education, healthcare, and governance.',
        status: 'active',
        category: 'Digital Innovation',
        startDate: new Date('2024-01-01'),
        location: 'Ekiti State, Nigeria',
        impact: {
          beneficiaries: 50000,
          description: 'Digital transformation of government services and citizen engagement'
        },
        featuredImage: '/images/initiatives/digital-ekiti.jpg',
        tags: ['Digital', 'Ekiti', 'Innovation'],
        isFeatured: true
      },
      {
        title: 'Youth Empowerment Program',
        description: 'Empowering youth through technology and education initiatives.',
        content: 'A program designed to equip young people with digital skills and entrepreneurial knowledge.',
        status: 'planned',
        category: 'Youth Development',
        startDate: new Date('2024-06-01'),
        location: 'Lagos, Nigeria',
        impact: {
          beneficiaries: 10000,
          description: 'Digital skills training and mentorship for young entrepreneurs'
        },
        featuredImage: '/images/initiatives/youth-empowerment.jpg',
        tags: ['Youth', 'Empowerment', 'Education']
      }
    ]

    for (const initiativeData of initiatives) {
      const initiative = new Initiative(initiativeData)
      await initiative.save()
    }
    console.log('Created sample initiatives')

    // Create sample thought leadership
    const thoughtLeadership = [
      {
        title: 'Future of African Technology',
        content: 'Visionary insights into the future of technology in Africa and its potential to drive sustainable development.',
        excerpt: 'Visionary insights into the future of technology in Africa...',
        author: adminUser._id,
        category: 'technology',
        status: 'published',
        tags: ['Technology', 'Africa', 'Future'],
        publishedAt: new Date(),
        isFeatured: true
      },
      {
        title: 'Policy Innovation in Digital Age',
        content: 'Innovative approaches to policy making in the digital era, focusing on agility and citizen-centric solutions.',
        excerpt: 'Innovative approaches to policy making in the digital era...',
        author: adminUser._id,
        category: 'policy',
        status: 'draft',
        tags: ['Policy', 'Innovation', 'Digital']
      }
    ]

    for (const tlData of thoughtLeadership) {
      const tl = new ThoughtLeadership(tlData)
      await tl.save()
    }
    console.log('Created sample thought leadership content')

    console.log('Database seeding completed successfully!')
    
  } catch (error) {
    console.error('Seeding error:', error)
  } finally {
    await disconnectDB()
    console.log('Disconnected from MongoDB')
    process.exit(0)
  }
}


  seedDatabase()
