import { useSelector } from 'react-redux'
import './work.css'
import { work_Selector } from '../../../../store/selectors/work_Selector'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Work() {

    const projects = useSelector(work_Selector)

    return (
        <div className="workContainer" id="work">
            <div className="title">work.</div>
            <div className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis. Id phasellus dui orci vulputate consequat nulla proin. Id sit scelerisque neque, proin bibendum diam.
            </div>

            <div className="cardsContainter">
                {
                    projects.map((project, key) => (
                        <div className='card' key={key}>
                            <a href={project.url} target='_blank'>
                                <img src={project.image} alt={project.title} className='cardImage' title='visit site' />
                            </a>
                            <div className='date'>{project.date}</div>
                            <div className='cardTitle'>{project.title}</div>
                            <div className='cardParagraph'>
                                {project.details}
                                <a href={project.github} target='_blank' title='GitHub Repository'>
                                    <FontAwesomeIcon icon={faGithubAlt} size="lg" />
                                </a>
                            </div>
                        </div> 
                    ))
                }
            </div>
        </div>
    )
}