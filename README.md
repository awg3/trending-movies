# Trending Movies

A React application that lets you search for movies and tracks the most popular searches using the TMDB API and Appwrite backend.

![Trending Movies](./public/preview.png)

## Features

- **Search Movies** - Find movies by title
- **Movie Details** - View poster, overview, and release date
- **Trending Tracking** - Automatically tracks your searches with Appwrite
- **Real-time Updates** - Fast refresh with Vite's HMR
- **Responsive Design** - Built with Tailwind CSS

## Quick Start

### Prerequisites

- Node.js 16+ 
- npm or yarn
- React 19+

### Installation

1. **Clone and install**
   ```bash
   npm install
   ```

2. **Configure environment variables**
   
   Create a `.env.local` file in the root directory:
   ```
   VITE_TMBD_API_KEY=your_tmdb_api_key
   VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
   VITE_APPWRITE_DATABASE=your_database_id
   VITE_APPWRITE_TABLE_ID=your_table_id
   ```

   Get your TMDB API key from [The Movie Database](https://www.themoviedb.org/settings/api)

3. **Start development server**
   ```bash
   npm run dev
   ```
   
   App runs at `http://localhost:5173`

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint checks |

## Project Structure

```
src/
├── components/        # React components
│   ├── MovieCard.jsx  # Movie display card
│   ├── Search.jsx     # Search input
│   └── Spinner.jsx    # Loading indicator
├── lib/
│   └── appwrite.js    # Appwrite SDK configuration
├── App.jsx            # Main app component
├── main.jsx           # Entry point
└── index.css          # Global styles
```

## Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Appwrite** - Backend database
- **TMDB API** - Movie data

## Appwrite Setup

The app automatically pings the Appwrite backend on startup to verify the connection. If you see errors in the console, check:
- Your Appwrite project credentials in `.env.local`
- Network connectivity to the Appwrite server
- Database and table IDs match your Appwrite setup

## Notes

- Searches are tracked automatically when you find movies
- The trending section shows the 5 most-searched movies
- Images use TMDB's image CDN with a fallback placeholder
