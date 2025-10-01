import { useSelector } from 'react-redux'
import './about.css'
import { about_Selector } from '../../../../store/selectors/about_Selector.js'

export default function About() {

    const about = useSelector(about_Selector);

    return (
        <div className="aboutContainer" id="about">
            <div className="title">about.</div>
            <div className="paragraph">
                {about.aboutMe}
            </div>
            <div className='listContainer'>
                <ul className='list'>
                    {
                        about.education.map((education, key) => (
                            <li key={key}>
                                <span className='listTitle'>{education.date}</span>
                                <p className='listText'>{education.details}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}