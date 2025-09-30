# The King's Room - React App

This React application is based on The King's Room landing page, featuring a modern men's wellness and brotherhood platform.

## Features

- **Responsive Design**: Optimized for all device sizes
- **Modern Styling**: Dark theme with gold accents
- **Smooth Navigation**: Sticky navigation with smooth scrolling
- **Call-to-Actions**: Multiple engagement points for different user journeys

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:

   ```bash
   cd kings-room-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── App.js          # Main component with all sections
├── App.css         # Styling for the landing page
├── index.js        # Entry point
└── index.css       # Global styles and CSS variables
```

## Sections

1. **Navigation** - Sticky header with smooth scroll links
2. **Hero** - Main value proposition and call-to-action
3. **The Invitation** - Introduction to The King's Room concept
4. **Choose Your Path** - Three main offerings/services
5. **Proof & Vision** - Social proof and visual elements
6. **Footer CTA** - Final call-to-action and branding

## Customization

The design uses CSS custom properties (variables) defined in `:root` for easy theming:

- `--bg`: Background color (#0b0b0b)
- `--fg`: Foreground/text color (#f5f5f5)
- `--muted`: Muted text color (#c7c7c7)
- `--gold`: Accent color (#c8a96b)
- `--card`: Card background (#121212)

## Deployment

To create a production build:

```bash
npm run build
```

The build folder will contain the optimized production files ready for deployment.

## Original Design

This React app is converted from the original HTML landing page while maintaining all the visual design and functionality.
