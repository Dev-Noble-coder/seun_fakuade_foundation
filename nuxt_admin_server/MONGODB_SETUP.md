# MongoDB Setup Guide for Seun Fakuade Foundation Admin Server

## Prerequisites

1. **MongoDB Installation**
   - Install MongoDB Community Edition from [mongodb.com](https://www.mongodb.com/try/download/community)
   - Or use MongoDB Atlas (cloud service) for production

2. **Node.js and npm**
   - Ensure you have Node.js 18+ installed

## Setup Instructions

### 1. Environment Configuration

Copy the environment template and configure your MongoDB connection:

```bash
cp env.example .env
```

Edit `.env` file with your MongoDB connection string:

```env
# For local MongoDB
MONGODB_URI=mongodb://localhost:27017/seun_fakuade_foundation

# For MongoDB Atlas (cloud)
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/seun_fakuade_foundation

# JWT Secret (change this in production!)
JWT_SECRET=your-super-secret-jwt-key-change-in-production

# API Configuration
API_BASE=/api
NODE_ENV=development
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start MongoDB

**Local MongoDB:**
```bash
# On Windows
net start MongoDB

# On macOS/Linux
sudo systemctl start mongod
```

**MongoDB Atlas:**
- No local setup needed, just use your connection string

### 4. Seed the Database

Populate the database with initial data:

```bash
npm run seed
```

This will create:
- Admin user: `admin@sfoundation.org` / `admin123`
- Sample articles, initiatives, and thought leadership content

### 5. Start the Development Server

```bash
npm run dev
```

## Database Models

### User
- Admin, editor, and viewer roles
- Password hashing with bcrypt
- JWT authentication

### Article
- Blog posts and content articles
- Draft, published, archived statuses
- Author relationships and tags

### Initiative
- Foundation programs and projects
- Active, completed, planned, paused statuses
- Impact metrics and location tracking

### Thought Leadership
- Policy papers, research, and analysis
- Category-based organization
- Featured content support

## API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Content Management
- `GET /api/content` - Fetch all content with pagination
- `POST /api/content` - Create new content
- `GET /api/content?type=articles` - Fetch articles only
- `GET /api/content?type=initiatives` - Fetch initiatives only
- `GET /api/content?type=thought-leadership` - Fetch thought leadership only

## Features

✅ **MongoDB Integration** - Full database support with Mongoose ODM
✅ **User Authentication** - JWT-based auth with role management
✅ **Content Management** - CRUD operations for all content types
✅ **Data Validation** - Mongoose schema validation
✅ **Search Indexing** - Text search across content
✅ **Pagination** - Efficient content loading
✅ **Sample Data** - Seeded database for immediate testing

## Next Steps (Optional Enhancements)

- [ ] **File Storage** - Cloud storage for media files (AWS S3, Cloudinary)
- [ ] **Email Notifications** - Email alerts for content updates
- [ ] **Analytics Dashboard** - Content performance metrics
- [ ] **Advanced Search** - Full-text search with filters
- [ ] **Content Versioning** - Track content changes and revisions
- [ ] **Workflow Management** - Content approval workflows
- [ ] **API Rate Limiting** - Protect against abuse
- [ ] **Caching** - Redis integration for performance

## Troubleshooting

### Connection Issues
- Verify MongoDB is running
- Check connection string format
- Ensure network access (for Atlas)

### Authentication Issues
- Verify JWT_SECRET is set
- Check user credentials in database
- Ensure bcrypt is working properly

### Content Creation Issues
- Verify required fields are provided
- Check MongoDB connection status
- Review server logs for errors

## Production Considerations

1. **Security**
   - Change default JWT secret
   - Use strong passwords
   - Enable MongoDB authentication
   - Use HTTPS in production

2. **Performance**
   - Add database indexes
   - Implement caching
   - Use connection pooling

3. **Monitoring**
   - Database performance metrics
   - Error logging and alerting
   - Backup strategies
