const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <>
      <input type="checkbox" />
      <span>예제테스트</span>
      <button>삭제</button>
    </>
  );
};

const Todos = ({
  input, //인풋에 입력되는 테스트
  todos, //할 일 목록이 들어 있는 객체
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
        <form onSubmit={onSubmit}>
        <input />
        <button type="submit">등록</button>
        </form>
    <div>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
    </div>
    </>
  )
};

export default Todos;
