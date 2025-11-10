import React from 'react'
import { useUpcomingMoviesQuery } from '../../../../hook/useUpcomingMovie'; 
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
  
const UpcomingMovieSlide = () => {
const { data, isLoading, isError, error } = useUpcomingMoviesQuery();
  
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
      <MovieSlider title='Upcoming Movies' movies={results} />
    </>    
  )
}

export default UpcomingMovieSlide