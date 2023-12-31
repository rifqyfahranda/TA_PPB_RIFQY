import React from 'react'
import { Link } from 'react-router-dom'
import './genre.css'

const MovieGenresList = () => {
  const movieGenres = {
    2: 'Adventure',
    14: 'Fantasy',
    16: 'Animation',
    18: 'Drama',
    27: 'Horror',
    28: 'Action',
    35: 'Comedy',
    36: 'History',
    37: 'Western',
    53: 'Thriller',
    80: 'Crime',
    99: 'Documentary',
    878: 'Science Fiction',
    9648: 'Mystery',
    10402: 'Music',
    10749: 'Romance',
    10751: 'Family',
    10752: 'War',
    10763: 'News',
    10764: 'Reality',
    10767: 'Talk Show',
  }

  const genreList = Object.entries(movieGenres).map(([id, genre]) => (
    <li key={id}>
      <Link to={`/${genre.toLowerCase()}`}>{genre}</Link>
    </li>
  ))

  return (
    <div>
      <h2>Movie Genres</h2>
      <ul>{genreList}</ul>
    </div>
  )
}

export default MovieGenresList
