import React from "react";
// {
//   "userId": 1,
//   "id": 1,
//   "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//   "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// },

function Posts(props) {
  const {data} = props
  console.log(data[0])
  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#db${data[0].id}`}
          >
            {data[0].title}
          </button>
        </h2>
        <div
          id={`db${data[0].id}`}
          className="accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            {data[0].body}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
