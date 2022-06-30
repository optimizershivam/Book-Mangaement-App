import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getBooks } from '../redux/AppReducer/action'

const SingleBook = () => {
  const {id}= useParams()
  const dispatch = useDispatch()
  const books = useSelector(state=> state.AppReducer.books)
  const [currentBook, setCurrentBook] = useState({})
  useEffect(()=>
  {
    if(books.length===0)
    {
      dispatch(getBooks())
    }
  },[books?.length,dispatch])

  useEffect (()=> 
  {
    if(id){
      const temp = books.find((book)=>book.id===Number(id))
      temp&&setCurrentBook(temp)
    }
  },[books,id])
  return (
    <div>
      <h2>{currentBook?.book_name}</h2>
      <h2>{currentBook?.category}</h2>
      <h2>{currentBook?.release_year}</h2>
      <button><Link to={`/books/${currentBook.id}/edit`}>Edit</Link></button>

    </div>
  )
}

export default SingleBook