# H-Admin Dashboard

A clean and modern admin panel I built with React vite. It's got everything you need to manage services, projects, teams, and track analytics - all with a nice dark/light mode that actually works properly.

**Check it out live:** [https://h-admin-zeta.vercel.app](https://h-admin-zeta.vercel.app)

[![React](https://img.shields.io/badge/React-19.1.1-blue)](https://reactjs.org/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

## What's Inside

### The Good Stuff
- **Dark/Light Mode** that actually looks good in both themes
- **30+ Pages** for managing everything - services, projects, teams, analytics, you name it
- **Fully Responsive** - works great on phones, tablets, and desktops
- **Clean Design** - no unnecessary clutter, just what you need

### Main Features
- Complete analytics dashboard to track all your metrics
- Service management for 6 different service types (web, mobile, backend, cloud, design, ecommerce)
- Project tracking with different views and statuses
- User and team management
- Settings panel with everything from profile to billing
- Messages system with notifications
- Help center and documentation

## All The Pages

I've built a ton of pages for this thing. Here's what's available:

### Main Stuff
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
- **Profile** (`/profile`)

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
- React 19 (the latest one)
- React Router for navigation
- SCSS Modules for styling (keeps things organized)
- React Icons for all the icons
- Vite for super fast builds

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
- Works great in both light and dark mode
- Looks good on any screen size

## Contributing

If you want to improve something, feel free to fork it and send a PR. Always happy to see what people come up with.

## About Me

Hey! I'm Husney. I build stuff with code.

Check out my other work: [husney.vercel.app](https://husney.vercel.app)

## License

MIT - do whatever you want with it.

## 📸 Screenshots
<img width="1366" height="768" alt="Screenshot (2)" src="https://github.com/user-attachments/assets/cb0a92eb-513c-49bd-ab7f-087682ce5c60" />
<img width="1366" height="768" alt="Screenshot (9)" src="https://github.com/user-attachments/assets/07290629-bd33-4c82-bec3-5b02282f6ad5" />


<img width="1366" height="768" alt="Screenshot (3)" src="https://github.com/user-attachments/assets/97156499-8d59-40ff-8e49-760f235b96a2" />
<img width="1366" height="768" alt="Screenshot (4)" src="https://github.com/user-attachments/assets/cb92b8f1-04cf-4154-9701-69d964659106" />
<img width="1366" height="768" alt="Screenshot (8)" src="https://github.com/user-attachments/assets/6f6848c7-4237-4fd5-9ebb-cfcfc3d7c386" />
<img width="319" height="659" alt="Screenshot (7)" src="https://github.com/user-attachments/assets/d23b26c3-850a-4d71-b51d-67bf0734ff2b" />









