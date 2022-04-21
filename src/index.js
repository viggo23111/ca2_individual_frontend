import { render } from "react-dom";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import App from "./App";
import Jokes from "./components/Jokes";
import Home from "./components/Home";
import MyIP from "./components/MyIP";
import IPInfo from "./components/IPInfo";
import SearchCounter from "./components/SearchCounter";


const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route exact="true" path="/" element={<App/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/myip" element={<MyIP/>}/>
                <Route path="/ipinfo" element={<IPInfo/>}/>
                <Route path="/searchcounter" element={<SearchCounter/>}/>
            </Route>
            <Route
                path="*"
                element={
                    <main style={{ padding: "1rem" }}>

                        <p>There's nothing here!</p>
                    </main>
                }
            />
        </Routes>
    </BrowserRouter>,
    rootElement
);