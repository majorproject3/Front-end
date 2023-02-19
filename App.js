import "./App.css";
import HomePage from "./components/Homepage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar1 from "./components/Navbar/Navbar";
import Articlelist from "./components/Articlelist/Articlelist";
import Footer from "./components/Footer/Footer";
import Pricing from "./components/Pricing/Pricing";
import Login from "./components/Login/Login";
import EditArticle from "./components/Articlelist/EditArticle";
import Signup from "./components/Signup/Signup";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import ResetPassword from "./components/ForgotPassword/ResetPassword";
import Addarticle from "./components/Articlelist/Addarticle";
import Profile from "./components/Profile/Profile";
import Error from "./components/Error/Error";
function App() {
  return (
    <BrowserRouter>
      <Navbar1 />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<Articlelist />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/addarticle" element={<Addarticle />} />
        <Route path="/editarticle" element={<EditArticle />} />
        <Route path="/forgotpass" element={<ForgotPassword />} />
        <Route path="/resetpass" element={<ResetPassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/error" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
