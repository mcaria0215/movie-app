import React from 'react'
import { Box, Typography, Divider, Paper } from '@mui/material';

const IMAGE_BASE_URL = 'https://media.themoviedb.org/t/p/w200';

const MovieSynopsisAndCredits = ({movie, director, castData}) => {
  return (
    <div>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold', mb: 1 }}>시놉시스</Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
          {movie.overview || "제공되는 줄거리가 없습니다."}
        </Typography>
      </Box>            
      
      <Divider sx={{ my: 3 }} />
        
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold', mb: 1 }}>출연</Typography>
        <Box sx={{ display: 'flex', overflowX: 'auto', gap: 2, pb: 1 }}>
          {castData && castData.map((person) => (
            <Box key={person.id} sx={{ minWidth: 80, maxWidth: 80, textAlign: 'center' }}>
              <Paper elevation={3} sx={{ aspectRatio: '1/1', borderRadius: '10px', overflow: 'hidden', mb: 0.5 }}>
                {person.profilePath ? (
                  <img 
                    src={`${IMAGE_BASE_URL}${person.profilePath}`} 
                    alt={person.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (                      
                  <Box sx={{ width: '100%', height: '100%', backgroundColor: 'grey.700', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="caption" color="text.secondary">No Pic</Typography>
                  </Box>
                )}
              </Paper>
              <Typography variant="caption" sx={{ display: 'block', lineHeight: 1.3, fontWeight: 'bold', color: 'text.primary' }}>
                  {person.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
        
      <Divider sx={{ my: 3 }} />
        
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold', mb: 1 }}>감독</Typography>
        {director ? (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Paper elevation={3} sx={{ width: 80, height: 80, borderRadius: '10px', overflow: 'hidden' }}>
              {director.profile_path ? (
                <img 
                    src={`${IMAGE_BASE_URL}${director.profile_path}`} 
                    alt={director.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (                    
                <Box sx={{ width: '100%', height: '100%', backgroundColor: 'grey.700', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="caption" color="text.secondary">No Pic</Typography>
                </Box>
              )}
            </Paper>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{director.name}</Typography>
          </Box>
        ) : (
            <Typography variant="body2">감독 정보 없음</Typography>
        )}
      </Box>
    </div>
  )
}

export default MovieSynopsisAndCredits