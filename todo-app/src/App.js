import { useState, useRef, useCallback } from 'react';
import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: '리액트 투두리스트만들기', checked: true },
    { id: 2, text: '갑자기 땡기는 국화빵 사먹기', checked: false },
    { id: 3, text: '번개 약속 나가기', checked: false },
  ]);

  //고윳값으로 사용될 id,
  //ref를 사용하여 변수 담기

  const nextId = useRef(4);

  const onInsert = useCallback(
    text => {
      const todo = {

        id:nextId.current,
        text,
        checked:false,
      };
      setTodos(todos.concat(todo));
      nextId.current +=1; //nextId 1씩 더하기
    }, [todos]
  )

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} />
    </TodoTemplate>
  );
}

export default App;
