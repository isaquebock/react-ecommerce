import React from 'react'
import styled from 'styled-components'

import { categories } from '../data'
import CategoryItem from './CategoryItem'

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 1300px;
    margin: 1rem auto;
`

const Categories = () => {
    return <Container>
        {categories.map(item => ( <CategoryItem imageSrc={item.image} title={item.title} key={item.id}/> ))}
    </Container>
}

export default Categories