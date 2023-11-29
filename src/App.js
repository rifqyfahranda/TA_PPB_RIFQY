import React from 'react'
import {
  NavLink,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom'

// Pages
import DetailPage from './pages/DetailPage'
import GenreList from './pages/GenreList'
import LandingPage from './pages/LandingPage'
import NetflixDetail from './pages/NetflixDetail'
import ProfilePage from './pages/ProfilePage'
import Adventure from './pages/adventure'
import Fantasy from './pages/fantasy'

// Components
import MovieIcon from '@mui/icons-material/Movie'
import MovieFilterIcon from '@mui/icons-material/MovieFilter'
import PortraitIcon from '@mui/icons-material/Portrait'
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy'
import './App.css'
import NetflixSearch from './pages/NetflixSearch'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/Adventure" element={<Adventure />} />
          <Route path="/genre" element={<GenreList />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/netflixsearch" element={<NetflixSearch />} />
          <Route path="/netflixdetail/:id" element={<NetflixDetail />} />
          <Route path="/Fantasy" element={<Fantasy />} />
        </Routes>
        <footer>
          <NavLink to="/" className="iconWrapper">
            <MovieFilterIcon className="icon" /> Movies
          </NavLink>
          <NavLink to="/netflixsearch" className="iconWrapper">
            <MovieIcon className="icon" /> Netflix
          </NavLink>
          <NavLink to="/genre" className="iconWrapper">
            <TheaterComedyIcon className="icon" /> Genres
          </NavLink>
          <NavLink to="/profile" className="iconWrapper">
            <PortraitIcon className="icon" /> Profile
          </NavLink>
        </footer>
      </div>
    </Router>
  )
}

export default App
