import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'
import { listProducts } from '../actions/productActions'
import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'



const HomeScreen = () => {
  const dispatch = useDispatch()

  const params = useParams()
  const pageNumber = params.pageNumber || 1
  const keyword = params.keyword

  const productList = useSelector(state => state.productList)
  const { loading, error, products, page, pages } = productList

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
  },[dispatch, keyword, pageNumber])


  return (
    <>
    <Meta />
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-light'>
          Go Back
        </Link>
      )}
        <h1>Latest Products</h1>
        {loading ? 
          <Loader />
          : error ? 
          <Message variant='danger'>{error}</Message>
          : 
          <>
          <Row>
              {products.map((product) => (
                  <Col className='align-items-stretch d-flex' key={product._id} sm={12} md={6} lg={4} xl={3}>
                      <Product product={product}/>
                  </Col>
              ))}
          </Row>
          {console.log(page)}
          <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''} />
          </>
          }
        
    </>
  )
}

export default HomeScreen