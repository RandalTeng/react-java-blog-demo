import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Header from "./class/header/Header";
import Index from "./class/page/Index";
import Footer from "./class/footer/Footer";


class Model extends React.Component {


    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route path="/" component={Index}/>
                </Switch>
                <Footer/>
            </div>
        );
    }

}

export default Model