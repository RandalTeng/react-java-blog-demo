import React from 'react';
import BannerBox from "../header/BannerBox";
import AboutContainer from "../body/about/AboutContainer";

class About extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        document.title = 'About';
    }

    render() {
        return (
            <div>
                <BannerBox/>
                <AboutContainer/>
            </div>
        );
    }

}

export default About;