import {Route, Routes} from 'react-router-dom';
import Header from './components/Header/Header';

import MoviesPage from './pages/MoviesPage/MoviesPage';
import GenresPage from './pages/GenresPage/GenresPage';
import GenresMoviesPage from './pages/GenresMoviesPage/GenresMoviesPage';
import DetailsMoviesPage from './pages/DetailsMoviesPage/DetailsMoviesPage';
import './App.css';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path={'/'} element={<Header/>}>
            <Route path={'movies'} element={<MoviesPage/>}/>
            <Route path={'movies/:id/:original_title'} element={<DetailsMoviesPage/>}/>
            <Route path={'genres'} element={<GenresPage/>}/>
            <Route path={'genres/movies'} element={<GenresMoviesPage/>}/>
          </Route>
        </Routes>
      </div>
  );
}

export default App;