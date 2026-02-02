import React from 'react'
import noMovie from '../assets/no-movie.png'

const MovieCard = ({ movie: { title, poster_path, vote_average, original_language, release_date } }) => {
    return (
        <div className="movie-card">
            <img
                src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : noMovie}
                alt={title}
            />
            <div className="mt-4">
                <h3>{title}</h3>
                <div className='content'>
                    <svg className="inline-block" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
                    <span className="rating">{vote_average ? vote_average.toFixed(1) : 'N/A'}</span>
                    <span className="dot">·</span>
                    <span className="lang">{original_language}</span>
                    <span className="dot">·</span>
                    <span className="year">
                        {release_date ? release_date.split('-')[0] : 'N/A'}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default MovieCard