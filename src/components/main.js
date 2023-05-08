import './main.css'
import React from 'react';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { faGear, faCalendar, faClock, faCity, faTemperature1, faWind, faSun, faCheck } from '@fortawesome/free-solid-svg-icons';

import Loading from './mainComponents/loading';
import LoadingEnd from './mainComponents/loadingend';
import BadValue from './mainComponents/badvalue';
import GoodValue from './mainComponents/goodvalue'
const Main = () => {
    const [flag, setFlag] = React.useState(true);
    const [valueButton, setValueButton] = React.useState("katowice")
    const [loading, setLoading] = React.useState(false);
    const [loadingEnd, setLoadingEnd] = React.useState(false);
    const [badValue, setBadValue] = React.useState(false);
    const [goodValue, setGoodValue] = React.useState(false);
    const [weather, setWeather] = React.useState({
        cisnienie: "1016",
        data_pomiaru: "2023-05-01",
        godzina_pomiaru: "17",
        id_stacji: "12560",
        kierunek_wiatru: "100",
        predkosc_wiatru: "4",
        stacja: "Katowice",
        suma_opadu: "0",
        temperatura: "17",
        wilgotnosc_wzgledna: "33.5",
    })
    const handleChange = (e) => {
        setValueButton(e.target.value);
    }
    const formFunc = (e) => {
        e.preventDefault();
    }
    const handleClick = (e) => {
        setValueButton("");
        setGoodValue(false);
        setBadValue(false);
        setLoading(true);
        if (valueButton.length > 0) {

            new Promise((resolve, reject) => {
                let repairedValueButton = valueButton;
                repairedValueButton = repairedValueButton.toLowerCase();
                let secondString = "";
                for (let i = 0; i < repairedValueButton.length; i++) {
                    switch (repairedValueButton[i]) {
                        case 'ó': {
                            secondString += 'o';
                        }
                            break;
                        case 'ś': {
                            secondString += 's';
                        }
                            break;
                        case 'ć': {
                            secondString += 'c';
                        }
                            break;
                        case 'ż': {
                            secondString += 'z';
                        }
                        case 'ź': {
                            secondString += 'z'
                        }
                        case 'ą': {
                            secondString += 'a';
                        }
                            break;
                        case 'ę': {
                            secondString += 'e';
                        }
                        case 'ń': {
                            secondString += 'n'
                        }
                            break;
                        default: {
                            secondString += repairedValueButton[i];
                        }
                    }
                }
                repairedValueButton = secondString;
                const link = "https://danepubliczne.imgw.pl/api/data/synop/station/" + repairedValueButton;
                resolve(link);
            })

                .then((link) => {
                    fetch(link, {
                        method: "GET",
                    })
                        .then((res) => {
                            console.log("status:", res.status);
                            if (res.status == 200) {
                                console.log("xd")

                                new Promise((resolve, reject) => {
                                    const resJson = res.json();
                                    setTimeout((res) => {
                                        // setLoading(false);
                                        console.log("setloading false")
                                        resolve(resJson)

                                    }, 1500)
                                })
                                    .then((res) => {
                                        // setLoadingEnd(true);
                                        console.log("przekazany res json ", res);
                                        const newWeather = {
                                            cisnienie: res.cisnienie,
                                            data_pomiaru: res.data_pomiaru,
                                            godzina_pomiaru: res.godzina_pomiaru,
                                            id_stacji: res.id_stacji,
                                            kierunek_wiatru: res.kierunek_wiatru,
                                            predkosc_wiatru: res.predkosc_wiatru,
                                            stacja: res.stacja,
                                            suma_opadu: res.suma_opadu,
                                            temperatura: res.temperatura,
                                            wilgotnosc_wzgledna: res.wilgotnosc_wzgledna,
                                        }
                                        return (newWeather)
                                    })
                                    .then((newWeather) => {
                                        setWeather(newWeather);
                                        console.log("koniec animacji up")
                                        setLoading(false);

                                    })
                                    .then(() => {
                                        setLoadingEnd(true);
                                    })
                                    .then((res) => {
                                        setTimeout(() => {
                                            setLoadingEnd(false);
                                            setGoodValue(true);
                                        }, 1000)
                                    })



                            }
                            else {

                                new Promise((resolve, reject) => {
                                    setTimeout(() => {
                                        setLoading(false);
                                        resolve();

                                    }, 700)


                                })
                                    .then(() => {
                                        setLoadingEnd(true);

                                    })
                                    .then(() => {
                                        setTimeout(() => {
                                            setLoadingEnd(false)


                                        }, 1500)
                                    })
                                    .then(() => {
                                        setTimeout(() => {
                                            setLoadingEnd(false);
                                            setBadValue(true);
                                        }, 1200)

                                    })
                            }
                        })



                })

        }
        else {
            setTimeout(() => {
                setLoading(false);
                setBadValue(true);
            }, 1000);
        }

    }
    React.useEffect(() => {

        if (flag == true) {
            handleClick();
            console.log("useEffect");
        }
        setFlag(false);
    });
    return (

        < div className="header" >
            <form onSubmit={formFunc}>
                <input className="header__input" type="text" placeholder="np.Katowice" value={valueButton} onChange={handleChange} />
                <input className="header__submit" type="submit" value="Search!" onClick={handleClick} />
            </form>
            <div className="main__content">
                <Loading statusloading={loading} />
                <LoadingEnd statusloadingend={loadingEnd} />
                <BadValue statusbadvalue={badValue} />
                <GoodValue statusgoodvalue={goodValue} weatherinfo={weather} />
            </div>

        </div >
    )
}
export default Main;