import './App.css';
import MyComponent from './MyComponent';
import Say from './Say';
import ScrollBox from './ScrollBox';
import ValidationSample from './ValidationSample';

function App() {

  const name = '솔';
  

  return (
    <div className="App">
      <p>똘이의 리액트</p>
      <MyComponent name={name} favoriteNumber={2} ref={(ref) => this.myComponent=ref}>사이에 껴있는</MyComponent>
      <Say />
      <ValidationSample/>
      <ScrollBox ref={(ref) => this.scrollBox=ref}/>
      <button onClick={()=> this.scrollBox.scrollToBottom()}>맨 밑으로</button>
    </div>
  );
}

export default App;
