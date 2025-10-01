import './navBar.css';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavBar() {
    return (
        <>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between p-4 w-full">
                {/* Name */}
                <div className="name text-center md:text-left mb-4 md:mb-0">
                    Oussama ElMohtadi
                </div>

                {/* Navigation */}
                <nav className="mb-4 md:mb-0">
                    <ul className="flex flex-col md:flex-row gap-4 md:gap-6 text-center md:text-left">
                        <li><a href="#home" className="hover:text-blue-800">Home</a></li>
                        <li><a href="#about" className="hover:text-blue-800">About</a></li>
                        <li><a href="#work" className="hover:text-blue-800">Work</a></li>
                    </ul>
                </nav>

                {/* Contact */}
                <div className="contact flex justify-center md:justify-end gap-6">
                    <a href="https://mail.google.com" target="_blank"><FontAwesomeIcon icon={faEnvelope} size="lg" /></a>
                    <a href="https://github.com/" target="_blank"><FontAwesomeIcon icon={faGithub} size="lg" /></a>
                    <a href="https://www.linkedin.com" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="lg" /></a>
                </div>
            </div>
        </>
    )
}