import React from 'react';
import {useEffect, useState} from "react";
import {Button, Container, Form} from "react-bootstrap";
import apiFacade from "../apiFacade";
import {getIPInfoUrl} from "../Settings";

const IPInfo = () => {
    const initialState = {city: "", region: "", country: "", loc: "", postal: "", timezone: ""};
    const [IPInfo, setIPInfo] = useState(initialState);
    const [IP, setIP] = useState('');
    const [ErrorMSG, setErrorMSG] = useState('');
    const url = getIPInfoUrl()

    const getIPInfo = () => {
        const options = apiFacade.makeOptions('GET', true)
        fetch(url + IP, options)
            .then(function (response) {
                if (response.status === 401) {
                    setErrorMSG("You are not allowed to use this feature!")
                } else {
                    fetch(url + IP, options)
                        .then(res => res.json())
                        .then(IPInfo => setIPInfo(IPInfo))
                }
            })
            .catch(function (err) {
            });
    }


    return (
        <Container className={"mt-5"}>
            <h1 className={"text-center"}>Search for an IP</h1>
            <div className={"w-50 m-auto"}>
                <div className="input-group">
                    <input className={"w-100"} name="ip" placeholder="Search an IP " value={IP}
                           onChange={(e) => setIP(e.target.value)}/>
                </div>
                <Button className={"w-100"} variant="primary" type="submit" onClick={getIPInfo}>
                    Get IP info
                </Button>
            </div>
            {
                ErrorMSG &&
                <div className="alert alert-danger mt-3" role="alert">
                    {ErrorMSG}
                </div>
            }
            {
                IPInfo.city &&
                <div>
                    <div className="details text-center">
                        <div className="body-text opacity-50">IP address details</div>
                        <h1 className="h1-max">{IPInfo.ip}</h1>
                        <h2 className="h5">
                            {IPInfo.city}, {IPInfo.region}, {IPInfo.country}
                        </h2>
                    </div>

                    <div className="geo-data w-25">
                        <div className="h4 mb-2">Geolocation Data</div>
                        <table className="table table-borderless table-xs geo-table">
                            <tbody>
                            <tr>
                                <td>City</td>
                                <td>{IPInfo.city}</td>
                            </tr>

                            <tr>
                                <td>State</td>
                                <td>{IPInfo.region}</td>
                            </tr>

                            <tr>
                                <td>Country</td>
                                <td>{IPInfo.country}</td>
                            </tr>

                            <tr>
                                <td>Postal</td>
                                <td>{IPInfo.postal}</td>
                            </tr>

                            <tr>
                                <td>Timezone</td>
                                <td>{IPInfo.timezone}</td>
                            </tr>

                            <tr>
                                <td>Coordinates</td>
                                <td>{IPInfo.loc}</td>
                            </tr>
                            <tr>
                                <td>
                                    <a href={`https://www.google.com/maps/search/` + IPInfo.loc} target="_blank">Search
                                        on map
                                    </a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            }
        </Container>);
};

export default IPInfo;