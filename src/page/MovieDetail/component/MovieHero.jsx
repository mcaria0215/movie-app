import React from 'react'
import { Box, Container, Typography, Grid, Paper, Chip } from '@mui/material';

const MovieHero = ({movie, trailerKey }) => {
  return (
     <Box 
      sx={{
        backgroundImage: trailerKey ? 'linear-gradient(to top, #111111 20%, rgba(0,0,0,0.5) 100%)' : `linear-gradient(to top, #111111 20%, rgba(0,0,0,0.5) 100%), url(https://media.themoviedb.org/t/p/original${movie.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        height: '600px',
        display: 'flex',
        alignItems: 'flex-end',
        color: 'white', 
        paddingBottom: 4, 
      }}
    >
      {trailerKey && (        
        <Box 
          sx={{
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%',
            overflow: 'hidden',            
            zIndex: 0,            
            '& iframe': {
              maxWidth: 'xl',
              width: '100%', 
              height: '100%',
              minHeight: '100%',
              minWidth: '100%',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',              
            }
          }}
        >
          <iframe 
            src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerKey}&modestbranding=1&rel=0&showinfo=0&disablekb=1`} 
            title="Movie Trailer Background" 
            allow="autoplay; encrypted-media" 
            frameBorder="0"
            allowFullScreen
          />
        </Box>        
      )}
      <Container maxWidth='xl'>            
        <Grid container spacing={4} alignItems="flex-end" sx={{position:'relative', zIndex:1000}}>
          <Grid size={{ xs: 12, sm: 4, md: 3 }}>
            <Paper elevation={10} sx={{ 
            width: '100%', 
            aspectRatio: '2/3', 
            overflow: 'hidden',                        
            transform: 'translateY(20px)', 
            zIndex: 1 
            }}>
              <img 
              src={`https://media.themoviedb.org/t/p/w500${movie.poster_path}`} 
              alt={movie.title} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Paper>
          </Grid>
            
          <Grid size={{ xs: 12, sm: 8, md: 9 }} sx={{ pb: 2 }}> 
              <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 1 }}>
                  {movie.title}
              </Typography>
              <Typography variant="h6" component="p" sx={{ fontWeight: 'light', mb: 2 }}>
                  {movie.tagline}
              </Typography>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  {movie.genres && movie.genres.map((genre) => (
                    <Chip 
                      key={genre.id} 
                      label={genre.name} 
                      color="primary" 
                      variant="outlined"
                      size="small"
                      sx={{ color: 'white', borderColor: 'rgba(255, 255, 255, 0.5)' }}
                    />
                  ))}
                </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <Chip label={`⭐ ${movie.vote_average.toFixed(1)}`} color="secondary" size="medium" />
                <Chip label={`${movie.release_date.substring(0, 4)}년 개봉`} color="secondary" size="medium" />
                <Chip label={`${movie.runtime}분`} color="secondary" size="medium" />
                <Chip label={movie.adult ? "🔞" : "🟢"} color={movie.adult ? "error" : "success"} size="medium" />
              </Box>
          </Grid>
        </Grid>          
      </Container>
    </Box>
  )
}

export default MovieHero