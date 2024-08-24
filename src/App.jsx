import Home from "./Pages/Home";
import Learning from "./Pages/Learning";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from "./Pages/About";
import Articles from "./Pages/Articles";
import Detection from "./Pages/Detection"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/detect" element={<Detection />} />
      </Routes>
    </BrowserRouter>
  );
}
