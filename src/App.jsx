import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar";
import LeaderBoard from './pages/LeaderBoard'

function App() {
  return (
    <main className="flex flex-col min-h-screen bg-black dark">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leader" element={<LeaderBoard />} />
      </Routes>
    </main>
  )
}

export default App
