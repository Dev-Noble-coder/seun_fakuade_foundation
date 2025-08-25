# Seun Fakuade Foundation - Admin Dashboard

A modern, responsive admin dashboard built with Nuxt 3 for managing the Seun Fakuade Foundation website content.

## 🚀 Features

### Core Functionality
- **Dashboard Overview** - Statistics and quick actions
- **Content Management** - Articles, Thought Leadership, and Initiatives
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Modern UI** - Built with Nuxt UI components
- **API Endpoints** - RESTful API for content management

### Content Types Supported
- 📰 **Articles** - News and blog posts
- 🎓 **Thought Leadership** - Academic papers and insights
- 💡 **Initiatives** - Foundation programs and projects
- 🤝 **Partnerships** - Collaborative relationships

### Admin Features
- 📊 **Analytics Dashboard** - Content statistics and metrics
- ✏️ **Content Editor** - Create, edit, and manage content
- 📱 **Media Management** - Upload and organize images/documents
- 👥 **User Management** - Admin user roles and permissions
- ⚙️ **Settings** - System configuration and preferences

## 🛠️ Technology Stack

- **Frontend**: Nuxt 3 + Vue 3
- **Styling**: Tailwind CSS
- **UI Components**: Nuxt UI
- **Icons**: Heroicons
- **Database**: SQLite (development) / PostgreSQL (production)
- **Authentication**: JWT-based (to be implemented)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nuxt_admin_server
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment setup**
   ```bash
   # Copy environment file
   cp .env.example .env
   
   # Configure your environment variables
   DATABASE_URL=sqlite:.data/database.sqlite
   API_BASE=/api
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Access the dashboard**
   - Open [http://localhost:3000](http://localhost:3000)
   - You'll be redirected to `/admin` automatically

## 🏗️ Project Structure

```
nuxt_admin_server/
├── app/                    # Main app configuration
├── assets/                 # CSS and static assets
│   └── css/
│       └── main.css       # Main stylesheet
├── components/             # Vue components
│   └── admin/             # Admin-specific components
├── layouts/                # Page layouts
│   └── admin.vue          # Admin dashboard layout
├── middleware/             # Route middleware
│   └── auth.ts            # Authentication middleware
├── pages/                  # Application pages
│   ├── index.vue          # Landing page
│   └── admin/             # Admin pages
│       ├── index.vue      # Dashboard
│       └── content/       # Content management
├── server/                 # Server-side code
│   └── api/               # API endpoints
│       └── content/       # Content API
├── public/                 # Static files
├── nuxt.config.ts         # Nuxt configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── package.json           # Dependencies
```

## 🔌 API Endpoints

### Content Management
- `GET /api/content` - Fetch all content
- `POST /api/content` - Create new content
- `PUT /api/content/:id` - Update content
- `DELETE /api/content/:id` - Delete content

### Authentication (Future)
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user

## 🎨 Customization

### Styling
The dashboard uses Tailwind CSS with custom components. You can modify:
- `assets/css/main.css` - Custom CSS and component styles
- `tailwind.config.js` - Tailwind configuration and theme

### Components
All admin components are built with Nuxt UI for consistency:
- `UCard` - Content containers
- `UButton` - Interactive buttons
- `UTable` - Data tables
- `UModal` - Popup dialogs
- `UIcon` - Icon system

## �� Security Features

### Current Implementation
- Route-based middleware for admin routes
- Input validation on API endpoints
- Error handling and logging

### Planned Features
- JWT-based authentication
- Role-based access control
- CSRF protection
- Rate limiting
- Input sanitization

## 📱 Responsive Design

The dashboard is fully responsive with:
- **Mobile-first approach** - Optimized for small screens
- **Sidebar navigation** - Collapsible on mobile
- **Touch-friendly interactions** - Optimized for mobile devices
- **Flexible layouts** - Adapts to different screen sizes

## 🚀 Deployment

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

### Environment Variables
```bash
# Production environment
DATABASE_URL=postgresql://user:password@host:port/database
NODE_ENV=production
API_BASE=https://yourdomain.com/api
```

## 🔄 Development Workflow

### Adding New Content Types
1. Create new page in `pages/admin/content/`
2. Add API endpoint in `server/api/`
3. Update navigation in `layouts/admin.vue`
4. Add to content management tabs

### Adding New Features
1. Create component in `components/admin/`
2. Add page in `pages/admin/`
3. Implement API endpoints
4. Update documentation

## 📚 Documentation

- [Nuxt 3 Documentation](https://nuxt.com/docs)
- [Nuxt UI Components](https://ui.nuxt.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vue 3 Composition API](https://vuejs.org/guide/extras/composition-api-faq.html)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is proprietary to the Seun Fakuade Foundation.

## 🆘 Support

For technical support or questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

---

**Built with ❤️ for the Seun Fakuade Foundation**
