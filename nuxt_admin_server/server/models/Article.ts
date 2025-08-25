import mongoose, { Schema, Document } from 'mongoose'

export interface IArticle extends Document {
  title: string
  slug: string
  content: string
  excerpt: string
  author: mongoose.Types.ObjectId
  status: 'draft' | 'published' | 'archived'
  category: string
  tags: string[]
  featuredImage?: string
  metaTitle?: string
  metaDescription?: string
  publishedAt?: Date
  viewCount: number
  createdAt: Date
  updatedAt: Date
}

const articleSchema = new Schema<IArticle>({
  title: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  },
  excerpt: {
    type: String,
    required: true,
    maxlength: 200
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  status: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'draft'
  },
  category: {
    type: String,
    required: true,
    trim: true
  },
  tags: [{
    type: String,
    trim: true
  }],
  featuredImage: {
    type: String
  },
  metaTitle: {
    type: String,
    trim: true
  },
  metaDescription: {
    type: String,
    maxlength: 160
  },
  publishedAt: {
    type: Date
  },
  viewCount: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
})

// Create slug from title before saving
articleSchema.pre('save', function(next) {
  if (!this.isModified('title')) return next()
  
  this.slug = this.title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim('-')
  
  next()
})

// Index for search
articleSchema.index({ title: 'text', content: 'text', tags: 'text' })

export const Article = mongoose.model<IArticle>('Article', articleSchema)
