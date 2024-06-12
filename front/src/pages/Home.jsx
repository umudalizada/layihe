import React from 'react'
import Hero from './components/Hero'
import "./Home.scss"
import MovieDays from './components/MovieDays'
import Hall from './components/Hall'
import TriD from './components/TriD'
import Laser from './components/Laser'
import TwoD from './components/TwoD'
import BarHall from './components/BarHall'
import About from './components/About'
import Contact from './components/Contact'

const Home = () => {
  return (
    <>

<Hero/>
<MovieDays/>
<Laser/>
<TriD/>
<TwoD/>
<About/>
<Contact/>
<Hall/>
<BarHall/>
    </>
  )
}

export default Home
