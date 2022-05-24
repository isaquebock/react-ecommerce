import React from 'react'
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    align-items: center;
    height: 100vh;
    width: 100vw;
    position: relative;
`

const ImageContainer = styled.div`
    flex: 1;
    height: 100%;

`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
    position: absolute;
    top: 50%;
    left: 5%;
`
const Title = styled.h2`
    font-size: 35px;
    margin-bottom: 1rem;
`
const Description = styled.p`
    width: 60%;
    letter-spacing: 1px;
`
const Button = styled.button`
    margin-top: 1rem;
    background: coral;
    color: white;
    font-weight: bold;
    font-size: 20px;
    padding: 1rem;
    border: none;
    cursor: pointer;
`

const Slide = ({imageSrc, title, description, buttonName}) => {
  return (
    <Container>
        <ImageContainer>
            <Image src={imageSrc}></Image>
        </ImageContainer>
        <InfoContainer>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Button>{buttonName}</Button>
        </InfoContainer>
    </Container>
  )
}

export default Slide