import React from 'react'
// import { useDispatch,useSelector } from 'react-redux'
import styled from 'styled-components'
import BookList from '../components/BookList'
import FilterSort from '../components/FilterSort'
// import { getBooks } from '../redux/action'
// import {useSearchParams} from "react-router-dom"

const Books = () => {

   


  return (
    <div>
      <h2>Books</h2>
      <BookPageWrapper>
        <FilterSortWrapper>
          <FilterSort/>
        </FilterSortWrapper>
        <BookListWrapper>
          <BookList />
        </BookListWrapper>
      </BookPageWrapper>



    </div>
  )
}

export default Books

const BookPageWrapper = styled.div`
display:flex;
`
const FilterSortWrapper = styled.div`
width:300px;
border: 1px solid red;
`;
const BookListWrapper = styled.div`
border:1px solid black;
width:100%;
display:grid;
grid-template-columns: repeat(auto-fit,minmax(310px,max-content));
grid-gap:16px;
justify-content:center;
padding:initial;

`;