import logo from "./logo.svg";
import "./App.css";
import CakeView from "../src/features/cake/cakeView/index";
import CartComponent from "./components/CartComponent";
import IcecreamView from "../src/features/icecream/IcecreamView/index";
import { useSelector } from "react-redux";
import IMSNavbar from "./components/IMSNavbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cakes from "./pages/Cakes";
import IceCreams from "./pages/IceCreams";
import Flowers from "./pages/Flowers";
import Chocolates from "./pages/Chocolates";
import Gifts from "./pages/Gifts";
import CartPage from "./pages/CartPage";
import Landingpage from "./pages/Landingpage";
function App() {
  let p1 = ["Cakes", "IceCreams", "Flowers", "Chocolates", "Gifts"];
  let p2 = ["Profile", "Account", "Dashboard", "Logout"];
  //let noOfCakes = useSelector((state)=>state.cake.numOfCakes);
  //let noOfIcecream = useSelector((state)=>state.icecream.numOfIcecream);
  return (
    <div className="App">
      <h1>Bakery Store </h1>
      <BrowserRouter>
        <IMSNavbar pages={p1} settings={p2} />
        <Routes>
          <Route path="/Cakes" element={<Cakes />} />
          <Route path="/IceCreams" element={<IceCreams />} />
          <Route path="/Flowers" element={<Flowers />} />
          <Route path="/Chocolates" element={<Chocolates />} />
          <Route path="/Gifts" element={<Gifts />} />
          <Route path="/CartPage" element={<CartPage />} />
          <Route path="/" element={<Gifts />} />

          {/*<h4>No Of Cakes
                   <CartComponent badgeContent = {noOfCakes}/></h4>
                   <CakeView/>
                   <h4>No Of IceCreams
                   <CartComponent badgeContent = {noOfIcecream}/> 
                   </h4>
                   <IcecreamView/>*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
