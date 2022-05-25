import React, { useEffect, useState } from "react";
import styled from "styled-components"

import { Close } from '@mui/icons-material';

import { popupInfos as popup } from '../data'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.5);
    z-index: 5;
    backdrop-filter: blur(4px);
    display: flex;
    justify-content: center;
    align-items: center;
    visibility: ${({ state }) => state === 'opened' ? 'visible' : 'hidden'};
    opacity: ${({ state }) => state === 'opened' ? '1' : '0'};
    pointer-events: ${({ state }) => state === 'opened' ? 'all' : 'none'};
    transition: all .5s ease;
`

const Wrapper = styled.div`
    width: 60%;
    height: 50vh;
    display: flex;
    position: relative;

    svg {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: white;
        border-radius: 50%;
        padding: .2rem;
        cursor: pointer;
    }

    &:hover {
        div > img {
            transform: scale(1.1);
        }
    }
`
const ImageContainer = styled.div`
    flex: 2;
    overflow: hidden;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 1s ease;
`
const InfoContainer = styled.div`
    flex: 1;
    background: ${({ secondary }) => secondary};
`
const TextContainer = styled.div`
    background: ${({ primary }) => primary};
    height: 60%;
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-end;
`
const Title = styled.h2`
    text-transform: uppercase;
    font-weight: 900;
    font-size: 35px;
    color: #181818;
`
const Subtitle = styled.h3`
    text-transform: uppercase;
    font-weight: 700;
    font-size: 20px;
    color: #181818;
`
const ButtonContainer = styled.div`
    background: ${({ secondary }) => secondary};
    height: 40%;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const Button = styled.button`
    border: 2px solid ${({ primary }) => primary};
    padding: 1rem;
    cursor: pointer;
    background: transparent;
    font-weight: 600;
    font-size: 1.1rem;
    color: ${({ primary }) => primary};

    transition: all .5s ease;

    &:hover {
        background: ${({ primary }) => primary};
        color: ${({ secondary }) => secondary};
    }
`


const NewsletterPopup = () => {
    const [popupState, SetPopupState] = useState('opened')


    useEffect(() => {
        let item = localStorage.getItem('popup')
        
        if(item === 'opened') {
            SetPopupState('closed')
        }

    }, [])

    const handleClosePopup = () => {
        SetPopupState(popupState === 'opened' && 'closed')
        localStorage.setItem('popup', 'opened');
    }

    return (
        <Container state={popupState}>
            <Wrapper>
                <Close onClick={() => handleClosePopup()} primary={popup.colors.primary} secondary={popup.colors.secondary}/>
                <ImageContainer>
                <Image src={popup.image}></Image>
                </ImageContainer>
                <InfoContainer secondary={popup.colors.secondary} >
                    <TextContainer primary={popup.colors.primary}>
                        <Title>{popup.title}</Title>
                        <Subtitle>{popup.subtitle}</Subtitle>
                    </TextContainer>
                    <ButtonContainer secondary={popup.colors.secondary}>
                        <Button primary={popup.colors.primary} secondary={popup.colors.secondary} >{popup.button}</Button>
                    </ButtonContainer>
                </InfoContainer>
            </Wrapper>
        </Container>
    )
}

export default NewsletterPopup