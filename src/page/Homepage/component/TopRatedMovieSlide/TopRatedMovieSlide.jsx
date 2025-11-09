import React from 'react'
import { useTopRatedMoviesQuery } from '../../../../hook/useTopRatedMovies'; 
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from '../MovieCard/MovieCard';
import { responsive } from '../../../../config/carouselResponsive';
  
const TopRatedMovieSlide = () => {
const { data, isLoading, isError, error } = useTopRatedMoviesQuery();
  
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

  const topRatedResults = data?.results || [];

  return (    
    <div className='movie-list'>
      <h2>Top Rated Movies</h2>
        <Carousel
          infinite={true}
          centerMod={true}
          itemClass='carousel-container'
          responsive={responsive}
        >
          {topRatedResults.map((movie)=><MovieCard movie={movie} key={movie.id} />)}
        </Carousel>
    </div>    
  )
}

export default TopRatedMovieSlide