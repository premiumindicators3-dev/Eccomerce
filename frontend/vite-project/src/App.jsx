import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/register"

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<h1>Manohar</h1>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>

    </Routes>
  )
}

export default App
