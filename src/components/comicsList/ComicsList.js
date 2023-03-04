import "./comicsList.scss";
import React, { useEffect, useState } from "react";
import { useMarvelService } from "../../services";
import { ErrorMessage } from "../errorMessage/ErrorMessage";
import { Spinner } from "../spinner/Spinner";
import { Link } from "react-router-dom";


const setContent = (process, Component, newItemsLoading) => {
    switch (process) {
        case "waiting":
            return <Spinner />;
        case "loading":
            return newItemsLoading ? <Component/> : <Spinner />;
        case "confirmed":
            return <Component/>;
        case "error":
            return <ErrorMessage />;
        default:
            throw new Error("Unexpected process state");
    }
};

const ComicsList = () => {

    const [comicsList, setComicsList] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offSet, setOffSet] = useState(0);
    const [comicsEnded, setComicsEnded] = useState(false);

    const { getAllComics, process, setProcess } = useMarvelService();

    useEffect(() => {
        onRequest(offSet, true);
    }, []);

    const onRequest = (offSet, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllComics(offSet).then(onComicsListLoaded).then(()=> setProcess("confirmed"));
    };

    const onComicsListLoaded = (newComicsList) => {
        let ended = false;

        if (newComicsList.length < 8) {
            ended = true;
        }

        setComicsList(comicsList => [...comicsList, ...newComicsList]);
        setNewItemLoading(newItemLoading => false);
        setOffSet(offSet + 8);
        setComicsEnded(comicsEnded => ended);

    };

    function renderItems(arr) {

        const items = arr.map((item, i) => {
            let imgStyle = { objectFit: "cover" };
            if (item.thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg") {
                imgStyle = { objectFit: "unset" };
            }

            return (
                <li className="comics__item" key={i}>
                    <Link to={`/comics/${item.id}`}>
                        <img src={item.thumbnail} alt="ultimate war" className="comics__item-img" style={imgStyle} />
                        <div className="comics__item-name">{item.title}</div>
                        <div className="comics__item-price">{item.price}</div>
                    </Link>
                </li>
            );
        });

        return <ul className="comics__grid">{items}</ul>;
    }



    return (
        <div className="comics__list">
            {setContent(process, () => renderItems(comicsList), newItemLoading)}
            <button className="button button__main button__long" disabled={newItemLoading} onClick={() => onRequest(offSet)}
                    style={{ display: comicsEnded ? "none" : "block" }}>
                <div className="inner">load more</div>
            </button>
        </div>
    );
};

export { ComicsList };
