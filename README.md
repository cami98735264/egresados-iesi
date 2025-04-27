# San Isidoro Egresados - Frontend Application

## Project Overview
This is the frontend application for the San Isidoro Egresados platform, built with React and modern web technologies. The application provides a user-friendly interface for alumni management and interaction.

## Project Structure
```
frontend/
├── public/                 # Static files and public assets
├── src/                    # Source code
│   ├── assets/            # Images, icons, and other static assets
│   │
│   ├── authentication/    # Authentication related components and logic
│   │   ├── OnlyAdmin.js           # Admin-only route protection component
│   │   ├── HandleAuthenticated.js # Authentication state handler component
│   │   └── AuthenticationContext.js # Auth context provider and state management
│   │
│   ├── components/        # Reusable UI components
│   │   ├── auth-forms/    # Authentication form components
│   │   │   ├── AuthForms.js  # Main authentication forms component
│   │   │   └── AuthForms.css # Authentication forms styling
│   │   │
│   │   ├── utils/         # Utility components
│   │   │   └── pagination/ # Pagination related components
│   │   │
│   │   ├── fquestions/    # Form question components
│   │   │   ├── FQuestions.js  # Form questions component
│   │   │   └── FQuestions.css # Form questions styling
│   │   │
│   │   ├── footer/        # Footer components
│   │   │   ├── Footer.js  # Main footer component
│   │   │   └── Footer.css # Footer styling
│   │   │
│   │   ├── spa_main/      # Single Page Application main components
│   │   │   ├── SPA_Main.js  # Main SPA component
│   │   │   └── SPA_Main.css # SPA styling
│   │   │
│   │   ├── navbar/        # Navigation bar components
│   │   │   ├── Navbar.js  # Main navigation component
│   │   │   └── Navbar.css # Navigation styling
│   │   │
│   │   └── layout/        # Layout components
│   │       ├── Layout.js  # Main layout component
│   │       └── Layout.css # Layout styling
│   │
│   ├── dashboard/         # Dashboard related components and pages
│   │   ├── estadisticas/  # Statistics and analytics components
│   │   │   ├── EstadisticasModulo.js  # Statistics module component
│   │   │   └── EstadisticasModulo.css # Statistics module styling
│   │   │
│   │   ├── ui_components/ # Dashboard UI components
│   │   │
│   │   ├── layout/        # Dashboard layout components
│   │   │
│   │   ├── educacion/     # Education-related components
│   │   │   ├── EducacionModulo.js  # Education module component
│   │   │   └── EducacionModulo.css # Education module styling
│   │   │
│   │   ├── trabajos/      # Work-related components
│   │   │   └── TrabajosModulo.js   # Work module component
│   │   │
│   │   └── main_dashboard/ # Main dashboard components
│   │       └── MainDashboard.js    # Main dashboard component
│   │
│   ├── utils/            # Utility functions and helpers
│   │   └── handleLogout.js # Logout functionality utility
│   │
│   ├── App.css           # Global application styles
│   ├── App.test.js       # App component tests
│   ├── index.css         # Root styles and Tailwind imports
│   ├── index.js          # Application entry point and root render
│   ├── logo.svg          # Application logo
│   ├── reportWebVitals.js # Performance monitoring utility
│   └── setupTests.js     # Test configuration and setup
│
├── package.json          # Project dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
└── .gitignore           # Git ignore rules
```

## Technologies Used
- React 18.3.1
- React Router DOM 6.23.0
- Axios 1.6.8
- TailwindCSS 3.4.3
- DaisyUI 4.10.3
- Radix UI Themes 3.0.3
- Tremor React 3.17.3
- React Google reCAPTCHA 3.1.0
- React Paginate 8.2.0

## Getting Started

### Prerequisites
- Node.js (LTS version recommended)
- npm or yarn package manager

### Installation
1. Clone the repository
2. Navigate to the frontend directory
3. Install dependencies:
```bash
npm install
```

### Development
To start the development server:
```bash
npm start
```
The application will be available at [http://localhost:3000](http://localhost:3000)

### Building for Production
To create a production build:
```bash
npm run build
```
The build files will be generated in the `build` directory.

### Testing
To run tests:
```bash
npm test
```

## Key Features
- Modern, responsive UI with TailwindCSS and DaisyUI
- Authentication system with role-based access control
- Comprehensive dashboard with statistics and analytics
- Education and work tracking components
- Reusable component library
- Performance monitoring with Web Vitals
- Google reCAPTCHA integration
- Pagination support

## Development Guidelines
- Follow React best practices and component-based architecture
- Use functional components with hooks
- Maintain consistent code style
- Write tests for critical components
- Use the provided utility functions for common operations
- Keep components organized in their respective feature folders
- Follow the established authentication patterns
- Maintain separate CSS files for each major component
- Use consistent naming conventions for components and files

## Deployment
The application is configured for production deployment. Use the build command to generate optimized files for deployment.

## Contributing
1. Create a feature branch
2. Make your changes
3. Submit a pull request

## License
This project is proprietary software. All rights reserved.
