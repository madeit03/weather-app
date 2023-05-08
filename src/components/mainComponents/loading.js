import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { faGear, faCalendar, faClock, faCity, faTemperature1, faWind, faSun, faCheck } from '@fortawesome/free-solid-svg-icons';


const Loading = (props) => {
    return (
        props.statusloading ? <div className="main__content-loading"><FontAwesomeIcon className="gear" icon={faGear} /></div> : null
    )
}
export default Loading;