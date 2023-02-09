import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppHeader, ComicsPage, MainPage, Page404, SingleCharacterLayout, SingleComicLayout, SinglePage } from "./components";



const App = () => {

    return (
        <BrowserRouter>
            <div className="App">
                <div className="app">
                    <AppHeader />
                    <main>
                            <Routes>
                                <Route path={"/"} element={<MainPage />} />
                                <Route path={"/comics"} element={<ComicsPage />} />
                                <Route path={"/comics/:id"} element={<SinglePage Component={SingleComicLayout} dataType='comic'/>} />
                                <Route path={"/characters/:id"} element={<SinglePage Component={SingleCharacterLayout} dataType='character'/>} />
                                <Route path={"*"} element={<Page404 />} />
                            </Routes>
                    </main>

                </div>
            </div>
        </BrowserRouter>
    );
};


export default App;
