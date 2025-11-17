import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchMovieCredit = (movieId)=>{
  return api.get(`/movie/${movieId}/credits?language=ko`);
}

export const useMovieCreditQuery = (id)=>{
  return useQuery({
    queryKey: ['movie-credit', id],
    queryFn: ()=>fetchMovieCredit(id),
    select: (result)=>result.data,
    staleTime: 1000 * 60 * 5,
  })
};