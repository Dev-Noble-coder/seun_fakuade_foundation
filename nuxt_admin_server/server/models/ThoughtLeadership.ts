import mongoose, { Schema, Document } from 'mongoose'

export interface IThoughtLeadership extends Document {
  title: string
  slug: string
  content: string
  excerpt: string
  author: mongoose.Types.ObjectId
  category: 'policy' | 'research' | 'opinion' | 'analysis'
  status: 'draft' | 'published' | 'archived'
  featuredImage?: string
  tags: string[]
  metaTitle?: string
  metaDescription?: string
  publishedAt?: Date
  viewCount: number
  isFeatured: boolean
  createdAt: Date
  updatedAt: Date
}

const thoughtLeadershipSchema = new Schema<IThoughtLeadership>({
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
  category: {
    type: String,
    enum: ['policy', 'research', 'opinion', 'analysis'],
    required: true
  },
  status: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'draft'
  },
  featuredImage: {
    type: String
  },
  tags: [{
    type: String,
    trim: true
  }],
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
  },
  isFeatured: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
})

// Create slug from title before saving
thoughtLeadershipSchema.pre('save', function(next) {
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
thoughtLeadershipSchema.index({ title: 'text', content: 'text', excerpt: 'text', tags: 'text' })

export const ThoughtLeadership = mongoose.model<IThoughtLeadership>('ThoughtLeadership', thoughtLeadershipSchema)
