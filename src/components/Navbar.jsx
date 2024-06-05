import { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

import { BiSearchAlt2 } from 'react-icons/bi'
import { RiMovie2Fill } from "react-icons/ri";

import './Navbar.css'

const Navbar = () => {
  const [search, setSearch] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!search) return

    navigate(`/search?q=${search}`)
    setSearch('')
  }

  return (
    <nav id='navbar'>
      <div className="buttons">
        <h2>
          <Link to='/'><RiMovie2Fill /> Movies Library</Link>
        </h2>

        <Link to='latest' className='button-link'>
          Lançamentos
        </Link>

        <Link to='popular' className="button-link">
          Populares
        </Link>

        <Link to='upcoming' className="button-link">
          Em Breve
        </Link>

      </div>

        <form onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='Busque um filme' 
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <button type='submit'>
                <BiSearchAlt2 />
            </button>
        </form>
    </nav>
  )
}

export default Navbar