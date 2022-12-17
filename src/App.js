import { AppHeader, CharInfo, CharList, RandomChar } from "./components";

import decoration from "./resources/img/vision.png";
import { Component } from "react";
import ErrorBoundary from "./components/errorBoundary/ErrorBoundary";

class App extends Component {
    state = {
        selectedChar: null,
    };

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id,
        });
    };

    render() {
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
                                <CharList onCharSelected={this.onCharSelected} />
                            </ErrorBoundary>

                            <ErrorBoundary>
                                <CharInfo charId={this.state.selectedChar} />
                            </ErrorBoundary>
                        </div>
                        <img className="bg-decoration" src={decoration} alt="vision" />
                    </main>
                </div>
            </div>
        );
    }
}

export default App;
