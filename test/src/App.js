import Test from './Test';
import Test2 from './Test2';
import { BrowserRouter as Router, Switch, Route, Routes, Link } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Test/>}></Route>
                <Route path="/page2" element={<Test2/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;