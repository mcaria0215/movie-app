import React from 'react'
import { useTopRatedMoviesQuery } from '../../../../hook/useTopRatedMovies'; 
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
  
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

  const results = data?.results || [];

  return (    
    <>
     <MovieSlider title='Top Rated Movies' movies={results} />
    </>    
  )
}

export default TopRatedMovieSlide