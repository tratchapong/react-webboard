import Posts from "./Posts";
import data from "./data"


function App() {
  
  return (
    <div className="container mw-800">
      <Posts data={data}/>
    </div>
  );
}

export default App;
