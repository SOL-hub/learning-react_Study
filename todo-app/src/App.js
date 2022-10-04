import {useState} from 'react';
import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    {id : 1, text:'리액트 투두리스트만들기', checked:true},
    {id: 2, text:'갑자기 땡기는 국화빵 사먹기', checked:false},
    {id: 3, text: '번개 약속 나가기', checked:false}
  ])
  return (
    <TodoTemplate>
    <TodoInsert/>
    <TodoList todos={todos} />
    </TodoTemplate>

  );
}

export default App;
