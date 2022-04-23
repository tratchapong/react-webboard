import Posts from "./Posts";
// import data from "./data"
import axios from 'axios'
import {useState, useEffect} from 'react'

function App() {
  const [data, setData] = useState([])

  useEffect( ()=> {
    // const getData = async () => {
    //   let res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => setData(res.data))
  },[])

  return (
    <div className="container mw-800">
      <Posts data={data.slice(0,20)}/>
    </div>
  );
}

export default App;
