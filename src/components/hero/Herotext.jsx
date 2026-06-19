import { FlipWords } from '../FlipWords'
import './herotext.css'
import React from 'react'


const Herotext = () => {
    const words=["Create.","Innovate.","Inspire."]
  return (
    <div>
        <div id='welcomeMsg'>
            <h1 className='text-7xl text-white' >
            Welcome to <br>
            </br>Society for <br>
            </br> Data Science.
            <h1>
                We <FlipWords words={words}></FlipWords>
            </h1>
        </h1>
        </div>
    </div>
  )
}

export default Herotext