import {AppHeader, CharInfo, CharList, RandomChar} from "./components";

import decoration from './resources/img/vision.png'

function App() {
    return (
        <div className="App">
            <div className="app">
                <AppHeader/>
                <main>
                    <RandomChar/>
                    <div className="char__content">
                        <CharList/>
                        <CharInfo/>
                    </div>
                    <img className="bg-decoration" src={decoration} alt="vision"/>
                </main>
            </div>
        </div>
    );
}

export default App;
