import Home from "./Pages/Home";
import Learning from "./Pages/Learning";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Nav from "./Components/Navbar";
import Test from "./Pages/Test";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Articles from "./Pages/Articles";
import Detection from "./Pages/Detection"

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/detect" element={<Detection />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
