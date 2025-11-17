import React from 'react'
import { Box, Typography, Paper } from '@mui/material';

const MovieReviewTab = ({movie, reviews}) => {
  if (!reviews || reviews.results.length === 0) {
    return (
      <Typography variant="body2" color="text.secondary" sx={{ p: 2 }}>
          등록된 리뷰가 없습니다.
      </Typography>
    );
  }

  return (
    <Paper elevation={0} sx={{ p: 2, border: '1px solid #333', borderRadius: 1, minHeight: '300px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, pb: 1, borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>          
          {[...Array(5)].map((_, i) => (
            <Typography key={i} component="span" sx={{ fontSize: '1.5rem', color: (i < (movie.vote_average / 2).toFixed(0) ? 'gold' : 'grey.700') }}>
              ★
            </Typography>
          ))}          
          <Typography variant="body1" color="text.secondary" sx={{ ml: 1 }}>
            {movie.vote_count ? `${movie.vote_count.toLocaleString()}개 평점` : '평점 없음'}
          </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>            
          <Typography variant="h4" component="span" sx={{ fontWeight: 'bold' }}>
            {movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}
          </Typography>
          
          <Box sx={{ border: '1px solid #555', borderRadius: 1, p: 0.5, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Typography variant="caption">베스트순</Typography>
            <Typography component="span">▼</Typography>
          </Box>
        </Box>
      </Box>

      <Box>
        {reviews.results.slice(0, 5).map((review) => ( 
          <Box key={review.id} sx={{ mb: 2, pb: 1, borderBottom: '1px dotted rgba(255, 255, 255, 0.1)' }}>            
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{review.author}</Typography>
                <Typography variant="caption" color="text.secondary" sx={{ ml: 1 }}>
                    {review.created_at ? new Date(review.created_at).toLocaleDateString('ko-KR') : '날짜 미상'}
                </Typography>
                <Typography component="span" sx={{ fontSize: '1rem', color: 'gold', ml: 1 }}>
                    ★★★★★
                </Typography>
            </Box>            
            
            <Typography variant="caption" sx={{ 
              display: '-webkit-box', 
              overflow: 'hidden', 
              WebkitLineClamp: 3, 
              WebkitBoxOrient: 'vertical',
              lineHeight: 1.4
            }}>
              {review.content}
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, cursor: 'pointer', color: 'text.secondary' }}>
                <Typography component="span">👍</Typography>
                <Typography variant="caption">
                    {review.id.length % 5 === 0 ? '63' : (review.id.length % 5 === 1 ? '37' : (review.id.length % 5 === 2 ? '17' : '12'))} 
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, cursor: 'pointer', color: 'text.secondary' }}>
                <Typography component="span">👎</Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Paper>
  )
}

export default MovieReviewTab