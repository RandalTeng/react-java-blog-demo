import React from 'react';
import {Link} from 'react-router-dom';
import BannerBox from "../../header/BannerBox";
import Container from "../../components/Container";

class BannerContent extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <BannerBox className="banner">
                <Container>
                    <h2>Contrary to popular belief, Lorem Ipsum simply</h2>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and
                        scrambled it to make Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s</p>
                    <Link to="/article/1.html">READ MORE</Link>
                </Container>
            </BannerBox>
        );
    }

}

export default BannerContent;