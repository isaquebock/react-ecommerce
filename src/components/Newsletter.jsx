import React from 'react'
import { Send } from '@mui/icons-material';
import styled from 'styled-components'

import { devices } from '../responsive'

const Container = styled.div`
    height: 60vh;
    background: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 1rem;

    @media${devices.laptop} {
        padding: 0;
    }
`

const Title = styled.h2`
    font-size: 60px;
    margin-bottom: 20px;
    color: #161616;
`

const Description = styled.p`
    font-size: 18px;
    margin-bottom: 20px;
    font-weight: 300;
    color: #161616;
    text-align: center;

    @media${devices.laptop} {
        font-size: 24px;
    }
`

const InputContainer = styled.div`
    width: 80%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;

    @media${devices.laptop} {
        width: 50%;
    }
`

const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`

const Button = styled.button`
    flex: 1;
    border: none;
    background: coral;
    color: white;
    cursor: pointer;
`

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Description>
        <InputContainer>
            <Input placeholder='Seu e-mail' type="email" />
            <Button>
                <Send />
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter