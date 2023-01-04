import {Component} from "react";
import {ErrorMessage} from "../errorMessage/ErrorMessage";

class ErrorBoundary extends Component {
    state = {
        error: false,
    };

    // Якщо виникне помилка, то в стейт error записується true
    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo)
        this.setState({
            error: true
        })
    }

    render() {
        // Якщо виникла помилка, то рендериться структура if
        if (this.state.error) {
            return <ErrorMessage/>
        }
        // Якщо помилки немає, то рендериться компонент, який обгорнутий в ErrorBoundary
        // this.props.children - це компонент, який обгорнутий в ErrorBoundary
        return this.props.children

    }
}
export {ErrorBoundary}
