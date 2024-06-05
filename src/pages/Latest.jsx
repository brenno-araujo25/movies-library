import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard"

import './MovieGrid.css'

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY 

const Latest = () => {
    const [latest, setLatest] = useState([])

    const getLatest = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setLatest(data.results)
    }

    useEffect(() => {
        const latestMoviesUrl = `${moviesURL}/now_playing?${apiKey}`
        getLatest(latestMoviesUrl)
    }, [])

    return (
        <div className="container">
            <h2 className="title">Lançamentos:</h2>

            <div className="movies-container">
                {latest.length === 0 && <p>Carregando...</p>}
                {latest.length > 0 && latest.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    )
}

export default Latest