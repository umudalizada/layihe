import React from 'react'
import Hero from './components/Hero'
import "./Home.scss"
import MovieDays from './components/MovieDays'
import TriD from './components/TriD'
import Laser from './components/Laser'
import TwoD from './components/TwoD'

const Home = () => {
  return (
    <>
      <Hero />
      <MovieDays />
      <Laser />
      <TriD />
      <TwoD />
    </>
  )
}

export default Home
