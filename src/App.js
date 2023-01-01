import { AppHeader, CharInfo, CharList, RandomChar } from "./components";

import decoration from "./resources/img/vision.png";
import { useState } from "react";
import ErrorBoundary from "./components/errorBoundary/ErrorBoundary";

const App = () => {

    const [selectedChar, setSelectedChar] = useState(null);

    const onCharSelected = (id) => {
        setSelectedChar(id);
    };

    return (
        <div className="App">
            <div className="app">
                <AppHeader />
                <main>
                    <ErrorBoundary>
                        <RandomChar />
                    </ErrorBoundary>
                    <div className="char__content">
                        <ErrorBoundary>
                            <CharList onCharSelected={onCharSelected} />
                        </ErrorBoundary>

                        <ErrorBoundary>
                            <CharInfo charId={selectedChar} />
                        </ErrorBoundary>
                    </div>
                    <img className="bg-decoration" src={decoration} alt="vision" />
                </main>
            </div>
        </div>
    );
};


export default App;
