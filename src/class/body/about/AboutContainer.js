import React from 'react';
import Container from "../../components/Container";
import Right from "../right/Right";
import Welcome from "./Welcome";
import Team from "./Team";

class AboutContainer extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="technology">
                <Container>
                    <div className="col-md-9 technology-left">
                        <div className="w3agile-1">
                            <Welcome/>
                            <Team/>
                        </div>
                    </div>
                    <Right/>
                </Container>
            </div>
        );
    }

}

export default AboutContainer;