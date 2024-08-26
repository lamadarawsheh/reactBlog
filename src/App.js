import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = 'My Blog';
  // const num = 30;
  // const person = {name :'ahmad',age : 39}
  const link = "http://google.com";
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        {/* <h1> {title} </h1> */}
        <Home />
        {/* <p>{person}</p> */}
        {/* <p>{55}</p>
        <p>{"hello there !"}</p>
        <p>{[2,3,4,5]}</p>
        <a href={link}>google</a> */}

      </div>
    </div>
  );
}

export default App;
