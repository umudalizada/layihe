import React from 'react';
import Hero from './components/Hero';
import './Home.scss';
import MovieDays from './components/MovieDays';
import TriD from './components/TriD';
import Laser from './components/Laser';
import TwoD from './components/TwoD';

const Home = () => {
  return (
    <>
        <Hero />
      <section id='movieDays'>
        <MovieDays />
      </section>
      <section id='laser'>
        <Laser />
      </section>
      <section id='triD'>
        <TriD />
      </section>
      <section id='twoD'>
        <TwoD />
      </section>
    </>
  );
}

export default Home;
