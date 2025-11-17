import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchMovieDetail = (movieId)=>{
  return api.get(`/movie/${movieId}?language=ko`);
}

export const useMovieDetailQuery = (id)=>{
  return useQuery({
    queryKey: ['movie-detail', id],
    queryFn: ()=>fetchMovieDetail(id),
    select: (result)=>result.data,
    staleTime: 1000 * 60 * 5,
  })
};