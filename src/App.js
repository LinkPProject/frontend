import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Products from "./pages/Products";
import IndivisualJob from "./pages/IndivisualJob";
import Cart from "./pages/Cart";
import Post from "./pages/Post";
import { VisitsContext } from "./context/visitsContext";
import { useState, useEffect } from "react";
const App = () => {

    const [visits, setVisits] = useState({})

    useEffect(() => {
        const visitsUE = window.localStorage.getItem('visits');
        setVisits(JSON.parse(visitsUE));
    }, []);

    useEffect(() => {
        window.localStorage.setItem('visits',JSON.stringify(visits));
    }, [visits]);


    return (<>
        <Router>

            <VisitsContext.Provider value={{visits,setVisits}}>
                <Navigation />

                <Routes>

                    <Route path='/' element={<Home />}></Route>
                    <Route path='/products' exact element={<Products />}></Route>
                    <Route path='/products/:id' element={<IndivisualJob />}></Route>
                    <Route path='/cart' element={<Cart />}></Route>
                    <Route path='/post' element={<Post />}></Route>

                </Routes>
            </VisitsContext.Provider>



        </Router>

    </>)
}

export default App;