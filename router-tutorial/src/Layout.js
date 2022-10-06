import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();

  const gobBack = () => {
    //이전 페이지로 이동
    navigate(-1);
  };

  const goArticles = () => {
    //articles 경로로 이동
    navigate("/articles", { replace: true });
  };

  return (
    <>
      <header style={{ background: "lightgray", padding: 16, fontSize: 25 }}>
        <button onClick={gobBack}>뒤로가자</button>
        <button onClick={goArticles}>게시글 목록</button>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
};

export default Layout;
