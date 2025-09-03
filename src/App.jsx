import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Vesting from "./pages/Vesting";
import Form from "./pages/Form";
// import VestingDashboard from "./pages/VestingDashboard";
import VestingDashboard from "./pages/VestingDashboard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Dashboard/> */}
      {/* <Vesting/> */}
      {/* <Navbar/> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/vesting" element={<Vesting />} />
          <Route path="/vesting-dashboard" element={<VestingDashboard />} />
          <Route path="/form" element={<Form />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
