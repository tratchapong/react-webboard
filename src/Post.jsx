import axios from 'axios'
import React,{useEffect, useState} from 'react'
import Comments from './Comments'

function Post(props) {
  const { post } = props
  const [showCM, setShowCM] = useState(false)
  const [comments, setComments] = useState([])

  const getComments = async () => {
    let res = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
    console.log('getComments api')
    setComments(res.data)
  }

  const hdlClick = () => {
    setShowCM(prv => !prv)
  }

  useEffect(()=> {
    if(showCM) {
      getComments()
    }
  }, [showCM])

  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#ID${post.id}`}
        >
          {post.title}
        </button>
      </h2>
      <div
        id={`ID${post.id}`}
        className="accordion-collapse collapse show"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <div className="container">
            <p> {post.body} </p> 
            <button className='btn btn-outline-success' onClick={hdlClick}>Comment</button>
            {showCM && comments.length > 0 && (
              <Comments comments={comments}/>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post