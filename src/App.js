import React from 'react';
import {BrowserRouter} from "react-router-dom";
import MainRouter from "./MainRouter";

import "./styles/global/index.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => (
    <BrowserRouter>
        <Header/>
        <MainRouter/>
        <Footer/>
    </BrowserRouter>
);

export default App;
