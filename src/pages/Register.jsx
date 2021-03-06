import React from 'react';
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Announcement from '../components/Announcement'

import { devices } from '../responsive'

const Container = styled.div`

`
const Wrapper = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #fcf5f5;
    
    @media${devices.laptop} {
        background: transparent;
    }

`
const Title = styled.h2`
    font-style: 24px;
    width: 100%;
    text-align: center;
    font-weight: 300;
    margin-bottom: 1rem;
`
const Form = styled.form`
    width: 80%;
    margin: 0 auto;
    background: #fcf5f5;
    display: flex;
    flex-wrap: wrap;
    padding: 1.25rem;

    @media${devices.laptop} {
        width: 50%;
        padding: 2rem;
        background: #fcf5f5;
    }
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px;
    padding: 1rem;
    border: 1px solid lightgray;
`

const Agreement = styled.span`
    margin: 10px;
`

const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
`

const Button = styled.button`
    border: none;
    margin-top: 1rem;
    font-size: 1.1rem;
    margin-left: 10px;
    padding: 1rem 1.5rem;
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

const Register = () => {
    return <Container>
        <Announcement />
        <Navbar />
        <Wrapper>
            <Form>
                <Title>Criar Conta</Title>
                <Input placeholder="Nome" />
                <Input placeholder="Sobrenome" />
                <Input placeholder="E-mail" />
                <Input placeholder="Senha" />
                <Input placeholder="Confirme sua Senha" />
                <Agreement>
                    Lorem Ipsum is simply dummy text of the printing and typesetting <b>industry</b>.
                </Agreement>
                <ButtonContainer>
                    <Button type="submit">Registrar</Button>
                </ButtonContainer>
            </Form>
        </Wrapper>
        <Footer />
    </Container>
}

export default Register

