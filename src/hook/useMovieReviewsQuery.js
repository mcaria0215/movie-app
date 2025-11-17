import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchMovieReviews = (movieId)=>{
  return api.get(`/movie/${movieId}/reviews`);
}

export const useMovieReviewsQuery = (id)=>{
  return useQuery({
    queryKey: ['movie-reviews', id],
    queryFn: ()=>fetchMovieReviews(id),
    select: (result)=>result.data,
    staleTime: 1000 * 60 * 5,
  })
};