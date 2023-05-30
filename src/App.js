import './App.css';
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import {Route, Routes} from "react-router-dom";
import AboutUser from "./components/AboutUser";
import {useEffect} from "react";
import {getPostsFetch} from "./redux-saga/postsState";
import {useDispatch} from "react-redux";
import AboutMe from "./components/AboutMe";

function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPostsFetch());
    }, [dispatch]);

    return (<div className="App">
            <NavBar/>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="about-user/:userId" element={<AboutUser/>}/>
            <Route path="about-me" element={<AboutMe/>}/>
        </Routes>

        </div>);
}

export default App;
