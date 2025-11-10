import React from 'react'
import Banner from './component/Banner/Banner'
import PopularMovieSlide from './component/PopularMovieSlide/PopularMovieSlide'
import TopRatedMovieSlide from './component/TopRatedMovieSlide/TopRatedMovieSlide'
import UpcomingMovieSlide from './component/UpcomingMovieSlide/UpcomingMovieSlide'

const HomePage = () => {
  return (
    <div>
      <Banner />     
      <UpcomingMovieSlide />      
      <PopularMovieSlide /> 
      <TopRatedMovieSlide />      
    </div>
  )
}

export default HomePage