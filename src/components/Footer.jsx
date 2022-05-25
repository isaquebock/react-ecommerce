import React from 'react'
import styled from 'styled-components'

import { Facebook, Twitter, Instagram, Pinterest, Room, Phone } from '@mui/icons-material/';

const Container = styled.div`
    display: flex;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
`

// Left Components

const Logo = styled.h2``

const Description = styled.p`
        margin: 20px 0px;
`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    cursor: pointer;
`

// Center Components

const Title = styled.h3``

const List = styled.ul`padding: 0;`

const ListItem = styled.li`
    list-style: none;
    margin-top: .5rem;
    cursor: pointer;
`

const ContactItem = styled.div`
    margin-top: 1rem;

    display: flex;
    align-items: center;
    gap: 5px;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>learn</Logo>
                <Description>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Description>

                <SocialContainer>
                    <SocialIcon>
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon>
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon>
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon>
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Links úteis</Title>
                <List>
                    <ListItem>Link 1</ListItem>
                    <ListItem>Link 2</ListItem>
                    <ListItem>Link 3</ListItem>
                    <ListItem>Link 4</ListItem>
                </List>
            </Center>
            <Right>

                <Title>Contato</Title>
                <ContactItem>
                    <Room />
                    Av. Brg. Faria Lima, 3477 - 18º Andar - Itaim Bibi, São Paulo - SP, 04538-133
                </ContactItem>
                <ContactItem>
                    <Phone />
                    email@email.com
                </ContactItem>
            </Right>
        </Container>
    )
}

export default Footer