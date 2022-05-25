import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'

import { cartProducts as products } from '../data'
import CartProduct from '../components/CartProduct'

import { devices } from '../responsive'

const Container = styled.div`
    background: #fafafa;
`

const Wrapper = styled.div`
    padding: 20px;
`

const Title = styled.h2`
    font-weight: 300;
    text-align: center;
    margin-bottom: 1rem;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;

    border: 1px solid black;
    background: ${({ filled }) => filled ? 'black' : 'white'};
    color: ${({ filled }) => filled && 'white'};
    cursor: pointer;

    transition: all .5s ease;

    &:hover {
        background: ${({ filled }) => filled ? 'white' : 'black'};
        color: ${({ filled }) => filled ? 'black' : 'white'};
    }
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;

    flex-direction: column;

    @media${devices.laptop} {
        flex-direction: row;
    }
`
const Info = styled.div`
    flex: 3;
`
const Summary = styled.div`
    flex: 1;
    border: 1px solid lightgray;
    padding: 15px;
    height: 35vh;
    background: white;

    display: flex;
    flex-wrap: wrap;
    border-radius: 5px;

    @media${devices.laptop} {
        margin-left: 1rem;
    }
`

const SummaryTitle = styled.h3`
    font-weight: 300;
    font-size: 30px;
`
const SummaryItem = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    font-weight: ${({ type }) => type === 'total' && 600};
    font-size: ${({ type }) => type === 'total' && '24px'};
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span`
    margin-left: 10px;
`

const Button = styled.button`
    align-self: flex-end;
    border: none;
    margin-top: 1rem;
    font-size: 1.1rem;
    padding: 1rem 1.5rem;
    font-weight: 600;
    background: coral;
    color: white;
    cursor: pointer;
    transition: all .5 ease;
    filter: brightness(1);
`

const Cart = () => {
    const prices = products.map(product => (product.price)), subtotal = prices.reduce((ac, cur) => (ac + cur));
    const shipping = 25;

    return (
        <Container>
            <Announcement/>
            <Navbar/>

            <Wrapper>
                <Title>Sua Sacola</Title>
                <Top>
                    <TopButton>Continue Comprando</TopButton>
                    <TopButton filled={true}>Finalizar Compra</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        {products.map(product => (
                            <CartProduct key={product.id} id={product.id} name={product.name} color={product.color} size={product.size} price={product.price} image={product.image}/>
                        ))}

                    </Info>
                    <Summary>
                        <SummaryTitle>Resumo do Pedido:</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal:</SummaryItemText>
                            <SummaryItemPrice>R$ {subtotal}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Valor do Frete:</SummaryItemText>
                            <SummaryItemPrice>R$ {shipping}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total:</SummaryItemText>
                            <SummaryItemPrice>R$ {subtotal + shipping}</SummaryItemPrice>
                        </SummaryItem>

                        <Button>Ir para Checkout</Button>
                    </Summary>

                </Bottom>
            </Wrapper>

            <Footer/>
        </Container>
    )
}

export default Cart