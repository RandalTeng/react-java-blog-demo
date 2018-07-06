import React from 'react';
import Container from '../components/Container';

class HeaderBottom extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className="header-bottom">
                <Container>
                    <div className="logo wow fadeInDown" data-wow-duration=".8s" data-wow-delay=".2s">
                        <h1><a href="/#">STYLE BLOG</a></h1>
                        <p><label className="of"/>LET'S MAKE A PERFECT STYLE<label className="on"/></p>
                        {/*<TimeClock/> Hello Clock!*/}
                    </div>
                </Container>
            </div>
        );
    }

}

export default HeaderBottom;