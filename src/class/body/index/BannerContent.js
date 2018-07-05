import React from 'react';
import Container from '../../components/Container';

class BannerContent extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="banner">
                <Container>
                    <h2>Contrary to popular belief, Lorem Ipsum simply</h2>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and
                        scrambled it to make Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s</p>
                    <a href="/singlepage">READ MORE</a>
                </Container>
            </div>
        );
    }
}

export default BannerContent;