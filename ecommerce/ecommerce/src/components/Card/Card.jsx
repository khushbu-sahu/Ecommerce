import React from 'react'

const Card = ({cartCount}) => {
  return (
    <div>
      <h1>Shopping Cart </h1>
      <p>Total Items: {cartCount}</p>
    </div>
  )
}

export default Card
