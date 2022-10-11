import { useState } from 'react';
import './App.css';
import loadable from '@loadable/component';

const SplitMe = loadable(() => import('./SplitMe'), {
  fallback: <div>loading...</div>,
});

function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };

  const onMouseOver = () => {
    SplitMe.preload();
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>하이</p>
        <p onClick={onClick} onMouseOver={onMouseOver}>
          안녕 리액트
          {visible && <SplitMe />}
        </p>
      </header>
    </div>
  );
}

export default App;
