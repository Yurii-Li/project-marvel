import "./page404.scss";
import { ErrorMessage } from "../../errorMessage/ErrorMessage";
import { Link } from "react-router-dom";

const Page404 = () => {
    return (
        <div className={"page-404"}>
            <ErrorMessage />
            <p className={"page-404__text"} >Page doesn't exist</p>
            <Link className={"page-404__link"}  to="/">Back to main page</Link>
        </div>
    );
};

export { Page404 };
