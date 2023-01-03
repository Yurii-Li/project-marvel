import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import { useMarvelService } from "../../services";
import { ErrorMessage } from "../errorMessage/ErrorMessage";
import { Spinner } from "../spinner/Spinner";
import "./charList.scss";

const CharList = (props) => {

    const [charList, setCharList] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offSet, setOffSet] = useState(0);
    const [charEnded, setCharEnded] = useState(false);

    const {getAllCharacters,loading,error} = useMarvelService();

    useEffect(() => {
        onRequest(offSet, true);
    }, []);

    const onRequest = (offSet, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllCharacters(offSet).then(onCharListLoaded);
    };


    const onCharListLoaded = (newCharList) => {
        let ended = false;

        if (newCharList.length < 9) {
            ended = true;
        }

        setCharList(charList => [...charList, ...newCharList]);
        setNewItemLoading(newItemLoading => false);
        setOffSet(offSet => offSet + 9);
        setCharEnded(charEnded => ended);
    };



    const itemRefs = useRef([]);

    const focusOnItem = (id) => {
        itemRefs.current.forEach((item) => item.classList.remove("char__item_selected"));
        itemRefs.current[id].classList.add("char__item_selected");
        itemRefs.current[id].focus();
    };

    function renderItems(arr) {
        const items = arr.map((item, i) => {
            let imgStyle = { objectFit: "cover" };
            if (item.thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg") {
                imgStyle = { objectFit: "unset" };
            }

            return (
                <li
                    className="char__item"
                    key={item.id}
                    ref={(el) => itemRefs.current[i] = el}
                    tabIndex={0}
                    onClick={() => {
                        props.onCharSelected(item.id);
                        focusOnItem(i);
                    }}
                >
                    <img src={item.thumbnail} alt={item.name} style={imgStyle} />
                    <div className="char__name">{item.name}</div>
                </li>
            );
        });

        return <ul className="char__grid">{items}</ul>;
    }

    const items = renderItems(charList);

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading && !newItemLoading ? <Spinner /> : null;

    return (
        <div className="char__list">
            {errorMessage}
            {spinner}
            {items}
            <button
                className="button button__main button__long"
                disabled={newItemLoading}
                style={{ display: charEnded ? "none" : "block" }}
                onClick={() => onRequest(offSet)}
            >
                <div className="inner">load more</div>
            </button>
        </div>
    );

};

CharList.propTypes = {
    onCharSelected: PropTypes.func.isRequired,
};

export { CharList };
