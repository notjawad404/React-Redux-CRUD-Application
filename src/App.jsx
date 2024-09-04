
import AddUser from "./components/AddUser"
import Home from "./components/home"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="add" element={<AddUser/>} />
    </Routes>
    </BrowserRouter>
  )
}
