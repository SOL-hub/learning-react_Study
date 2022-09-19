import './App.css';
import MyComponent from './MyComponent';
import Say from './Say';
import EventPractice from './EventPractice';

function App() {

  const name = '솔';
  

  return (
    <div className="App">
      <p>똘이의 리액트</p>
      <MyComponent name={name} favoriteNumber={2}>사이에 껴있는</MyComponent>
      <Say />
      <EventPractice></EventPractice>
    </div>
  );
}

export default App;
