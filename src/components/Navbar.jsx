import React from 'react'
import styled from 'styled-components'
import { Search } from '@material-ui/icons'
import { Badge } from '@mui/material';
import { ShoppingBagOutlined } from '@mui/icons-material';

import { devices } from '../responsive'

const Container = styled.div`
  height: 50px;
  background: white;

  @media${devices.laptop} {
    height: 60px;
  }
`

const Wrapper = styled.div`
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media${devices.laptop} {
    padding: 10px 20px;
  }
`

const Language = styled.span`
  display: none;
  font-size: 14px;
  cursor: pointer;

  @media${devices.laptop} {
    display: block;
  }
`

const SearchContainer = styled.div`
  border: .5px solid lightgray;
  display: flex;
  align-items: center;
  padding: 5px;

  @media${devices.laptop} {
    margin-left: 25px;
  }
`

const Input = styled.input`
  border: none;
  width: 60px;

  @media${devices.laptop} {
    width: auto;
  }
`

// Navbar positions

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const Center = styled.div`
  flex: 1;
  text-align: center;
`

const Logo = styled.h1`
  font-weight: bold;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;
  align-items: center;
`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 5px;

  @media${devices.laptop} {
    margin-left: 25px;
  }
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
          <Left>
            <Language>PT</Language>
            <SearchContainer>
              <Input placeholder="Buscar"/>
              <Search style={{ color: 'gray', fontSize: '14px' }}/>
            </SearchContainer>
          </Left>

          <Center>
            <Logo>learn</Logo>
          </Center>

          <Right>
            <MenuItem>Registrar</MenuItem>
            <MenuItem>Entrar</MenuItem>
            <MenuItem>
              <Badge badgeContent={4} color="primary">
                <ShoppingBagOutlined />
              </Badge>
            </MenuItem>
          </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar