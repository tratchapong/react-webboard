import React from 'react'

function Post(props) {
  const {post} = props
  return (
    <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#db${post.id}`}
          >
            {post.title}
          </button>
        </h2>
        <div
          id={`db${post.id}`}
          className="accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            {post.body}
          </div>
        </div>
      </div>
  )
}

export default Post