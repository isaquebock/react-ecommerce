import React from 'react'
import styled from 'styled-components'
import { Search } from '@material-ui/icons'
import { Badge } from '@mui/material';
import { ShoppingBagOutlined } from '@mui/icons-material';


const Container = styled.div`
  height: 60px;
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;

`

const SearchContainer = styled.div`
  border: .5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`

const Input = styled.input`
  border: none;
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
  margin-left: 25px;
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
          <Left>
            <Language>PT</Language>
            <SearchContainer>
              <Input/>
              <Search style={{ color: 'gray', fontSize: '14px' }}/>
            </SearchContainer>
          </Left>

          <Center>
            <Logo>LOVE</Logo>
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