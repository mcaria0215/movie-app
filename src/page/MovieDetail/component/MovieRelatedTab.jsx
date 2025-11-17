import React, { useState } from 'react'
import { Box, Typography, Paper, Grid, Chip, Button } from '@mui/material';

const MovieRelatedTab = ({ relatedMovies, goToMovieDetail }) => {
  const INITIAL_DISPLAY_COUNT = 6;
  const ITEMS_TO_LOAD = 6;
  const [displayCount, setDisplayCount] = useState(INITIAL_DISPLAY_COUNT);  
  const allRelatedMovies = relatedMovies?.results || [];
  const totalItems = allRelatedMovies.length;
  const visibleMovies = allRelatedMovies.slice(0, displayCount);

  const handleLoadMore = () => {      
    setDisplayCount(prevCount => Math.min(prevCount + ITEMS_TO_LOAD, totalItems));
  };

  if (totalItems === 0) {
    return (
      <Typography variant="body2" color="text.secondary" sx={{ p: 2 }}>
          관련 영화 정보가 없습니다.
      </Typography>
    );
  }

  return (    
   <Paper elevation={0} sx={{ p: 2, border: '1px solid #333', borderRadius: 1, minHeight: '300px' }}>
      <Grid container spacing={2}>        
        {visibleMovies.map(related => ( 
          <Grid item xs={12} sm={6} key={related.id}>
            <Box 
              onClick={() => goToMovieDetail(related.id)} 
              sx={{  
                display: 'flex', 
                gap: 2,                    
                p: 1, 
                borderBottom: '1px dotted #444', 
                cursor: 'pointer', 
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.05)' }
              }}
            >             
              <Box sx={{ minWidth: 120, maxWidth: 120 }}>
                <Paper elevation={3} sx={{ aspectRatio: '16/9', overflow: 'hidden' }}> 
                  {related.backdrop_path ? (
                    <img 
                        src={`https://media.themoviedb.org/t/p/w300${related.backdrop_path}`}
                        alt={related.title} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    <Box sx={{ width: '100%', height: '100%', backgroundColor: 'grey.700', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography variant="caption" color="text.secondary">No Image</Typography>
                    </Box>
                  )}
                </Paper>
              </Box>
                  
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', lineHeight: 1.2, mb: 0.5 }}>
                  {related.title}
                </Typography>
                
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 1 }}>
                  <Chip 
                    label={`⭐ ${related.vote_average ? related.vote_average.toFixed(1) : 'N/A'}`} 
                    size="small" 
                    sx={{ backgroundColor: '#2e7d32', color: 'white' }}
                  />
                  <Chip 
                    label={related.adult ? "🔞 18over" : "🟢 18under"} 
                    color={related.adult ? "error" : "success"} 
                    size="small" 
                  />
                  {related.release_date && (
                    <Chip 
                      label={related.release_date.substring(0, 4)} 
                      size="small" 
                      variant="outlined"
                    />
                  )}
                </Box>
                
                <Typography variant="body2" color="text.secondary" sx={{ 
                  display: '-webkit-box', 
                  overflow: 'hidden', 
                  WebkitLineClamp: 2, 
                  WebkitBoxOrient: 'vertical'
                }}>
                  {related.overview || "설명 요약 없음."}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>     
      
      {displayCount < totalItems && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
          <Button 
            variant="outlined" 
            onClick={handleLoadMore} 
            sx={{ color: 'text.primary', borderColor: 'text.primary' }}
          >
            더보기 ({displayCount} / {totalItems})
          </Button>
        </Box>
      )}
    </Paper>    
  )
}

export default MovieRelatedTab