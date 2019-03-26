import React from 'react'
import { Link } from 'react-router-dom'

import products from '../products'

export default function Products(props) {
  let { category } = props.match.params
  let items;
  if (category) {
    items = products.filter(product => product.category === category)
  } else {
    items = products
  }
  let categories = products.reduce((acc, product) => {
    let { category } = product
    if (!acc.includes(category)) {
      acc.push(category)
    }
    return acc
  }, [])

  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'space-evenly', borderBottom: '1px solid black', padding: 40}}>
        <Link to="/store/products">all</Link>
        {categories.map(category => {
          return <Link key={category} to={`/store/products/${category}`}>{category}</Link>
        })}
      </div>
      {items.map(item => {
        return (
          <div key={item.id}>
            <p>name: {item.name}</p>
            <p>price: {item.price}</p>
            <img src={item.imageUrl} alt={item.name} height={200}/>
          </div>
        )
      })}
    </div>
  )
}