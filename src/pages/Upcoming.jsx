import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard"

import './MovieGrid.css'

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Upcoming = () => {
    const [upComing, setUpComing] = useState([])

    const getUpComing = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setUpComing(data.results)
    }

    useEffect(() => {
        const upComingMoviesURL = `${moviesURL}/upcoming?${apiKey}`
        getUpComing(upComingMoviesURL)
    }, [])

    return (
        <div className="container">
            <h2 className="title">
                Próximos lançamentos:
            </h2>

            <div className="movies-container">
                {upComing.length === 0 && <p>Carregando...</p>}
                {upComing.length > 0 && upComing.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    )
}

export default Upcoming