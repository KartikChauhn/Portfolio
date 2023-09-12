import { Typography } from "antd";
import { Route, Routes, BrowserRouter, useNavigate } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Who from "./Pages/Who";
import What from "./Pages/What";
import Contact from "./Pages/Contact";
import Work from "./Pages/Work";
import { useEffect, useState } from "react";
import Cursor from "./Components/CommonComponents/Cursor";
import Jaishreeram from "./Pages/Jaishreeram";
import Logo from "./Components/CommonComponents/Logo";

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
            <Route path="/who" element={<Who />} />
            <Route path="/jaiShreeRam" element={<Jaishreeram />} />
        </Routes>
      </BrowserRouter>

      <Cursor />
      {/* <Dashboard />
      <Who />
      <What />
      <Work />
      <Contact /> */}
    </div>
  );
}

export default App;
