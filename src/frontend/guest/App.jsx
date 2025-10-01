import "./App.css";
import { Provider } from "react-redux";
import Header from "./header/header";
import Main from "./main/main"
import store from "../../store/store/store.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp } from "@fortawesome/free-solid-svg-icons";

export default function App() {

    return (
        <Provider store={store}>
            <Header />
            <Main />
            <a href="#top" className="upFlesh">
                <FontAwesomeIcon icon={faSortUp} size="xl" />
            </a>
        </Provider>
    )
}