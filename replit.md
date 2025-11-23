# SYMA - Sistema Modular Auto-ensamblable

## Overview

SYMA is a landing page showcasing a modular self-reconfigurable robotics platform designed for Industry 5.0. The project presents the SYMA robotics system developed by team SYNTHEC, featuring a modern, futuristic design aesthetic inspired by award-winning technological websites. The application is built as a single-page React application with a focus on visual impact, featuring dark mode theming, glassmorphism effects, animated typewriter text, and smooth scroll interactions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18+ with TypeScript using Vite as the build tool and development server. The application follows a component-based architecture with client-side routing via Wouter.

**Styling System**: Tailwind CSS with a custom design system built on shadcn/ui components. The project uses the "new-york" style variant with dark mode as the default theme. Custom CSS variables define a comprehensive color palette with support for theming (background, foreground, primary, secondary, accent, destructive, muted colors with their respective variants).

**Component Library**: Extensive use of Radix UI primitives wrapped in custom shadcn/ui components providing accessible, unstyled components for dialogs, dropdowns, navigation menus, tooltips, accordions, and more. All components follow a consistent design pattern with hover elevation effects and border treatments.

**State Management**: React Query (@tanstack/react-query) for server state management with custom query client configuration. Local component state handled via React hooks (useState, useEffect, useRef).

**Design Philosophy**: 
- Mobile-first responsive design using Flexbox and CSS Grid
- Dark mode-centric aesthetic with deep backgrounds (#000000 or midnight blue)
- Glassmorphism effects (backdrop-blur) on navigation and cards
- Cyan electric (#00f3ff) accent color for CTAs and highlights
- Typography hierarchy using Inter/Roboto for body text and Orbitron/Montserrat for headings
- Consistent spacing system based on Tailwind units (4, 6, 8, 12, 16)

**Key Features**:
- Fixed navbar with glassmorphism effect and smooth scroll navigation
- Full viewport hero section with typewriter animation cycling through phrases ("Redefiniendo la Manufactura", "Robótica Modular", "Industria 5.0", "Materia Programable")
- Feature cards with hover float animations
- Scroll reveal animations using Intersection Observer
- Technical specifications section with visual data presentation
- Team member showcase
- Fully responsive layout

### Backend Architecture

**Server Framework**: Express.js with TypeScript running on Node.js. The application uses ES modules (type: "module") throughout.

**Development vs Production**: 
- Development mode uses Vite middleware for hot module replacement and dev tooling integration
- Production mode serves pre-built static assets from the dist/public directory
- Separate entry points (index-dev.ts and index-prod.ts) handle environment-specific setup

**Session Management**: Connect-pg-simple for PostgreSQL-backed session storage (configured but not actively used in current implementation).

**API Structure**: RESTful API pattern with routes prefixed under /api. The routes.ts file provides a registration system for HTTP endpoints. Currently implements a minimal storage interface for user management.

**Storage Layer**: Abstracted storage interface (IStorage) with in-memory implementation (MemStorage) for development. Designed to be swappable with database-backed storage. Includes basic CRUD operations for user entities (getUser, getUserByUsername, createUser).

**Logging**: Custom logging middleware that tracks request/response timing, HTTP methods, paths, status codes, and response payloads for API routes.

### Build System

**Vite Configuration**:
- React plugin for JSX transformation and Fast Refresh
- Runtime error overlay for development debugging
- Replit-specific plugins (cartographer, dev-banner) in development mode
- Path aliases: @ for client/src, @shared for shared directory, @assets for attached_assets
- Build output to dist/public with automatic cleanup

**TypeScript Configuration**:
- Strict mode enabled with incremental compilation
- ESNext modules with bundler module resolution
- Path mapping for clean imports (@/, @shared/)
- Includes client, shared, and server directories

**Build Process**:
- Client: Vite builds React application to dist/public
- Server: esbuild bundles server code to dist/index.js as ES module
- Development: tsx for TypeScript execution with watch mode

### Data Schema

**Database ORM**: Drizzle ORM configured for PostgreSQL with schema-first approach.

**Schema Definition** (shared/schema.ts):
- Users table with UUID primary key (auto-generated via gen_random_uuid())
- Username (unique) and password fields
- Zod schemas for validation (insertUserSchema)
- Type inference for Insert and Select operations

**Migration System**: Drizzle Kit configured with migrations output to ./migrations directory, schema at ./shared/schema.ts, PostgreSQL dialect.

## External Dependencies

### Database
- **Neon Database**: Serverless PostgreSQL provider (@neondatabase/serverless) for database hosting
- **Drizzle ORM**: Type-safe ORM for schema definition, migrations, and queries
- **Connection**: DATABASE_URL environment variable required for database connectivity

### UI Component Libraries
- **Radix UI**: Complete suite of unstyled, accessible component primitives (accordion, dialog, dropdown-menu, navigation-menu, popover, select, toast, tooltip, etc.)
- **shadcn/ui**: Pre-styled component system built on Radix UI primitives
- **Lucide React**: Icon library for consistent iconography
- **cmdk**: Command menu component
- **Embla Carousel**: Carousel/slider functionality
- **Vaul**: Drawer component primitive

### Styling & Animation
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **class-variance-authority**: Type-safe variant API for component styling
- **clsx & tailwind-merge**: Class name management utilities
- **PostCSS**: CSS processing with Autoprefixer

### Form Management
- **React Hook Form**: Form state management and validation
- **@hookform/resolvers**: Validation resolver integrations
- **Zod**: Schema validation library integrated with Drizzle and forms

### Development Tools
- **Vite**: Build tool and dev server with HMR
- **@vitejs/plugin-react**: React Fast Refresh support
- **@replit/vite-plugin-runtime-error-modal**: Enhanced error reporting in Replit environment
- **@replit/vite-plugin-cartographer**: Replit-specific tooling
- **tsx**: TypeScript execution for development
- **esbuild**: Fast bundler for production server build

### Fonts
- **Google Fonts**: Inter, Montserrat, Orbitron, Roboto families loaded via CDN
- **Font Awesome**: Icon library (v6.4.0) loaded via CDN

### Assets
The application references logo images stored in attached_assets directory:
- Logo-SYNTHEC_1763940655634.png
- Logo-SYMA_1763940655635.png

### Environment Requirements
- Node.js environment with ES modules support
- DATABASE_URL environment variable for PostgreSQL connection
- NODE_ENV for environment detection (development/production)