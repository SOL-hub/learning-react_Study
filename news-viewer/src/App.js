import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=kr&apiKey=e259b374afc843ab8b59e694d70f4970",
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}/>
      )}
    </>
  );
}

export default App;
