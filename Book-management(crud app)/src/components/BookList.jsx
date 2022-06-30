import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import { getBooks } from '../redux/AppReducer/action'

import BookCard from './BookCard'

const BookList = () => {

    const dispatch = useDispatch()
     const books = useSelector((state)=> state.AppReducer.books)
     const [searchparams] = useSearchParams()
     const location = useLocation()
     useEffect(()=>{
      const sortby = searchparams.get("sortby")
      const getTodoParams={
        params:{
          category:searchparams.getAll("category"),
          _sort:"release_year",
          _order:sortby
        }
      }
      
      if(books.length===0 || location.search){
        dispatch(getBooks(getTodoParams))
      }
    },[location.search])

  return (
    
    <>
    {/* {books.length>0 &&books.map((singleBook) =>
    { return (
        <BookCardWrapper key={singleBook.id}>
            <BookCard bookData={singleBook}/>
        </BookCardWrapper>
    )

    })} */}
    {books?.length>0 && books?.map((e)=>{
      return (
      <BookCardWrapper key={e.id}>
       <Link to={`/books/${e.id}`}> <BookCard e={e}/> </Link>
      </BookCardWrapper>
        )
    })}

    </>
  )
}

export default BookList

const BookCardWrapper =styled.div`

border:1px solid blue;
padding:5px;
width:310px;

`