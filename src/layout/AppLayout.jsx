import React, { useState } from 'react'
import { AppBar, Toolbar, Button, IconButton, TextField, InputAdornment } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/system';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const AppLayout = () => {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const searchKeyword = (e)=>{
    if(e.type==='submit'){
      e.preventDefault();
    }
    if(keyword.trim()){
      navigate(`/movies?q=${keyword.trim()}`);     
    }    
  }

  const handleOnKeyPress = (e) => {
    if (e.key === 'Enter') {
      searchKeyword(e);
    }
  }


  return (
    <>    
      <AppBar position='relative'sx={{zIndex:1000}}>
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
          
          <Box component="form" onSubmit={searchKeyword} sx={{ display: 'flex', alignItems: 'center' }}>
            <TextField
              variant="outlined" 
              size="small"
              placeholder="Search..."
              value={keyword}
              onChange={(e)=>setKeyword(e.target.value)}
              onKeyPress={handleOnKeyPress}
              InputProps={{
                startAdornment: ( 
                  <InputAdornment position="start">
                    <IconButton onClick={searchKeyword} size="small" disableRipple>
                      <SearchIcon sx={{ color: 'white' }} />
                    </IconButton>
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
          </Box>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  )
}

export default AppLayout