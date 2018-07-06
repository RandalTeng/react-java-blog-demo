import React from 'react';
import BannerContent from "../body/index/BannerContent";
import TabPic from "../body/index/TabPic";
import IndexContainer from "../body/index/IndexContainer";

class Index extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        document.title = 'Home';
    }

    render() {
        return (
            <div>
                <BannerContent/>
                <TabPic/>
                <IndexContainer/>
            </div>
        );
    }

}

export default Index;