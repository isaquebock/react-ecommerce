import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Announcement from '../components/Announcement'
import FilterContainer from '../components/FilterContainer'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'

const Container = styled.div``

const Title = styled.h2`
    margin: 2rem 0;
    font-size: 35px;
    text-align: center;
`

const ProductList = () => {
  return (
    <Container>
        <Announcement />
        <Navbar />
        <Title>Produtos</Title>
        <FilterContainer />
        <Products />
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default ProductList;