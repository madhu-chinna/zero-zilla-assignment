import {Component} from 'react'
// import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import ProductList from '../ProductList'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class Home extends Component {
  state = {
    categoriesList: [],
    dataIsLoaded: false,
    category: 'jewelery',
    isLoading: true,
  }

  componentDidMount() {
    console.log('component did mount')
    this.getCategoriesData()
  }

  getCategoriesData = async () => {
    console.log('getting data')
    const response = await fetch('https://fakestoreapi.com/products/categories')
    const statusCode = await response.statusCode
    console.log(statusCode)
    const data = await response.json()
    console.log('data fetched')
    this.setState({categoriesList: data, dataIsLoaded: true, isLoading: false})
  }

  //   updateCategory = event => {
  //     console.log('category update')
  //     console.log(event)
  //     // this.setState({category: event.value})
  //   }

  updateCategory = category => {
    this.setState({category: 'electronics'})
  }

  render() {
    const {categoriesList, dataIsLoaded, category, isLoading} = this.state
    console.log(category)
    return (
      <>
        <Header />
        <div>
          <h1 className="heading">High Range Of Products</h1>
          {isLoading ? (
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          ) : (
            <ul className="list-container">
              {dataIsLoaded && <li>{categoriesList[0]}</li>}
              {dataIsLoaded && <li>{categoriesList[1]}</li>}
              {dataIsLoaded && <li>{categoriesList[2]}</li>}
              {dataIsLoaded && <li>{categoriesList[3]}</li>}
            </ul>
          )}

          <div className="products-list-container">
            {dataIsLoaded && <ProductList productType={category} />}
          </div>
        </div>
      </>
    )
  }
}

export default Home
