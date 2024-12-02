import { LinkContainer } from "react-router-bootstrap";

function Home() {
    return (
        <h1>Home</h1>
        <LinkContainer to="/contact">
            <Button>naar container</Button>
        </LinkContainer>


    )

}

export default Home;