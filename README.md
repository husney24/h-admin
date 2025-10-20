# H-Admin Dashboard

A clean and modern admin panel I built with React + Vite. It's got everything you need to manage services, projects, teams, and track analytics - all with a nice dark/light mode that syncs with your system theme.

**Check it out live:** [https://h-admin-zeta.vercel.app](https://h-admin-zeta.vercel.app)

[![React](https://img.shields.io/badge/React-19.1.1-blue)](https://reactjs.org/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

## What's Inside

### The Good Stuff
- **🔐 Full Authentication System** - Login, signup, forgot password, reset password with beautiful SVG backgrounds
- **🌓 Smart Dark/Light Mode** - Automatically syncs with your system theme (but you can still toggle manually)
- **📱 Fully Responsive** - Works great on phones, tablets, and desktops
- **🎨 Clean Design** - No unnecessary clutter, just what you need
- **🔒 Protected Routes** - All dashboard pages secured behind authentication
- **💾 Session Persistence** - Stay logged in even after page refresh
- **30+ Pages** - Everything you need to manage your business

### Main Features
- Complete analytics dashboard to track all your metrics
- Service management for 6 different service types (web, mobile, backend, cloud, design, ecommerce)
- Project tracking with different views and statuses
- User and team management with authentication
- Profile page with real social links and skills
- Settings panel with everything from profile to billing
- Messages system with notifications
- Help center and documentation

## 🔐 Authentication System

Full authentication flow with demo credentials:
- **Login Page** - Clean login with "Remember Me" and demo credentials display
- **Signup Page** - Full registration with form validation
- **Forgot Password** - Email-based password reset flow
- **Reset Password** - New password with live requirements validation
- **Demo Credentials**: `admin@demo.com` / `password123` (works with any email/password)
- **Protected Routes** - All 30+ dashboard pages secured
- **Session Management** - LocalStorage persistence with "Remember Me" option
- **Auto-logout** - From both Header and Sidebar
- **Beautiful SVG Backgrounds** - Static wave patterns on all auth pages

## All The Pages

I've built 35+ pages for this thing. Here's what's available:

### 🔐 Authentication (Public Routes)
- **Login** (`/login`) - Sign in with demo credentials
- **Signup** (`/signup`) - Create new account
- **Forgot Password** (`/forgot-password`) - Request password reset
- **Reset Password** (`/reset-password`) - Set new password

### Main Stuff (Protected)
- **Dashboard** (`/`) - Your main overview page
- **Analytics** (`/analytics`) - The big one - tracks everything in charts and graphs

### Managing People
- **Users** (`/users`) - Add, edit, delete users
- **Teams** (`/teams`) - Team management
- **Roles** (`/roles`) - User permissions and roles

### Services (6 Types)
- **All Services** (`/services`) - Overview of everything
- **Web Development** (`/services/websites`)
- **Mobile Apps** (`/services/mobile`)
- **Backend** (`/services/backend`)
- **Cloud Solutions** (`/services/cloud`)
- **UI/UX Design** (`/services/design`)
- **E-commerce** (`/services/ecommerce`)

### Projects
- **All Projects** (`/projects`) - See everything
- **Active** (`/projects/active`) - What's cooking right now
- **Archived** (`/projects/archived`) - Old stuff
- **Create New** (`/projects/create`) - Start something new

### Content
- **Blog** (`/blog`)
- **Media Library** (`/media`)
- **Testimonials** (`/testimonials`)

### System Settings
- **Settings** (`/settings`) - Profile, security, notifications, theme, billing
- **Integrations** (`/integrations`)
- **API Management** (`/api`)
- **Database** (`/database`)
- **Deployment** (`/deployment`)

### Support
- **Messages** (`/messages`) - Internal messaging
- **Feedback** (`/feedback`)
- **Help Center** (`/help`)

### Your Stuff
- **Profile** (`/profile`) - Your personal profile with real details, social links, and skills

## 👤 Profile Features

Complete profile management system:
- **Personal Details**: Full name, email, phone, location, website
- **Bio Section**: About yourself
- **Social Links**: Linktree, GitHub, LinkedIn, X (Twitter)
- **Skills & Expertise**: 
  - JavaScript, React.js, React Native
  - Node.js, Express.js, MongoDB, MySQL
  - Redux, Python, Django, C
- **Stats Dashboard**: Projects, tasks, hours, team members
- **Recent Activity**: Track your actions
- **Achievements**: Unlockable badges
- **Editable**: Update everything with built-in forms

## The Analytics Page

This is probably the coolest part. It's like your command center for everything:

- **Revenue tracking** - See how much money's coming in, month by month
- **Project stats** - What's done, what's in progress, what's pending
- **Service performance** - Which services are crushing it (spoiler: e-commerce is at +31%)
- **Top clients** - Your MVPs ranked with satisfaction scores
- **Team performance** - How each team is doing
- **Geographic spread** - Where your clients are from
- **Tech stack usage** - What technologies you're using most
- **Smart insights** - Automated suggestions on what to focus on

You can filter by time (last week, month, year, whatever) and export everything if you need to.

## Tech Stack

Nothing fancy, just solid tools:
- **React 19** - The latest version with modern features
- **React Router v6** - For navigation and routing
- **React Context API** - Global state management for auth
- **SCSS Modules** - Component-scoped styling
- **React Icons** - Beautiful icon library
- **Vite** - Super fast build tool and dev server
- **LocalStorage** - Session persistence

## Getting Started

```bash
# Clone it
git clone https://github.com/husney24/h-admin.git
cd h-admin

# Install stuff
npm install 

# Run it locally
npm run dev

# Build for production
npm run build
```

Then just open `http://localhost:5173` and you're good to go.

## Customizing

Want to change colors? Check out `src/styles/_variables.scss` - all the colors are CSS variables so you can tweak them easily.

Need to add a new page? Create it in `src/pages`, add the route in `App.jsx`, and add it to the sidebar menu. Pretty straightforward.

## Design Philosophy

I kept it simple:
- Clean black and white with pops of color where needed
- 2px borders everywhere for better definition
- Smooth transitions but not overdone
- **System theme detection** - Auto dark/light mode based on your OS
- Works great in both light and dark mode
- Looks good on any screen size
- Static SVG backgrounds on auth pages (no distracting animations)
- Form validation with helpful error messages
- Password visibility toggles on all password fields

## 🚀 Features Highlight

### Authentication & Security
- ✅ Demo authentication (replace with real API in production)
- ✅ Protected routes with redirect to login
- ✅ Session persistence across page refreshes
- ✅ Remember Me functionality
- ✅ Forgot password flow
- ✅ Password reset with requirements validation
- ✅ Logout from Header and Sidebar
- ✅ User state management with Context API

### Theme System
- ✅ Auto-detect system theme (prefers-color-scheme)
- ✅ Manual toggle override
- ✅ LocalStorage preference saving
- ✅ Real-time system theme change listener
- ✅ Smooth transitions between themes

### User Experience
- ✅ Form validation on all auth pages
- ✅ Loading states during auth check
- ✅ Error messages for invalid inputs
- ✅ Success states with auto-redirects
- ✅ Password requirements with live validation
- ✅ Mobile-responsive design throughout

## Contributing

If you want to improve something, feel free to fork it and send a PR. Always happy to see what people come up with.

## About Me

Hey! I'm Husney Mobarok. Full-stack developer passionate about creating innovative web and mobile applications.

**Skills & Expertise:**
- 💻 Frontend: JavaScript, React.js, React Native
- 🌐 Backend: Node.js, Express.js, MongoDB, MySQL
- 🧰 State Management: Redux
- 🐍 Additional: Python, C
- 🌟 Frameworks: Django

**Connect with me:**
- 🌐 Portfolio: [husney.vercel.app](https://husney.vercel.app)
- 🔗 Linktree: [linktr.ee/husney_24](https://linktr.ee/husney_24)
- 💼 LinkedIn: [linkedin.com/in/husney24](https://www.linkedin.com/in/husney24)
- 🐙 GitHub: [github.com/husney24](https://github.com/husney24)
- 🐦 X (Twitter): [x.com/husney_24](https://x.com/husney_24)

## License

MIT - do whatever you want with it.

## 📸 Screenshots

<img width="1366" height="768" alt="Screenshot (16)" src="https://github.com/user-attachments/assets/4ffc463d-225e-4268-928a-ede6ae29792f" />
<img width="1366" height="768" alt="Screenshot (17)" src="https://github.com/user-attachments/assets/dda97117-f295-44d8-bb00-581f0c15a799" />
<img width="1366" height="768" alt="Screenshot (14)" src="https://github.com/user-attachments/assets/18ac20da-452c-4a93-b325-303a8a82b7f0" />



<img width="1366" height="768" alt="Screenshot (2)" src="https://github.com/user-attachments/assets/cb0a92eb-513c-49bd-ab7f-087682ce5c60" />
<img width="1366" height="768" alt="Screenshot (3)" src="https://github.com/user-attachments/assets/97156499-8d59-40ff-8e49-760f235b96a2" />
<img width="1366" height="768" alt="Screenshot (4)" src="https://github.com/user-attachments/assets/cb92b8f1-04cf-4154-9701-69d964659106" />
<img width="1366" height="768" alt="Screenshot (8)" src="https://github.com/user-attachments/assets/6f6848c7-4237-4fd5-9ebb-cfcfc3d7c386" />


![WhatsApp Image 2025-10-19 at 02 14 44_311c2a43](https://github.com/user-attachments/assets/180fbf78-a786-4e5e-8502-566e250635ba)
<img width="319" height="659" alt="Screenshot (7)" src="https://github.com/user-attachments/assets/d23b26c3-850a-4d71-b51d-67bf0734ff2b" />









