import React from 'react';
import {Route} from 'react-router-dom';
import HeaderBottom from "../banner/HeaderBottom";
import BannerContent from "../banner/BannerContent";
import TabPic from "../components/TabPic";

class Index extends React.Component {

    render() {
        return (
            <div>
                <HeaderBottom/>
                <BannerContent/>
                <TabPic/>
            </div>
        );
    }

}

export default Index;