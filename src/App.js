import { BrowserRouter, Routes, Route,useNavigate } from "react-router-dom";

import Login from "./Login";
import ErrorBoundary from "./ErrorBoundary";
import Home from "./Home";
import List from "./List";
import Dashboard from "./Dashboard";
import Nopage from "./Nopage";
import About from "./about";
import Contact from "./contact";
import Todo from "./Todo";
import Router from "./Router";
export default function App() {

  const navigate=useNavigate;
  return (
    <ErrorBoundary>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} /> 
          <Route path="/Dashboard" element={<Dashboard />}>
          <Route path="Home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="Todo" element={<Todo />} />
         
          <Route path="*" element={<Nopage />} />
          </Route>
          <Route path="List" element={<List/>} />
      </Routes>
      
      </BrowserRouter>
    
    </ErrorBoundary>
  );
}



