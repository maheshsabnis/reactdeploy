import logo from './logo.svg';
import './App.css';

function App() {
  const clickme=()=>{
    alert('Clicked');
  }
  return (
    <div className="App">
       <h1>Hello React.js Deploy</h1>
       <button onClick={clickme}>Click Me</button>
    </div>
  );
}

export default App;
