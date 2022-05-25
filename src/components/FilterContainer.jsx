import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Filter = styled.div`
    margin: 20px;
`

const FilterText = styled.span`
    font-size: 16px;
    font-weight: 600;
    margin-right: 5px;
`

const Select = styled.select`
    margin-right: 20px;
`

const Option = styled.option`
`

const FilterContainer = () => {
  return (
    <Container>
        <Filter>
            <FilterText>Cor</FilterText>
            <Select>
                <Option>White</Option>
                <Option>Black</Option>
                <Option>Beige</Option>
                <Option>Yellow</Option>
            </Select>

            <FilterText>Tamanho</FilterText>
            <Select>
                <Option>P</Option>
                <Option>M</Option>
                <Option>G</Option>
                <Option>GG</Option>
            </Select>
        </Filter>
        <Filter>
            <FilterText>Ordenar</FilterText>
            <Select>
                <Option>Mais recentes</Option>
                <Option>Maior Preço</Option>
                <Option>Menor Preço</Option>
            </Select>
        </Filter>
    </Container>
  )
}

export default FilterContainer