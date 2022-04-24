import React from "react";
import Post from "./Post";
// {
//   "userId": 1,
//   "id": 1,
//   "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//   "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// },

function Posts(props) {
  const {data} = props
  return (
    <div className="accordion" id="accordionExample">
      { data.map( el => (
        <Post key={el.id} post={el}/>
      ))
      }
    </div>
  );
}

export default Posts;
