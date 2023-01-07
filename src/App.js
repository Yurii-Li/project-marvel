import { AppHeader, ComicsPage, MainPage, Page404, SingleComicPage } from "./components";
import { BrowserRouter , Route, Routes, } from "react-router-dom";


const App = () => {

    return (
        <BrowserRouter>
            <div className="App">
                <div className="app">
                    <AppHeader />

                    <main>
                        <Routes>
                            <Route path={"/"} element={<MainPage/>}/>
                            <Route path={"/comics"} element={<ComicsPage/>} />
                            <Route path={"/comics/:comicId"} element={<SingleComicPage/>} />
                            <Route path={"*"} element={<Page404/>} />
                        </Routes>
                    </main>

                </div>
            </div>
        </BrowserRouter>
    );
};


export default App;
