import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchUpcomingMovies = () => {
    // 💡 엔드포인트만 '/movie/upcoming'으로 변경
    return api.get(`/movie/upcoming`);
};

export const useUpcomingMoviesQuery = () => {
    return useQuery({
        // 💡 queryKey도 'movie-upcoming'으로 고유하게 변경
        queryKey: ['movie-upcoming'],
        queryFn: fetchUpcomingMovies,
        select: (result) => result.data,
    });
};