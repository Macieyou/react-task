import React from 'react';
import {BrowserRouter} from "react-router-dom";
import MainRouter from "./MainRouter";

import "./styles/global/index.scss";
import Header from "./components/Header";

const App = () => (
    <BrowserRouter>
        <Header/>
        <MainRouter/>
    </BrowserRouter>
);

export default App;
