import { Routes, Route,BrowserRouter } from 'react-router-dom'
import './App.css';
import { Home } from './pages/home/home';
import { ListPage } from './pages/list-page/listPage';
import { AnimeDetails } from './pages/anime-page/anime-details';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path='/anime-details'
            element={<AnimeDetails />}
          />
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/list-page'
            element={<ListPage />}
          />

          <Route
          />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
