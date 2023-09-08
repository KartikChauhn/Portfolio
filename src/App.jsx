import { Typography } from "antd";
import { Route, Routes, BrowserRouter, useNavigate } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Who from "./Pages/Who";
import What from "./Pages/What";
import Contact from "./Pages/Contact";
import Work from "./Pages/Work";
import { useEffect, useState } from "react";
import Cursor from "./Components/CommonComponents/Cursor";

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

  return (
    <div>
      <div className="fixed top-5 left-10">
        <Typography className="text-orange-400">LOGO</Typography>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard scrollTop={scrollTop} />} />
          <Route path="/who" element={<Who />} />
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
