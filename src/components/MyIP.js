import React from 'react';import {useEffect, useState} from "react";
import {Button, Container, Form} from "react-bootstrap";

const MyIP = () => {
    const [IP,setIP] = useState();

    const getIP = () =>{
        fetch("https://api.ipify.org/?format=json",{
            method: 'GET', // or 'PUT'
        })
            .then(res => res.json())
            .then(IP => setIP(IP))
            .catch((error) =>{
                console.log("error")
            })
    }
    getIP()



    return(


        <Container className={"mt-5"}>
            {
                IP &&
                <div className={"w-50 m-auto text-center"}>
                    <h1>Your IP address:</h1>
                    <h4>{IP.ip}</h4>
                </div>
            }
        </Container>);
};

export default MyIP;