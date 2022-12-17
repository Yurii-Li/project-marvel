import { AppHeader, CharInfo, CharList, RandomChar } from "./components";

import decoration from "./resources/img/vision.png";
import { Component } from "react";

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
                        <RandomChar />
                        <div className="char__content">
                            <CharList onCharSelected={this.onCharSelected} />
                            <CharInfo charId={this.state.selectedChar} />
                        </div>
                        <img className="bg-decoration" src={decoration} alt="vision" />
                    </main>
                </div>
            </div>
        );
    }
}

export default App;
