import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar";

function App() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  )
}

export default App
