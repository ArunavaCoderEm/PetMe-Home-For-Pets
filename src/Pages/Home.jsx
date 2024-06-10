import React from 'react'
import Caraousal from '../Components/Caraousal'
import Hero from '../Components/Hero'
import BelowHeroHome from '../Components/BelowHeroHome'
import Category from '../Components/Category'

export default function Home() {
  return (
    <>
      <Hero/>
      <Caraousal/>
      <Category />
      <BelowHeroHome/>
    </>
  )
}
