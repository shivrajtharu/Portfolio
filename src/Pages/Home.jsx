import React from 'react'
import Intro from '../components/Intro'
import Skill from '../components/Skill'
import Portfolio from '../components/Portfolio'

const Home = () => {
  return (
    <div className="space-y-20 sm:space-y-24 md:space-y-28 lg:space-y-32">
      <Intro />
      <Skill />
      <Portfolio />
    </div>
  )
}

export default Home
