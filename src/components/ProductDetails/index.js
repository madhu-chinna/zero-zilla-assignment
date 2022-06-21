import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class ProductDetails extends Component {
  state = {productData: {}, isLoading: true}

  componentDidMount() {
    this.getProductData()
  }

  getProductData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await response.json()
    console.log(data)
    this.setState({productData: data, isLoading: false})
  }

  renderProductItemDetails = () => {
    const {productData} = this.state
    const {title, description, image, price, rating} = productData

    return (
      <div className="product-info">
        <div className="pic-container">
          <img src={image} alt="productPic" className="productPic" />
        </div>
        <div className="content">
          <h6>{title}</h6>
          <p>{description}</p>
          {/* <p>
            <span>{price}</span>&nbsp;<span>{rating.rate}</span>
          </p> */}
          <button type="button">Add To Cart</button>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    console.log(isLoading)
    return (
      <>
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          this.renderProductItemDetails()
        )}
      </>
    )
  }
}

export default ProductDetails
