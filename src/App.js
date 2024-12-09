import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Home from "./components/Home";
import MyTicket from "./components/MyTicket";
import { Switch } from "antd";

const App = () => {
    return (
        <Routes basename="">
            <Route path="/Hanoivedem/" element={<Home />} />
            <Route path="/Hanoivedem/dat-ve" element={<Main />} />
            <Route path="/Hanoivedem/my-tickets" element={<MyTicket />} />
        </Routes>
    );
};

export default App;
