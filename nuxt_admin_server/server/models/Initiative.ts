import mongoose, { Schema, Document } from 'mongoose'

export interface IInitiative extends Document {
  title: string
  slug: string
  description: string
  content: string
  status: 'active' | 'completed' | 'planned' | 'paused'
  category: string
  startDate: Date
  endDate?: Date
  location: string
  impact: {
    beneficiaries: number
    description: string
  }
  images: string[]
  featuredImage: string
  tags: string[]
  isFeatured: boolean
  createdAt: Date
  updatedAt: Date
}

const initiativeSchema = new Schema<IInitiative>({
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
  description: {
    type: String,
    required: true,
    maxlength: 300
  },
  content: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['active', 'completed', 'planned', 'paused'],
    default: 'planned'
  },
  category: {
    type: String,
    required: true,
    trim: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  impact: {
    beneficiaries: {
      type: Number,
      default: 0
    },
    description: {
      type: String,
      required: true
    }
  },
  images: [{
    type: String
  }],
  featuredImage: {
    type: String,
    required: true
  },
  tags: [{
    type: String,
    trim: true
  }],
  isFeatured: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
})

// Create slug from title before saving
initiativeSchema.pre('save', function(next) {
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
initiativeSchema.index({ title: 'text', description: 'text', content: 'text', tags: 'text' })

export const Initiative = mongoose.model<IInitiative>('Initiative', initiativeSchema)
