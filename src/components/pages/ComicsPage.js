import { AppBanner } from "../appBanner/AppBanner";
import { ComicsList } from "../comicsList/ComicsList";
import { Route } from "react-router-dom";

const ComicsPage = () => {
    return (
        <>
                <AppBanner />
                <ComicsList />
        </>
    );
};

export { ComicsPage };
