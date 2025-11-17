import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchMovieRelated = (movieId)=>{
  return api.get(`/movie/${movieId}/recommendations`);
}

export const useMovieRelatedQuery = (id)=>{
  return useQuery({
    queryKey: ['movie-related', id],
    queryFn: ()=>fetchMovieRelated(id),
    select: (result)=>result.data,
    staleTime: 1000 * 60 * 5,
  })
};