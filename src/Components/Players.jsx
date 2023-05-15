import React from 'react'
import './Game.css';
import { useState } from 'react';
import $ from 'jquery'

export default function Players(props) {
  const [immg,setimg] = useState('/Images/Player-1.png')
  const [pos,setpos] = useState(0)
  return(
    <>
    <div className='players'></div>
    </>
  )
}