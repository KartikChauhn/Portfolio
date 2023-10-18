
import { Route, Routes, BrowserRouter, useNavigate } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Work from "./Pages/Work";
import { useEffect, useState } from "react";
import Jaishreeram from "./Pages/Jaishreeram";
import Intro from "./Pages/Intro";

function App() {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const navigate = useNavigate();

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard scrollTop={scrollTop} />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/work" element={<Work />} />
          <Route path="/jaiShreeRam" element={<Jaishreeram />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
