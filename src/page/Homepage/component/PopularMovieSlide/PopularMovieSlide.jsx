import React from 'react'
import { usePopularMoviesQuery } from '../../../../hook/usePopularMovies'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from '../MovieCard/MovieCard';
import './PopularMovieSlide.style.css'
import { responsive } from '../../../../config/carouselResponsive';
  
const PopularMovieSlide = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  
  if (isLoading) {
    return <h1>Loading...</h1>
  }
  if (isError) {    
    return (
      <Alert icon={<CheckIcon fontSize="inherit" />} severity="error">
        데이터 로딩에 실패했습니다. {error ? error.message : "알 수 없는 오류"}
      </Alert>
    )
  }

  const popularResults = data?.results || [];

  return (    
    <div className='movie-list'>
      <h2>Popular Movies</h2>
        <Carousel
          infinite={true}
          centerMod={true}
          itemClass='carousel-container'
          responsive={responsive}
        >
          {popularResults.map((movie)=><MovieCard movie={movie} key={movie.id} />)}
        </Carousel>
    </div>    
  )
}

export default PopularMovieSlide