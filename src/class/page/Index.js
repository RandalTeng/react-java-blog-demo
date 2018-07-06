import React from 'react';
import {Route} from 'react-router-dom';
import HeaderBottom from "../header/HeaderBottom";
import BannerContent from "../header/BannerContent";
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