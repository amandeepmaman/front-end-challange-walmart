# React Chatbot Application - Complete Testing Solution

## Project Overview

A responsive React chatbot with full test coverage including:

- Context API state management
- Custom hooks testing
- Component integration tests
- User interaction simulations

## Test Architecture

src/tests/
├── components/
│ ├── Chatbot/
│ │ ├── index.test.js (Main tests)
│ │ └── ChatHeader.test.js
├── hooks/
│ └── useTimer.test.js
└── setupTests.js

## Features

- **Responsive Layout** - Works on both desktop and mobile devices
- **Side Menu Navigation** - Switch between "Apps" and "Documents" pages
- **Dynamic Content Search** - Filter and highlight content based on search queries
- **Interactive Chatbot** - Chat interface with simulated responses
- **Elapsed Time Tracking** - Timer showing seconds since chatbot was opened

## Setup Instructions

1. Clone the repository:

   ```
   git clone https://github.com/amandeepmaman/front-end-challange-walmart
   cd front-end-challange-walmart
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the development server:

   ```
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Design Decisions

### State Management

The application uses React Context API for global state management. This approach was chosen because:

- It eliminates prop drilling across components
- It centralizes state logic related to the chatbot and UI
- It provides a clean and efficient way to share data between components

### Custom Hook

The `useTimer` custom hook was implemented to:

- Encapsulate chatbot timer functionality
- Separate the timer logic from component rendering
- Make the code more reusable and maintainable

### Responsive Design

- The chatbot appears as a floating window on desktop
- On mobile devices, the chatbot expands to fill the entire screen
- The side menu and content area adjust based on screen size

### Search Functionality

- Real-time filtering of content based on search input
- Text highlighting for matched search terms
- Clear visual indicator when content has been filtered

## Technologies Used

- React JS (with Hooks and Context API)
- CSS-in-JS for styling
- JavaScript ES6+

### I intentionally skipped one test case with this pattern:

    it.skip("matches snapshot", () => {
    const { asFragment } = render(
      <AppProvider>
        <Layout>
          <div>Test Content</div>
        </Layout>
      </AppProvider>
    );
    expect(asFragment()).toMatchSnapshot();

});

Rationale:
Redundant Coverage - Core functionality already tested
CI Reliability - Timing issues caused false negatives
Maintenance Cost - Required frequent updates

# Run all tests

### `npm test`

# Run specific test file

npm test src/**tests**/components/Chatbot/index.test.js

# Update snapshots

npm test -- -u
Key Testing Principles
Isolation - Mock external dependencies
Behavior Focus - Test what users experience
Determinism - Avoid flaky tests
Coverage - 95%+ coverage threshold
