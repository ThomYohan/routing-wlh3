import React from 'react'
import { Link } from 'react-router-dom'

export default function StoreLanding(props) {
  return (
    <div>
      <p>This is so much fun!  oops!  I'm glad I got some of you to show excitment today!!  That was cool!</p>
      <Link to="/store/products">Buy the coolest products in our awesome store</Link>
    </div>
  )
}