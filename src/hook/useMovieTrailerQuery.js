import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieVideos = (movieId)=>{
  return api.get(`/movie/${movieId}/videos`);
}

export const useMovieTrailerQuery = (id)=>{
  return useQuery({
    queryKey: ['movie-videos', id],
    queryFn: ()=>fetchMovieVideos(id),
    select: (result)=>result.data,
    staleTime: 1000 * 60 * 5,
})
}