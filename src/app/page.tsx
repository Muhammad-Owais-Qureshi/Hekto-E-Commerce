import React from 'react'
import Hero from './components/hero'
import FeaturedProducts from './components/FeaturedProducts'
import FeaturedHero from './components/FeaturedHero'
import Latest from './components/latest'
import LatestHero from './components/latestHero'
import LatexstHero2 from './components/latexstHero2'
const page = () => {
  return (
    <div>
      <Hero/>
      <FeaturedProducts/>
      <FeaturedHero/>
      <Latest/>
      <LatestHero/>
      <LatexstHero2/>

    </div>
  )
}

export default page