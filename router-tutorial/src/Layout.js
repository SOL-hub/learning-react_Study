import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header style={{ background: "lightgray", padding: 16, fontSize: 25 }}>
        header
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
};

export default Outlet;
