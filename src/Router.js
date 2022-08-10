import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Home from "./Home";
import About from "./about";
import Contact from "./contact";
import Nopage from "./Nopage";
import Todo from "./Todo";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
     
     <Route path="/" element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="Todo" element={<Todo />} />
        <Route path="*" element={<Nopage />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);