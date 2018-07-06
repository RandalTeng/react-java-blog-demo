import React from 'react';
import {BrowserRouter, Route, Switch, HashRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import Header from "./class/header/Header";
import HeaderBottom from "./class/header/HeaderBottom";
import Footer from './class/footer/Footer';
import Index from "./class/page/Index";
import About from "./class/page/About";

class Router extends React.Component {

    render() {
        let routes = [
            {
                path: '/',
                exact: true,
                component: Index,
                routes: []
            },
            {
                path: '/index.html',
                component: Index,
            },
            {
                path: '/about.html',
                component: About,
            }
        ];

        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <HeaderBottom/>
                    {renderRoutes(routes)}
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}

export default Router;