import React from 'react'
import styled from "styled-components"

import { ArrowBack, ArrowForward } from '@mui/icons-material/';

import images from '../images';


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: coral;
    position: relative;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background: #eeeaea;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: ${props => props.direction  === 'left' && '10px'};
    right: ${props => props.direction  === 'right' && '10px'};
    cursor: pointer;
    opacity: .5;
`

const Wrapper = styled.div`
    height: 100%;
`

const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
`
const ImageContainer = styled.div`
    flex: 1;
    height: 100%;
`

const Image = styled.img`
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
    position: absolute;
    top: 50%;
    left: 5%;
`

const Title = styled.h2`
`
const Description = styled.p`
`
const Button = styled.button`
`

const Slider = () => {
  return (
    <Container>
        <Arrow direction="left">
            <ArrowBack />
        </Arrow>

        <Wrapper>
            <Slide>
            <ImageContainer>
                <Image src={images[0].fullbanner_image1}></Image>
            </ImageContainer>
            <InfoContainer>
                <Title>Lorem Ipsum</Title>
                <Description>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Description>
                <Button>Shop Now</Button>
            </InfoContainer>
            </Slide>
        </Wrapper>

        <Arrow direction="right">
            <ArrowForward />
        </Arrow>
    </Container>
  )
}

export default Slider