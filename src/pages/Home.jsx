import React from 'react';
import { LinkContainer } from "react-router-bootstrap";
import Button from 'react-bootstrap/Button'; 

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <LinkContainer to="/contact">
                <Button>Go to Contact</Button>
            </LinkContainer>
        </div>
    );
}

export default Home;