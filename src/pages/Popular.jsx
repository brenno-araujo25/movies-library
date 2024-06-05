import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard"

import './MovieGrid.css'

const popularUrl = import.meta.env.VITE_POPULAR
const apiKey = import.meta.env.VITE_API_KEY

const Popular = () => {
    const [popular, setPopular] = useState([])

    const getPopular = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setPopular(data.results)
    }

    useEffect(() => {
        const popularMoviesUrl = `${popularUrl}?${apiKey}`
        getPopular(popularMoviesUrl)
    }, [])

    return (
        <div className="container">
            <h2 className="title">Popular:</h2>
            <div className="movies-container">
                {popular.length === 0 && <p>Carregando...</p>}
                {popular.length > 0 && popular.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    )
}

export default Popular