import React, { useEffect, useState } from "react";
import './css/style.css';

const Tempapp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=6659e27dc779e3baa44115f9d8c31785`
            const response = await fetch(url);
            const resjson = await response.json();
            setCity(resjson.main);
        }
        fetchApi();
    }, [search])
    const inputEvent = (e) => {
        setSearch(e.target.value);
    }
    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input type='search' value={search} className='inputField' onChange={inputEvent} />
                </div>
                {!city ? (<p className="errorMsg">No city Found</p>) : (
                    <div>
                        <div className="info">
                            <h2 className="location">
                                <i className="fa-solid fa-street-view"></i>{search}
                            </h2>
                            <h1 className="temp">{city.temp}°C</h1>
                            <h3 className="tempmin_max">Min Temp :{city.temp_min} | Max Temp: {city.temp_max}</h3>
                        </div>


                        <div className="wave -one"></div>
                        <div className="wave -two"></div>
                        <div className="wave -three"></div>
                    </div>
                )
                }

            </div>
        </>
    )
}
export default Tempapp;