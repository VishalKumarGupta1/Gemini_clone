
# Gemini Clone

A modern clone of the Gemini application built with **Vite** + **React**, using the Gemini API for seamless data integration. This app also features a sidebar that shows recent searches and allows users to start a new chat with the click of a button.

## Demo

You can try out the live demo of the Gemini Clone here:

[Gemini Clone - Live Demo](https://geminiclone11.netlify.app/)

## Features

- **Gemini API Integration**: Direct integration with the Gemini API to fetch and send data.
- **Recent Searches Sidebar**: Displays the most recent searches for easy access to past queries.
- **New Chat**: Allows users to start a fresh conversation by clicking the "New Chat" button.

## Installation

Follow the steps below to set up the project locally.

### Step 1: Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/VishalKumarGupta1/Gemini_clone.git
```

### Step 2: Install Dependencies

Navigate to the project directory and install the required dependencies:

```bash
cd Gemini_clone
npm install
```

Or if you are using Yarn:

```bash
yarn install
```

### Step 3: Set Up Gemini API Key

You will need to configure your API key to access the Gemini API. For security reasons, please set the API key directly in the project files rather than using `.env` files.

1. Open the file where the API request is being made (e.g., `src/gemini.js`).
2. Find the place where the API key is being set (e.g., `API_KEY` variable).
3. Replace the placeholder value with your actual Gemini API key:

```javascript
const API_KEY = 'your-api-key-here';
```

Make sure you have a valid Gemini API key to proceed.

### Step 4: Run the Application

To start the development server with Vite, run:

```bash
npm run dev
```

Or with Yarn:

```bash
yarn dev
```

Your app should now be running at `http://localhost:5173` (default port for Vite).

### Step 5: Building for Production

To build the app for production, run:

```bash
npm run build
```

This will generate an optimized production build in the `dist/` directory.

## Usage

### Sidebar: Recent Searches

The sidebar in the application automatically displays a list of recent searches. Every time a user performs a search, it is stored locally, and the sidebar updates accordingly. Users can click on any of the recent searches to quickly access previous conversations.

### New Chat Button

Click the **"New Chat"** button to start a fresh conversation. The chat window will reset, and you can initiate a new interaction.

### Sending and Receiving Data

All data interactions with the Gemini API are done directly in the frontend using fetch or the native `fetch()` API, eliminating the need for any backend server or external Axios calls.

## Tech Stack

- **Frontend**: React + Vite
- **State Management**: React Hooks
- **Styling**: CSS 
- **API Communication**: Fetch (no backend or Axios)
- **Deployment**: Netlify

## Contributing

We welcome contributions to the project!

## License

This project is licensed under the MIT License.

## Acknowledgments

- Inspired by the original Gemini app.

