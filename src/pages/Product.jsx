import React, { useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import { Add, Remove } from '@mui/icons-material'
import { devices } from '../responsive'

const Container = styled.div``

const Wrapper = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;

    @media${devices.laptop} {
        flex-direction: row;
        padding: 50px;
    }
`

const ImageContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px;

    @media${devices.laptop} {
        padding: 0 30px;
    }
`
const Title = styled.h2`
    font-weight: 200;
    font-size: 35px;
`
const Description = styled.p`
    margin: 20px 0;
`
const Price = styled.span`
    font-weight: 600;
    font-size: 25px;
    margin: 15px 0;
`

const FilterContainer = styled.div`

`

const Filter = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1rem;
`

const FilterTitle = styled.div`
    font-size: 18px;
    font-weight: 500;
    width: 100%;
    margin-bottom: 1rem;
`

const FilterColor = styled.div`
    margin-right: 1rem;
    width: 25px;
    height: 25px;
    background: ${props=>props.color};
    border-radius: 50%;
    border: 1px solid ${props=>props.color === 'white' ? 'darkgray' : 'transparent'};
    cursor: pointer;
    position: relative;
    transition: all .5s ease;

    &::after {
        content: '${props=>props.tooltip}';
        font-size: .7rem;
        position: absolute;
        bottom: 110%;
        left: 50%;
        transform: translateY(10px) translateX(-50%);
        background: black;
        color: white;
        padding: .2rem;
        border-radius: 3px;
        opacity: 0;
        transition: all .5s ease;
    }

    &:hover {
        border: 1px solid black;

        &::after {
            transform: translateY(0px) translateX(-50%);
            opacity: 1;
        }
    }
`

const FilterSize = styled.div`
    margin-right: 1rem;
    cursor: pointer;
    transition: all .5s ease;
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    padding: .2rem;

    &:hover {
        background: black;
        color: white;
    }
`

const AddContainer = styled.div`
    display: flex;
    margin-top: 2rem;
`

const AmountContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    flex: 1;
    padding: .5rem;

    ${Remove}, ${Add} {
        cursor: pointer;
    }
`

const Amount = styled.div`
    font-weight: bold;
    padding: 0 1rem;
`

const Button = styled.button`
    margin-left: 25px;
    flex: 2;
    border: none;
    font-size: 1.1rem;
    font-weight: 600;
    background: coral;
    color: white;
    cursor: pointer;
    transition: all .5 ease;
    filter: brightness(1);

    &:hover {
        filter: brightness(1.1);
    }
`

const Product = () => {

    const [quantity, setQuantity] = useState(1)
    
    const handlerAddAmount = () => {
        let amount = quantity

        setQuantity(prevState => prevState >= 0 && amount++)
    }

    const handlerRemoveAmount = () => {
        let amount = quantity
        if(amount > 1) {
            setQuantity(prevState => prevState > 1 && amount--)
        }
    }

    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                <ImageContainer>
                    <Image src="https://www.prada.com/content/dam/pradanux_products/S/SPR/SPR06Y/E09QF05S0/SPR06Y_E09Q_F05S0_C_053_SLF.png/jcr:content/renditions/cq5dam.web.hebebed.1000.1000.square.jpg"></Image>
                </ImageContainer>
                <InfoContainer>
                    <Title>Nome do Produto</Title>
                    <Price>R$ 99,99</Price>
                    <Description>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Description>

                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Cor</FilterTitle>
                            <FilterColor color="white" tooltip="White" />
                            <FilterColor color="beige" tooltip="Beige" />
                            <FilterColor color="black" tooltip="Black" />
                            <FilterColor color="yellow" tooltip="Yellow" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Tamanho</FilterTitle>
                            <FilterSize>P</FilterSize>
                            <FilterSize>M</FilterSize>
                            <FilterSize>G</FilterSize>
                            <FilterSize>GG</FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={() => handlerRemoveAmount()}/>
                            <Amount>{quantity}</Amount>
                            <Add onClick={() => handlerAddAmount()}/>
                        </AmountContainer>
                        <Button>Add To Cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product;