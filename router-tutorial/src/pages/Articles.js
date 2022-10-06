import { Link, Outlet } from "readt-router-dom";

const Article = () => {
  return (
    <Outlet>
      <ul>
        <li>
          <Link to="/articles/1">게시글 1</Link>
        </li>
        <li>
          <Link to="/articles/2">게시글 2</Link>
        </li>
        <li>
          <Link to="/articles/3">게시글 3</Link>
        </li>
      </ul>
    </Outlet>
  );
};

export default Article;
