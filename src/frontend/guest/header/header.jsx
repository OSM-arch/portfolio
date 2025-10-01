import NavBar from "./navBar/navBar"
import "./header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSortUp } from "@fortawesome/free-solid-svg-icons"

export default function Header() {
    return (
        <header id="top">
            <NavBar />
        </header>
    )
}