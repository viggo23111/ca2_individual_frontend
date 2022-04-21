import React, {useEffect, useState} from 'react';

import facade from "../apiFacade";
import {Container} from "react-bootstrap";

const Home = () => {

    function LoggedIn() {
        const [dataFromServer, setDataFromServer] = useState("Loading...")


        return (
            <div>
                <h2>Personal description</h2>
                <h5>The start code was easy to twist over to a new project, a lot of the same code, <br/>then just added some new navigation menu's and wrote the new components.
                    <br/>It is not possible to use the IpInfo without a admin role!</h5>
            </div>
        )

    }

    return (
        <Container>
            <LoggedIn />
        </Container>
    );
};

export default Home;
