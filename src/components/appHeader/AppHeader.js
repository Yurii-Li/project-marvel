import "./appHeader.scss";
import "../../style/style.scss";

// Крок 5 Імпортуємо Link(посилання)
import { Link, NavLink } from "react-router-dom";

const AppHeader = () => {
    return (
        <header className="app__header">
            <h1 className="app__title">
                {/* Крок 4 Використовуємо Link і замість href тут використовують to={"шлях до нашого Route"} */}
                <Link to={"/"}>
                    <span>Marvel</span> information portal
                </Link>
            </h1>
            <nav className="app__menu">
                <ul>

                    <li><NavLink to={"/"} style={({ isActive }) => ({ color: isActive ? "#9F0013" : "inherit" })}
                                 end>Characters</NavLink>
                    </li>
                    /
                    <li>
                        <NavLink to={"/comics"} style={({ isActive }) => ({ color: isActive ? "#9F0013" : "inherit" })}
                                 end>Comics</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export { AppHeader };
