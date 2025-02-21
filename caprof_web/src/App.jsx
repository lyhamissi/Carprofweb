import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Components/Layout"
import Home from "./Components/Home"
import All from "./Components/All"
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" index element={<Home/>}/>
            <Route path="/home" index element={<Home/>}/>
            <Route path="/all" element={<All/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
