import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './MovieSlider.style.css'
import MovieCard from '../MovieCard/MovieCard'
import { carouselResponsive } from '../../config/responsive'

const MovieSlider = ({title, movies }) => {
  return (
    <div className='movie-list'>
      <h2>{title}</h2>
        <Carousel
          infinite={true}
          centerMod={true}
          itemClass='carousel-container'
          responsive={carouselResponsive}
        >
          {movies.map((movie)=><MovieCard movie={movie} key={movie.id} />)}
        </Carousel>
    </div>
  )
}

export default MovieSlider