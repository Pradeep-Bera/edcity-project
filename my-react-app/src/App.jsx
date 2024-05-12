// import React from 'react'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Programs from './Components/Programs/Programs';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className='container'>
        <Programs />
      </div>
    </>

  )
}

export default App;
