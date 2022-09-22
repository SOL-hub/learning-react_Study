import './App.css';
import MyComponent from './MyComponent';
import Say from './Say';
import ValidationSample from './ValidationSample';

function App() {

  const name = '솔';
  

  return (
    <div className="App">
      <p>똘이의 리액트</p>
      <MyComponent name={name} favoriteNumber={2} ref={(ref) => this.myComponent=ref}>사이에 껴있는</MyComponent>
      <Say />
      <ValidationSample/>
    </div>
  );
}

export default App;
