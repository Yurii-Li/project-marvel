import { AppBanner } from "../appBanner/AppBanner";
import { ComicsList } from "../comicsList/ComicsList";
import { Helmet } from "react-helmet";

const ComicsPage = () => {
    return (
        <>
            {/*В верху нашої сторінки створюємо компонент <Helmet> і в ньому вказуємо потрібні нам параметри як в звичайному html тегу <head>*/}
            <Helmet>
                <meta
                    name="description"
                    content="Page with comics list of our comics"
                />
                <title>Comics page</title>
            </Helmet>

            <AppBanner />
            <ComicsList />
        </>
    );
};

export { ComicsPage };
