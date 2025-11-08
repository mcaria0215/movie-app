import React, { useState } from 'react'
import { usePopularMoviesQuery } from "../../../../hook/usePopularMovies"
import Alert from '@mui/material/Alert';
import './Banner.style.css'

const Banner = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  console.log(data);  

  if(isLoading){
    return <h1>Loading...</h1>
  }
  if(isError){
    return (
      <Alert icon={<CheckIcon fontSize="inherit" />} severity="error">
        데이터 로딩에 실패했습니다. {error? error.message: "알수없는 오류"}
      </Alert>
    )
  }

  return (
    <div className='banner' style={{
      backgroundImage: `url("https://media.themoviedb.org/t/p/w1280_and_h720_bestv2${data?.results[19].poster_path}")`
    }}>
      <div className='banner-text-area'>
        <h1>{data?.results[19].title}</h1>
        <p>{data?.results[19].overview}</p>
      </div>
    </div>
  )
}

export default Banner