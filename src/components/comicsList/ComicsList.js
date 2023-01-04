import './comicsList.scss';
import uw from '../../resources/img/UW.png';
import xMen from '../../resources/img/x-men.png';
import { useEffect, useState } from "react";
import { useMarvelService } from "../../services";
import { CharList } from "../charList/CharList";
import { ErrorMessage } from "../errorMessage/ErrorMessage";
import { Spinner } from "../spinner/Spinner";

const ComicsList = () => {

    const [comicsList, setComicsList] = useState([])
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offSet, setOffSet] = useState(0);
    const [comicsEnded, setComicsEnded] = useState(false)

    const {loading,error,getAllComics} = useMarvelService();

    useEffect(()=>{
        onRequest(offSet, true)
    },[])

    const onRequest = (offSet, initial)=>{
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllComics(offSet).then(onComicsListLoaded)
    }

    const onComicsListLoaded = (newComicsList) =>{
        let ended = false

        if(newComicsList.length < 8){
            ended= true
        }

        setComicsList(comicsList => [...comicsList, ...newComicsList])
        setNewItemLoading(newItemLoading => false)
        setOffSet(offSet + 8)
        setComicsEnded(comicsEnded => ended)

    }

    function renderItems(arr) {

        const items = arr.map((item, i)=>{
            let imgStyle = { objectFit: "cover" };
            if (item.thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg") {
                imgStyle = { objectFit: "unset" };
            }

            return (
                <li className="comics__item" key={i}>
                    <a href="#">
                        <img src={item.thumbnail} alt="ultimate war" className="comics__item-img" style={imgStyle}/>
                        <div className="comics__item-name">{item.title}</div>
                        <div className="comics__item-price">{item.price}</div>
                    </a>
                </li>
            )
        })

        return <ul className="comics__grid">{items}</ul>
    }

    const items = renderItems(comicsList);

    const errorMessage = error ? <ErrorMessage/> : null
    const spinner = loading && !newItemLoading ? <Spinner/> : null

    return (
        <div className="comics__list">
            {errorMessage}
            {spinner}
            {items}
            <button className="button button__main button__long" disabled={newItemLoading} onClick={()=> onRequest(offSet)} style={{display : comicsEnded ? "none" : "block"}}>
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

export  {ComicsList};
