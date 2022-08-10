import { Outlet, Link,Routes, Route } from "react-router-dom";
import Home from "./Home";
import List from "./List";
const Layout = () => {
  return (
    <>
     <div className="layout">
            <div className="App1">
            <Link to="Home">Home</Link>
            </div>
            <div className="App1">
            <Link to="about">About</Link>
            </div>
            <div className="App1">
            <Link to="contact">Contact</Link>
            </div>
            <div className="App1">
            <Link to="Todo">ToDo</Link>
            </div>
            <div className="App1">
            <Link to="/">Logout</Link>
            </div>
          </div>

        <Routes>
        <Route index element={<Home />} />
      </Routes>
      <Outlet />
    </>
  )
};

export default Layout;