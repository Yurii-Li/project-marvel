import "./page404.scss";
import { ErrorMessage } from "../../errorMessage/ErrorMessage";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Page404 = () => {
    return (
        <div className={"page-404"}>
            <Helmet>
                <meta
                    name="description"
                    content="This page is not found"
                />
                <title>This page is not found</title>
            </Helmet>
            <ErrorMessage />
            <p className={"page-404__text"} >Page doesn't exist</p>
            <Link className={"page-404__link"}  to="/">Back to main page</Link>
        </div>
    );
};

export { Page404 };
