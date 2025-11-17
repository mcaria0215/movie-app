import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useMovieDetailQuery } from '../../hook/useMovieDetailQuery'
import { useMovieCreditQuery } from '../../hook/useMovieCreditQuery'
import { useMovieReviewsQuery } from '../../hook/useMovieReviewsQuery'
import { useMovieTrailerQuery } from '../../hook/useMovieTrailerQuery'
import { useMovieRelatedQuery } from '../../hook/useMovieRelatedQuery'
import { Box, Container, Typography, Grid, Divider, Paper, Chip, Tabs, Tab } from '@mui/material';
import MovieRelatedTab from './component/MovieRelatedTab'
import MovieReviewTab from './component/MovieReviewTab'
import MovieHero from './component/MovieHero'
import MovieSynopsisAndCredits from './component/MovieSynopsisAndCredits'

const MovieDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: movie, isLoading: detailLoading, isError: detailError, error: detailErr } = useMovieDetailQuery(id);
  const { data: credits, isLoading: creditsLoading, isError: creditsError, error: creditsErr } = useMovieCreditQuery(id);
  const { data: reviews, isLoading: reviewsLoading, isError: reviewsError, error: reviewsErr } = useMovieReviewsQuery(id);
  const { data: videos, isLoading: videoLoading, isError: videoError, error: videoErr } = useMovieTrailerQuery(id);
  const { data: relatedMovies, isLoading: relatedLoading, isError: relatedError, error: relatedErr } = useMovieRelatedQuery(id);

  const [activeTab, setActiveTab] = useState(0);
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const goToMovieDetail = (movieId) => {  
    navigate(`/movies/${movieId}`); 
  };
  
  const isLoading = detailLoading || creditsLoading || reviewsLoading || videoLoading || relatedLoading;
  const isError = detailError || creditsError || reviewsError || videoError || relatedError; 
  const error = detailErr || creditsErr || reviewsErr || videoErr || relatedErr;

  if(isLoading){
    return <div className='detail-loading'>영화 상세 정보를 불러오는 중...</div>    
  }
  if(isError){
    console.log(error);
    return <div className='detail-error'>데이터 로드에 실패했습니다. 잠시 후 다시 시도해 주세요.</div>
  }  

  const trailerVideo = videos?.results?.find(video => video.site === 'YouTube' && (video.type === 'Trailer' || video.type === 'Teaser'));
  const trailerKey = trailerVideo?.key;
  const director = credits?.crew.find(crewMember => crewMember.job === 'Director');  
  const castData = credits?.cast.slice(0, 10).map(cast => ({
    id: cast.id,
    name: cast.name,
    profilePath: cast.profile_path,
  }));

  console.log(movie)

  return (
   <Box className="movie-detail-wrapper">                 
    <MovieHero movie={movie} trailerKey={trailerKey} />

    <Container maxWidth='xl' sx={{ py: 6, color: 'text.primary' }}>
      <Grid container spacing={5}>                        
        
        <Grid size={{ xs: 12, md: 8 }}>
          <MovieSynopsisAndCredits movie={movie} director={director} castData={castData}/>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Box sx={{ position: 'sticky', top: 20 }}>        
            {/* tab */}
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={activeTab} onChange={handleTabChange} aria-label="movie detail tabs" textColor="inherit">
                <Tab label={`리뷰 (${reviews?.results.length || 0})`} />
                <Tab label="관련 영화" />
              </Tabs>
            </Box>
            <Box sx={{ p: 0, minHeight: '300px', pt: 2 }}>
              {activeTab === 0 && <MovieReviewTab movie={movie} reviews={reviews} />}
              {activeTab === 1 && <MovieRelatedTab relatedMovies={relatedMovies} goToMovieDetail={goToMovieDetail} />}
            </Box>
          </Box>
        </Grid>

      </Grid>
    </Container>
  </Box>
)}

export default MovieDetailPage