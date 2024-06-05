import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard"

import './MovieGrid.css'

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Popular = () => {
    const [popular, setPopular] = useState([])

    const getPopular = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setPopular(data.results)
    }

    useEffect(() => {
        const popularMoviesUrl = `${moviesURL}/popular?${apiKey}`
        getPopular(popularMoviesUrl)
    }, [])

    return (
        <div className="container">
            <h2 className="title">Populares:</h2>
            <div className="movies-container">
                {popular.length === 0 && <p>Carregando...</p>}
                {popular.length > 0 && popular.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    )
}

export default Popular