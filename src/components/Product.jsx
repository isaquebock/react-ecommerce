import React from 'react'
import styled from 'styled-components'
import { AddShoppingCart } from '@mui/icons-material';

const Container = styled.div`
  flex: 1;
  min-width: 280px;
  height: 310px;
  cursor: pointer;
  position: relative;
  transition: all 1s ease;
  background: white;
  padding: .5rem;

  &:hover {
    filter: brightness(.9);
  }
  
  border-radius: 5px;
`

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`

const Info = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 90%;
  height: 90%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  transform: translate(-50%, -50%);

  &:hover {
    div {
      opacity: 1;

      h3, h4 {
        transform: translateY(0);
      }
    }
  }
`

const Text = styled.div`
  opacity: 0;
  transition: all 1s ease;
`

const Name = styled.h3`
  transform: translateY(15px);
  transition: all 1s ease;
  transition-delay: .1s;
`

const Price = styled.h4`
  transform: translateY(10px);
  transition: all 1s ease;
  transition-delay: .2s;
`

const Icon = styled.div`
  opacity: 0;
  transition: all 1s ease;
  transition-delay: .2s;
`

const Product = ({imageSrc, name, price}) => {
  return (
    <Container>
        
        <Image src={imageSrc}/>
        <Info>
          <Text>
            <Name>{name}</Name>
            <Price>R$ {price}</Price>
          </Text>
          <Icon>
            <AddShoppingCart />
          </Icon>
        </Info>
    </Container>
  )
}

export default Product