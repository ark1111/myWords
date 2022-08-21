
import React from 'react'
import Banner from './layouts/Banner';
import CardOfDay from './layouts/CardOfDay';
import Way from './layouts/Way';

const Home = () => {
  return (
    <div className='w-full px-20'>
      <Banner/>
      <Way/>
      <CardOfDay/>
    </div>
  )
}

export default Home;