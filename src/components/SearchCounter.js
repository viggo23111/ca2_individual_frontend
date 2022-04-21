import React from 'react';import {useEffect, useState} from "react";
import {Button, Container, Form} from "react-bootstrap";

const SearchCounter = () => {
    const [counter,setCounter] =useState('');

    const getCounter = () =>{
        fetch("http://localhost:8080/ca2_war_exploded/api/ip/count",{
            method: 'GET', // or 'PUT'
        })
            .then(res => res.json())
            .then(counter => setCounter(counter))
            .catch((error) =>{
                console.log(error.status)
            })
    }
    getCounter()



    return(
        <Container className={"mt-5"}>
            <div className={"w-50 m-auto text-center"}>
                <h1>Amount of search request</h1>
                <h3>{counter}</h3>
            </div>
        </Container>);
};

export default SearchCounter;