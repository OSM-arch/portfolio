import { useSelector } from 'react-redux';
import './home.css'
import { home_Selector } from '../../../../store/selectors/home_Selector';

export default function Home() {

    const home = useSelector(home_Selector);

    return (
        <div className='homeContainer' id='home'>
            <div className='homeText'>
                <span className='span1'>Hello, I’m {home.fullname},</span>
                <span className='span2'>Web Application Developper</span>
                <span className='span3'>based in {home.basedIn}.</span>
                <button className='button'><a href="#" target='_blank'>Resume</a></button>
            </div>
            <div className='imageContainer'>
                <img src='src\assets\unknown.jpg' alt='profile image' />
            </div>
        </div>
    )
}