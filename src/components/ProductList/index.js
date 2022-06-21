import {Component} from 'react'
import Loader from 'react-loader-spinner'
import ProductItem from '../ProductItem'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class ProductList extends Component {
  state = {productList: [], isLoading: true}

  componentDidMount() {
    this.getProductList()
  }

  getProductList = async () => {
    const {productType} = this.props
    console.log(productType)
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${productType}`,
    )
    const data = await response.json()
    console.log(data)
    this.setState({productList: data, isLoading: false})
  }

  render() {
    const {productList, isLoading} = this.state
    return (
      <>
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          productList.map(item => (
            <ProductItem productData={item} key={item.id} />
          ))
        )}
      </>
    )
  }
}

export default ProductList
