import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { faGear, faCalendar, faClock, faCity, faTemperature1, faWind, faSun, faCheck } from '@fortawesome/free-solid-svg-icons';

const GoodValue = (props) => {
    return (
        props.statusgoodvalue ? <div className="main__content-weather">
            <div className="main__content-weatheritem">
                <FontAwesomeIcon icon={faCalendar} className="icon-correct" />
                <p>{props.weatherinfo.data_pomiaru}</p>
            </div>
            <div className="main__content-weatheritem">
                <FontAwesomeIcon icon={faClock} className="icon-correct" />
                <p>{props.weatherinfo.godzina_pomiaru}</p>
            </div>
            <div className="main__content-weatheritem">
                <FontAwesomeIcon icon={faCity} className="icon-correct" />
                <p>{props.weatherinfo.stacja}</p>
            </div>
            <div className="main__content-weatheritem">
                <FontAwesomeIcon icon={faTemperature1} className="icon-correct" />
                <p>{props.weatherinfo.temperatura} </p>
            </div>
            <div className="main__content-weatheritem">
                <FontAwesomeIcon icon={faWind} className="icon-correct" />
                <p>{props.weatherinfo.predkosc_wiatru} km/h</p>
            </div>
            <div className="main__content-weatheritem">
                <FontAwesomeIcon icon={faSun} className="icon-correct" />
                <FontAwesomeIcon icon={faCheck} className="icon-correct-second" />
            </div>



        </div> : null
    )
}
export default GoodValue;