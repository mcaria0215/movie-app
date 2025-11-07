import React from 'react'
import { AppBar, Toolbar, Typography, Button, IconButton, TextField, InputAdornment } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search'; // 💡 Search 아이콘 import
import { Box } from '@mui/system';
import { Link, Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <>    
      <AppBar position='static'>
        <Toolbar className='app-bar'>
          <Box>
            <Link to={'/'}><img className='logo' src="https://mblogthumb-phinf.pstatic.net/MjAyNDA1MjRfMTkx/MDAxNzE2NTE4NTk1Njc4.IJooNf7sLpKzVMWQLrWhbxSGTa8LuiYcWOcNp-bs4nMg.Yw7sL8JT81d574mscesLq_G2keAilWjZusWU1YkQ-Zgg.PNG/Netflix_Logo_RGB.png?type=w800" alt="" /></Link>
          </Box>          

          <Box sx={{ display: { xs: 'none', md: 'block' }, ml: 3 }}>
            <Button component={Link} to="/" color="inherit">
              Home
            </Button>
            <Button component={Link} to="/movies" color="inherit">
              Movies
            </Button>
          </Box>          
          
          <Box sx={{ flexGrow: 1 }} />          
          
          <TextField
            variant="outlined" 
            size="small"
            placeholder="Search..."
            sx={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              borderRadius: 1,
              '& .MuiOutlinedInput-root': {
                color: 'white',
                '& fieldset': { borderColor: 'transparent' },
                '&:hover fieldset': { borderColor: 'transparent' },
              }
            }}
            InputProps={{
              startAdornment: ( 
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: 'white' }} />
                </InputAdornment>
              ),
            }}
          />

          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ ml: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  )
}

export default AppLayout