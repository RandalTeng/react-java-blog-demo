import React from 'react';
import {Route} from 'react-router-dom';
import HeaderBottom from "../body/index/HeaderBottom";
import BannerContent from "../body/index/BannerContent";
import TabPic from "../body/index/TabPic";
import Technology from "../body/index/Technology";

class Index extends React.Component {

    render() {
        return (
            <div>
                <HeaderBottom/>
                <BannerContent/>
                <TabPic/>
                <Technology/>
            </div>
        );
    }

}

export default Index;