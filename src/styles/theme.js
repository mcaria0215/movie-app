import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors'; // 예시: MUI의 내장 색상 사용

const theme = createTheme({
  palette: { 
    mode: 'dark',   
    primary: {
      main: '#FF0000',
      light: '#FF3333',
      dark: '#CC0000',
    },
    secondary: {
      main: '#FFFFFF',
    },
    text: {
      primary: '#FFFFFF',       
    }
  },
  // Typography, components 등 다른 설정도 여기서 추가 가능
  typography: {
    h3: {      
      fontSize: '3rem',    
      '@media (max-width:900px)': {
        fontSize: '2.5rem',
      },
      '@media (max-width:600px)': {
        fontSize: '1.8rem',
      },
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {        
        root: {
          backgroundColor: '#000000',
        },
      },
    },
    MuiToolbar: {
        styleOverrides: {
            root: {
                backgroundColor: '#000000',
            },
        },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {          
          backgroundColor: '#000000',           
          color: '#FFFFFF', 
        },        
        a: {
            color: 'inherit',
        }
      },
    },
  },
});

export default theme;