import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    position: relative;
    padding: 10px;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    max-width: 420px;
`

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    transition: all 1s ease;

    &:hover {
        opacity: 1;

        h2 {
            transform: translateX(0px);
        }
    }
`

const Title = styled.h2`
    font-size: 35px;
    margin-bottom: 1rem;
    color: white;
    padding: 1rem 2rem;
    transform: translateX(-20px);
    transition: all 1s ease;
`

const CategoryItem = ({ imageSrc, title }) => {
  return (
    <Container>
        <Image src={imageSrc} />
        <Info>
            <Title>{title}</Title>
        </Info>
    </Container>
  )
}

export default CategoryItem