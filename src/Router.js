import React from 'react';
import {BrowserRouter, Route, Switch, HashRouter} from 'react-router-dom';
import Model from "./Model";
import Index from "./class/page/Index";

const RouteWithSubRoutes = route => (
    <Route
        path={route.path}
        render={props => (
            // pass the sub-routes down to keep nesting
            <route.component {...props} routes={route.routes} />
        )}
    />
);

class Router extends React.Component {

    render() {
        let routes = [
            {
                path: '/',
                component: Model
            },
            //{
            //    path: '/index',
            //    component: Index,
                //routes: [
                //    {
                //        path: '/header/banner',
                //        component: BannerContent
                //    },
                //    //{
                //    //    path: 'header/no-banner',
                //    //    component: Header
                //    //}
                //]
            //}
        ];

        return (
            <BrowserRouter>
                <Switch>
                    {routes.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route}/>
                    ))}
                    {/*<Route path="/" component={Header} />*/}
                    {/*<Route path="/header" component={Header}/>*/}
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;