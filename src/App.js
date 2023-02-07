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
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Account from "./pages/Account";
import Dashboard from "./pages/Dashboard";
import Logout from "./pages/Logout";
import Delivery from "./pages/Delivery";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Favorites from "./pages/Favorites";
import Users from "./pages/Users";

function App() {
  let p1 = ["Cakes", "IceCreams", "Flowers", "Chocolates", "Gifts", "Users"];
  let p2 = ["Profile", "Account", "Dashboard", "Logout"];

  return (
    <div className="App">
      <BrowserRouter>
        <IMSNavbar pages={p1} settings={p2} />
        <Routes>
          <Route path="/Cakes" element={<Cakes />} />
          <Route path="/IceCreams" element={<IceCreams />} />
          <Route path="/Flowers" element={<Flowers />} />
          <Route path="/Chocolates" element={<Chocolates />} />
          <Route path="/Gifts" element={<Gifts />} />
          <Route path="/CartPage" element={<CartPage />} />
          <Route path="/" element={<Flowers />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/LogIn" element={<Login />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Logout" element={<Logout />} />
          <Route path="/CartPage/Delivery" element={<Delivery />} />
          <Route path="/h" element={<IceCreams />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Favorites" element={<Favorites />} />
          <Route path="/Users" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
