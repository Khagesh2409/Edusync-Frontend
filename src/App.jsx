import Home from "./Pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Nav from "./Components/Navbar";
import Test from "./Pages/Test";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        {/* <Route path="/courses" element={<Courses />} />
        <Route path="/marketplace" element={<MarketPlace />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
