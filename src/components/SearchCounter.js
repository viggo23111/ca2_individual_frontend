import React from 'react';import {useEffect, useState} from "react";
import {Button, Container, Form} from "react-bootstrap";
import { getCounterUrl } from "../Settings";

const SearchCounter = () => {
    const [counter,setCounter] =useState('');
    const url=getCounterUrl();

    const getCounter = () =>{
        fetch(url,{
            method: 'GET', // or 'PUT'
        })
            .then(res => res.json())
            .then(counter => setCounter(counter))
            .catch((error) =>{
                console.log(error.status)
            })
    }
    useEffect(() => {
        getCounter()
    },[])




    return(
        <Container className={"mt-5"}>
            <div className={"w-50 m-auto text-center"}>
                <h1>Amount of search request</h1>
                <h3>{counter}</h3>
            </div>
        </Container>);
};

export default SearchCounter;