import React from 'react'
import videoBg from '../assets/swiftshops_bg.mp4'
import sparkle from '../assets/sparkle.png'
import award from '../assets/feather1.png'
import Navbar from './Navbar'


const Main = () => {
  return (
    <div className='main'>
  <video src={videoBg} autoPlay loop muted className='video-bg' />
  <Navbar />
  <div className='content'>
    
    <div className='inside text-center px-5 md:px-64'>
    <div className='flex -mb-5 justify-center'>
        <img src={award} className='award' />
    </div>
    <h1 className='text-white text-3xl md:text-7xl font-bold mb-5'>Hate Waiting in Queues?</h1>
    <p className='text-gray-300 text-lg md:text-2xl'>Swift Shops is sculpting the new era of hassle free shopping--where waiting is a thing of past.
    </p>
    <button type="button" class="text-white bg-pink-500 font-semibold rounded-full text-lg md:text-2xl px-5  text-center mt-5"><img src={sparkle} className='sparkleimg' />Join the Waitlist</button>
    </div>
  </div>
  

</div>

  )
}

export default Main
