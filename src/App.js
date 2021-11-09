import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from "./Components/Home/Home/Home";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import Search from "./Components/Search/Search";
import MyForm from "./Components/MyForm/MyForm";
import Info from "./Components/Info/Info";
import Menu from './Components/Menu/Menu'
import Navbar from "./Components/Home/Navbar/Navbar";


function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/form" element={<MyForm />} />
        <Route path="/info" element={<Info />} />
        <Route path="/bonus" element={< Menu />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
