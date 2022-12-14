import Navbar from "./components/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Feed from "./pages/Feed";
import Form from "./components/Form";
import Login from "./pages/Login";
import AuthContextProvider from "./context/AuthContextProvider";

function App() {

  return (
    <AuthContextProvider>
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/feeds" element={<Feed />} />
          <Route path="/post" element={<Form/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
    </AuthContextProvider>
  );
}

export default App;
