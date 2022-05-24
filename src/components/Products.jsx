import React from 'react'
import styled from 'styled-components'

import { products } from '../data'

import Product from './Product'

const Container = styled.div`
    gap: 20px;
    display: flex;
    flex-wrap: wrap;
    max-width: 1300px;
    margin: 1rem auto;
`

const Products = () => {
  return (
    <Container>
        {products.map(product => (
            <Product imageSrc={product.image} name={product.name} price={product.price} key={product.id}/>
        ))}
    </Container>
  )
}

export default Products