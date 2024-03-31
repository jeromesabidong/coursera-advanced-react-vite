import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import TestExample from "../examples/TestExample";
import App from "../App";

function Navigation() {
    return (
        <>
            <h2>Links</h2>
            <nav className="nav">
                <BrowserRouter>
                    <Link to={"/"} className="nav-item">Home</Link>
                    <Link to={"/test"} className="nav-item">Test</Link>
                    <Routes>
                        <Route path="/" />
                        <Route path="/test" element={<TestExample />} />
                    </Routes>
                </BrowserRouter>
            </nav>
        </>
    )
} 

export default Navigation;