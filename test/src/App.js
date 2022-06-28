import Test from './Test';
import Test2 from './Test2';
import Test3 from './Test3';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Routes, Link } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';

function App() {
    const [blue, setBlue] = React.useState(false);
    function changeColor() {
        console.log("color switched")
        setBlue(prevCol => prevCol = !prevCol)
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Test/>}></Route>
                <Route path="/page2" element={<Test2 colorSwap={changeColor} blueMode={blue}/>}></Route>
                <Route path="/page3" element={<Test3/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;