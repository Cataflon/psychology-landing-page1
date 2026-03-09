import React from 'react'
import './Box.scss'

const Box = ({size}) => {
  return (
    <div className='box' style={{width:size}}>Box</div>
  )
}

export default Box;