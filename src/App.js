import Home from "./components/Home";
import Payment from "./components/Payment/Payment";
import Orders from "./components/Orders/Orders";
import Safety from "./components/Safety/Safety";
import Refer from "./components/Refer/Refer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
const App=()=>{
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/Nav" element={<Nav/>} />
        <Route exact path="/Payment" element={<Payment/>} />
        <Route exact path="/Orders" element={<Orders/>} />
        <Route exact path="/Safety" element={<Safety/>} />
        <Route exact path="/Refer" element={<Refer/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;