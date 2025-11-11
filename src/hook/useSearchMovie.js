import { useQuery } from "@tanstack/react-query"
import api from '../utils/api'

const fetchSearchMovie = ({ queryKey }) => {  
 const [, keyword, page] = queryKey;
  const pageParam = page ? `&page=${page}` : '';

 return keyword 
    ? api.get(`/search/movie?query=${keyword}${pageParam}`) 
    : api.get(`/movie/popular?${pageParam}`);
};

export const useSearchMovieQuery = ({ keyword, page }) => {
  return useQuery({
    queryKey: ['movie-search', keyword, page], 
    queryFn: fetchSearchMovie,
    select: (result) => ({      
      data: result.data.results,       
      totalPages: result.data.total_pages,      
      currentPage: result.data.page,
    }),
  });
};