import React from "react";
import Container from "react-bootstrap/Container";
import UserHeader from "./UserHeader";

class Home extends React.Component {
    render() {
        return (
            <Container className="p-3">
                <UserHeader headerMessage={this.props.headerMessage}/>
            </Container>
        )
    }
}

export default Home;