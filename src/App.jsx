import './App.css'
import { Routes, Route } from 'react-router-dom';
import AppLayout from './layout/AppLayout'
import HomePage from './page/Homepage/HomePage';
import MoviePage from './page/Movies/MoviePage';
import MoviePageDetail from './page/MovieDetail/MovieDetailPage';
import NotFoundPage from './page/NotFound/NotFoundPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />} >
          <Route index element={<HomePage />} />
          <Route path="movies">
            <Route index element={<MoviePage />} />
            <Route path=":id" element={<MoviePageDetail />} />
          </Route>
        </Route>    

        <Route path="*" element={<NotFoundPage />} />
      </Routes>      
    </>
  )
}

export default App
