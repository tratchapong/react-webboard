import Posts from "./Posts";
// import data from "./data"
import axios from 'axios'
import {useState, useEffect} from 'react'

function App() {
  const [allPosts, setAllPosts] = useState([])
  // useEffect( ()=> {
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //   .then(res => {
  //     console.log(res.data)
  //     setAllPosts(res.data)
  //   })
  //   .catch( err => {
  //     console.log(err.toJSON())
  //   })
  // },[] )

  useEffect( ()=> {
    const getData = async () => {
      try {
        let res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setAllPosts(res.data)
      } catch (err) {
        console.log(err.toJSON())
      }
    }
    getData()
  },[])

  return (
    <div className="App container mw-800">
      <h1 className="bg-info border container text-center mb-3">
        Codecamp11 <i className="bi bi-wordpress" /> 
      </h1>
      <Posts data={allPosts.slice(0,20)} />
    </div>
  );
}

export default App;
