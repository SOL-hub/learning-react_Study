import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>홈</h1>
      <p>가장 먼저보여지는 요것은 홈페이지</p>
      <ul>
        <li>
          <Link to="/about">About페이지</Link>
        </li>
        <li>
          <Link to="/profiles/sol1">sol1의 프로필</Link>
        </li>
        <li>
          <Link to="/profiles/sol2">sol2의 프로필</Link>
        </li>
        <li>
          <Link to="/profiles/void">존재하지 않는 페이지입니다. </Link>
        </li>
        <li></li>
      </ul>
    </div>
  );
};

export default Home;
