import React from 'react'
import Chip from '@mui/material/Chip';
import './MovieCard.style.css'

const genreMap = {
  28: "액션",
  12: "모험",
  16: "애니메이션",
  35: "코미디",
  80: "범죄",
  99: "다큐멘터리",
  18: "드라마",
  10751: "가족",
  14: "판타지",
  36: "역사",
  27: "공포",
  10402: "음악",
  9648: "미스터리",
  10749: "로맨스",
  878: "SF",
  10770: "TV 영화",
  53: "스릴러",
  10752: "전쟁",
  37: "서부",
};

const MovieCard = ({movie}) => {  
  const getGenreName = (id) => {  
    return genreMap[id] || '장르 없음';
  };

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

export default MovieCard