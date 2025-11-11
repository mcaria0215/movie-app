import React, { useState } from 'react'
import { useSearchMovieQuery } from '../../hook/useSearchMovie'
import { useSearchParams } from 'react-router-dom'
import MovieCard from '../../common/MovieCard/MovieCard';
import { Container, Grid, Typography, Pagination, Stack, Box } from '@mui/material';

const MoviePage = () => {
  const [query, setQuery] = useSearchParams();
  const keyword = query.get('q');    
  const [page, setPage] = useState(1);
  const {data: movieData, isLoading, isError, error} = useSearchMovieQuery({keyword, page});

  if (isLoading) {
    return <div>로딩 중... </div>
  }
  if (isError) {   
    console.error(error); 
    return <div>에러 발생: {error.message}</div>
  }

  const movieList = movieData?.data || [];
  const totalPages = movieData?.totalPages || 1;

  const handlePageChange = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (    
    <Container maxWidth={false} sx={{ p: {xs:2, md:4 }, maxWidth: '1900px', mx: 'auto' }}>
      {keyword && <h2>"{keyword}" 검색 결과</h2>}

      <Grid spacing={3}>  
        {movieList.length > 0 ? (
          <>            
            <Grid container spacing={3} justifyContent="center"> 
              {movieList.map(movie => (
                <Grid item key={movie.id} xs={12} md={4} lg={3}>
                  <MovieCard movie={movie} />
                </Grid>
              ))}
            </Grid>

            {totalPages > 1 && (
              <Stack spacing={2} sx={{ mt: 4, alignItems: 'center' }}>
                <Pagination                       
                  count={totalPages > 99 ? 99 : totalPages} 
                  page={page}
                  onChange={handlePageChange}
                  color="primary"
                  size="large"
                  sx={{                      
                    '& .MuiPaginationItem-root': {
                      fontSize: { xs: '0.75rem', md: '1rem' },
                      minWidth: { xs: 30, md: 40 },          
                      height: { xs: 30, md: 40 },            
                    }
                  }}
                />
              </Stack>
            )}
          </>
        ) : (
          <Typography variant="body1" sx={{ mt: 2 }}>
              {keyword ? `"${keyword}"에 대한 검색 결과가 없습니다.` : '인기 영화를 불러왔습니다.'}
          </Typography>
        )}      
      </Grid>      
    </Container>
  )
}

export default MoviePage