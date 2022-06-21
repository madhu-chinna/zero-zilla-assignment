// import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

const ProductItem = props => {
  const {productData} = props
  const {id, image, title} = productData

  return (
    <Link to={`/product/${id}`} className="item-link">
      <div className="product-item-container">
        <div>
          <img src={image} alt="product" className="product-image" />
        </div>
        <div className="content-container">
          <h6>{title}</h6>
        </div>
      </div>
    </Link>
  )
}

export default ProductItem
