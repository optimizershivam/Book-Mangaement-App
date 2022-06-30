import React from 'react'

const BookCard = ({e}) => {
  return (
    <div>
      <div>
        <img src={e.cover_photo} width="100%" height="250px" alt='coverphoto'/>
        <div>{e.book_name}</div>
        <div>{e.release_year}</div>
        <div>{e.category}</div>
      </div>
    </div>
  )
}

export default BookCard