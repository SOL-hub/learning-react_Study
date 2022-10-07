import { Navigate } from "react-router-dom";

const MyPage = () => {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }
  return (
    <>
      <p>마이페이지</p>
    </>
  );
};

export default MyPage;
