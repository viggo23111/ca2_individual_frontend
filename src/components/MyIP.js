import React from 'react';import {useEffect, useState} from "react";
import {Button, Container, Form} from "react-bootstrap";
import {getMyIPUrl} from "../Settings";

const MyIP = () => {
    const [IP,setIP] = useState();
    const url=getMyIPUrl();

    const getIP = () =>{
        fetch(url,{
            method: 'GET', // or 'PUT'
        })
            .then(res => res.json())
            .then(IP => setIP(IP))
            .catch((error) =>{
                console.log("error")
            })
    }
    useEffect(() => {
        getIP()
    },[])


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