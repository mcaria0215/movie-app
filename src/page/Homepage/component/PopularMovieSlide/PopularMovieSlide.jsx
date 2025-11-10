import React from 'react'
import { usePopularMoviesQuery } from '../../../../hook/usePopularMovies'
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
  
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

  const results = data?.results || [];

  return (    
    <>
      <MovieSlider title='Popular Movies' movies={results} />
    </>    
  )
}

export default PopularMovieSlide