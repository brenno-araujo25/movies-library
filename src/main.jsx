import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App.jsx'
import Home from './pages/Home.jsx'
import Movie from './pages/Movie.jsx'
import Search from './pages/Search.jsx'
import Latest from './pages/Latest.jsx'
import Popular from './pages/Popular.jsx'
import Upcoming from './pages/Upcoming.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='movie/:id' element={<Movie />} />
          <Route path='search' element={<Search />} />
          <Route path='latest' element={<Latest />} />
          <Route path='popular' element={<Popular />} />
          <Route path='upcoming' element={<Upcoming />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
