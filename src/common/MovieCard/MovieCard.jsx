import React from 'react'
import Chip from '@mui/material/Chip';
import './MovieCard.style.css'
import { useMovieGenreQuery } from '../../hook/useMovieGenre';

const MovieCard = ({movie}) => {  
  
  const {data:genreData} = useMovieGenreQuery(); 

  const getGenreName = (id)=>{
    const genre = genreData?.find(genre => genre.id === id);
    return genre?.name || '미분류'
  }

  return (
    <div
    className='movie-card'
    style={{backgroundImage:`url(https://media.themoviedb.org/t/p/w780${movie.poster_path})`}}>
      <div className='overlay'>
        <p className="title">{movie.title}</p>
        <div className='genre'>
          {movie.genre_ids.map((id) => (
            <Chip 
              key={id}
              label={getGenreName(id)}
              color="primary"
              size="small"
            />
          ))}
        </div>
        <div className='movie-info'>
          <div>⭐ : {movie.vote_average}</div>
          <div>🔥 : {movie.popularity}</div>
          <div>{movie.adult?"🔞 over18":"🟢 under18"}</div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard;