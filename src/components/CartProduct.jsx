import React, { useState } from 'react'
import styled from 'styled-components'
import { Add, Remove } from '@mui/icons-material'
import { devices } from '../responsive'

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    background: white;
    border: 1px solid lightgray;
    margin-bottom: 1rem;
    border-radius: 5px;

    flex-direction: column;

    @media${devices.laptop} {
        flex-direction: row;
    }
`
const ProductDetail = styled.div`
    flex: 2;
    display: flex;

    flex-direction: column;

    @media${devices.laptop} {
        flex-direction: row;
    }
`

const Image = styled.img`
    width: 250px;
    margin: 0 auto;

    @media${devices.laptop} {
        width: 200px;
        margin: 0;
        margin-left: 1rem;
    }
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor = styled.div`
    display: flex;
    align-items: center;
`

const Color = styled.div`
    width: 25px;
    height: 25px;
    background: ${props=>props.color};
    border-radius: 50%;
    border: 1px solid ${props=>props.color === '#ffffff' ? 'darkgray' : 'transparent'};
    cursor: pointer;
    position: relative;
    transition: all .5s ease;
    margin-left: 10px;
`

const ProductSize = styled.span``

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid black;
    padding: .5rem;
    font-weight: bold;

    svg {
        cursor: pointer;
    }
`
const ProductAmount = styled.div`
    font-style: 24px;
    margin: 5px;
`
const ProductPrice = styled.span`
    font-size: 30px;
    margin: 1rem 0;
`

const CartProduct = ({ id, name, color, size, price, image }) => {
    const [quantity, setQuantity] = useState(1)
    
    const handlerAddAmount = () => {
        setQuantity(prevState => prevState >= 0 && quantity+1)
    }

    const handlerRemoveAmount = () => {
        let amount = quantity
        if(amount > 1) {
            setQuantity(prevState => prevState > 1 && quantity-1)
        }
    }

    return (
        <Product>
            <ProductDetail>
                <Image src={image}></Image>
                <Details>
                    <ProductName><b>Produto: </b>{name}</ProductName>
                    <ProductId><b>ID: </b>{id}</ProductId>
                    <ProductColor><b>Cor: </b><Color color={color}></Color></ProductColor>
                    <ProductSize><b>Tamanho: </b>{size}</ProductSize>
                </Details>
            </ProductDetail>
            <PriceDetail>
                <ProductAmountContainer>
                    <Remove onClick={() => handlerRemoveAmount()}/>
                    <ProductAmount>{quantity}</ProductAmount>
                    <Add onClick={() => handlerAddAmount()}/>
                </ProductAmountContainer>
                <ProductPrice>R$ {price}</ProductPrice>
            </PriceDetail>
        </Product>
    )
}

export default CartProduct