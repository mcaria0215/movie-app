import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors'; // 예시: MUI의 내장 색상 사용

const theme = createTheme({
  palette: { 
    mode: 'dark',   
    primary: {
      main: '#FF0000', // **넷플릭스 스타일을 위한 진한 빨간색**
      light: '#FF3333', // 필요에 따라 light, dark, contrastText도 정의 가능
      dark: '#CC0000',
    },
    secondary: {
      main: '#FFFFFF', // 흰색을 secondary로 설정
    },
    text: {
      primary: '#FFFFFF',       
    }
  },
  // Typography, components 등 다른 설정도 여기서 추가 가능
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