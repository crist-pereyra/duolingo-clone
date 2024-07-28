# Lingo 🌟

![Lingo Preview](/public/lingo-preview.png)

## 🌐 Live Demo

Explore the live demonstration of the project: [nextjs14-lingo](https://duolingo-clone-xi.vercel.app)

Welcome to Lingo! This is a dynamic, engaging, and feature-packed clone of Duolingo, crafted with the latest and greatest in web development technologies:

⚡ **Next.js 14** for server-side rendering and static site generation.  
⚛️ **React with TypeScript** for a robust and scalable frontend.  
🎨 **Tailwind CSS** for beautiful and customizable UI components.  
🔒 **Clerk** for authentication and user management.  
🛠️ **ESLint and Prettier** for code quality and consistency.  
🖌️ **Shadcn/ui** for UI components.  
📊 **React Admin** for robust admin interfaces.  
🐻 **Zustand** for simple and efficient state management.  
🔄 **Drizzle ORM** for database interactions.
💽 **Neon Database** for data storage and management.

## 🚀 Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

- Node.js (version 14 or later)
- npm or yarn
- Neon Database account

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/crist-pereyra/duolingo-clone
   cd duolingo-clone
   ```

2. Install dependencies:

```sh
   npm install
```

### Running the Development Server

1. Start the development server with the following command:

```sh
   npm run dev
```

2. Open your browser and navigate to http://localhost:3000 to see Dev Overflow in action!

## 📂 Project Structure

Here's an overview of the project's structure:

```php
lingo/
├── app/                    # Source code
│   ├── (main)/             # Main Pages
│   ├── (marketing)/        # Marketing Pages
│   ├── admin/              # Admin Pages
│   ├── api/                # API Endpoints
│   ├── buttons/            # Button components
│   ├── lesson/             # Lesson Pages
│   ├── favicon.ico         # Favicon
│   ├── globals.css         # Global CSS styles
│   └── layout.tsx          # Main Layout
├── components/             # React components
├── db/                     # Database interactions
├── lib/                    # Library functions
├── public/                 # Public assets
├── scripts/                # Utility scripts to seed and rest database
├── store/                  # State management with Zustand
├── .eslintrc.json          # ESLint configuration
├── .gitignore              # Git ignore file
├── README.md               # Project documentation
├── components.json         # Components metadata
├── constants.ts            # Constant values
├── drizzle.config.ts       # Drizzle ORM configuration
├── middleware.ts           # Middleware configuration
├── next.config.mjs         # Next.js configuration
├── package-lock.json       # Lock file for npm
├── package.json            # Project metadata and scripts
├── postcss.config.mjs      # PostCSS configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration

```

## 🛠️ Key Features

- **Authentication**: Secure user authentication and management with Clerk.
- **User Interface**: Beautiful and responsive UI using Shadcn/ui.
- **Admin Panel**: Manage content efficiently with React Admin.
- **State Management**: Simplify state management with Zustand.
- **Database Interaction**: Robust and flexible ORM with Drizzle.
- **Modern Styling**: Create stunning designs with Tailwind CSS.
- **Type Safety**: Ensure reliability with TypeScript's type-checking.
