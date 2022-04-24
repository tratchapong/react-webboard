import React from 'react'

function Comments(props) {
  const { comments } = props
  return (
    <ul className="list-group">
      {comments.map(el => (
        <li key={el.id} className="list-group-item">
          <p className='text-warning'> {el.email} </p> 
          {el.body}
        </li>
      ))

      }


    </ul>
  )
}

export default Comments