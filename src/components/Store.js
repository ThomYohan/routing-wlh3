import React from 'react'
// import { Link, Route } from 'react-router-dom'

// import StoreLanding from './StoreLanding'
// import Products from './Products'

export default function Store(props) {
  return (
    <div>
      <h1>Coolest store ever!!!</h1>
      {props.children}
    </div>
  )
}