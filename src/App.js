import './App.scss';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import {Route, Routes} from "react-router-dom";
import Pages from "./components/pages/pages";
import AllBooks from "./components/allBooks/allBooks";
import DetailPage from "./components/detailPage/detailPage";
import About from "./components/aboutUs/about";
import Search from "./components/searchResult/search";
import Cart from "./components/myCart/myCart";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={"/"} element={<Pages/>}/>
                <Route path={'/cart'} element={<Cart/>}/>
                <Route path={"/books"} element={<AllBooks/>}/>
                <Route path={"/books/:id"} element={<DetailPage  />}/>
                <Route path={"/about"} element={<About/>}/>
                <Route path={"/books-search/:booksName"} element={<Search/>}/>
            </Routes>

            <Footer/>
        </div>
    )
}

export default App;
