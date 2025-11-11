import { Routes, Route,BrowserRouter } from 'react-router-dom'
import './App.css';
import {descriptionList} from './data/data.js'
import { Home } from './pages/home/home';
import { ListPage } from './pages/list-page/listPage';
import { AnimeDetails } from './pages/anime-page/anime-details';
import {Ep} from './components/ep/episode-details'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path='/anime-details/:id'
            element={<AnimeDetails />}
          />
          <Route 
          path='/anime-details/:id/ep/:epId'
          element={<Ep descriptionList={descriptionList}/>} />
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
