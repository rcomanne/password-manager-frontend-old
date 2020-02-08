import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

class UserHeader extends React.Component {
    render() {
        return (
            <Jumbotron>
                <h1 className="header text-center">
                    {this.props.headerMessage}
                </h1>
            </Jumbotron>
        )
    }
}

export default UserHeader;