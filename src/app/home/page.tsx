import React from 'react'
import Hero from '../components/hero'
import FeaturedProducts from '../components/FeaturedProducts'
import FeaturedHero from '../components/FeaturedHero'
import Latest from '../components/latest'
import LatestHero from '../components/latestHero'
import LatexstHero2 from '../components/latexstHero2'
import Heading from '../components/heading'
import Service from '../components/service'
import Hero2 from '../components/hero2'
import TrendingPro from '../components/trendingPro'
import ThreePortion from '../components/threePortion'
import DiscountHero from '../components/discountHero'
import TopCet from '../components/topCet'
import NewsShelter from '../components/newsShelter'
import Logo from '../components/logo'
import Blog from '../components/blog'
const page = () => {
  return (
    <div>
      <Hero/>
      <FeaturedProducts/>
      <FeaturedHero/>
      <Latest/>
      <LatestHero/>
      <LatexstHero2/>
      <Heading/>
      <Service/>
      <Hero2/>
      <TrendingPro/>
      <ThreePortion/>
      <DiscountHero/>
      <TopCet/>
      <NewsShelter/>
      <Logo/>
      <Blog/>
    </div>
  )
}

export default page