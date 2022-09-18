import './App.css';
import MyComponent from './MyComponent';

function App() {

  const name = '솔';

  return (
    <div className="App">
      <p>똘이의 리액트</p>
      <MyComponent name={name}>사이에 껴있는</MyComponent>
    </div>
  );
}

export default App;
