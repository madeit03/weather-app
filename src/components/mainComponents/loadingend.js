import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { faGear, faCalendar, faClock, faCity, faTemperature1, faWind, faSun, faCheck } from '@fortawesome/free-solid-svg-icons';

const LoadingEnd = (props) => {
    return (
        props.statusloadingend ? <div className="main__content-loadingEnd">
            <FontAwesomeIcon className="gear-end" icon={faGear} />
        </div> : null
    )
}
export default LoadingEnd;