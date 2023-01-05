import { AppHeader, ComicsPage, MainPage } from "./components";
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
                        </Routes>
                    </main>

                </div>
            </div>
        </BrowserRouter>
    );
};


export default App;
