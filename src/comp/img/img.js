import React from 'react'
import img from './IMAGE (1).svg'
import img1 from './IMAGE (3).svg'
import img2 from './IMAGE (5).svg'
const Img = () => {
  return (
    <div className='picture_cart'>
     <img className='picture_1' src={img} alt=''></img>
      <img className='picture_2' src= {img1} alt=''></img>
      <div>
      <img className='picture_3' src= {img2} alt=''></img>
      </div>     
    </div>


  )
}

export default Img
