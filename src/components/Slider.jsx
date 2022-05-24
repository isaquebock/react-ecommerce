import React, { useState } from 'react'
import styled from "styled-components"

import { ArrowBack, ArrowForward } from '@mui/icons-material/';

import Slide from './Slide';

import { sliderItems } from '../data';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
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
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props => props.slideIndex * -100}vw);
    transition: all 1s ease;
`

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0)

    const handleClick = dir => {
        if(dir === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
        }
    }

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowBack />
            </Arrow>

            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map(item => (
                    <Slide imageSrc={item.image} title={item.title} description={item.description} buttonName={item.button} key={item.id}></Slide>
                ))}
            </Wrapper>

            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowForward />
            </Arrow>
        </Container>
    )
}

export default Slider