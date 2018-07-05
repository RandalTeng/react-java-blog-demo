import React from 'react';
import Container from '../components/Container';
import HeaderSearch from './HeaderSearch';
import MoreNav from './MoreNav';
import MenuNav from './MenuNav';
import FollowList from './FollowList';

class Header extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="header" id="ban">
                <Container>
                    <div className="head-left wow fadeInLeft animated animated" data-wow-delay=".5s"
                         style={{visibility: "visible", animationDelay: "0.5s", animationName: "fadeInLeft",}}>
                        <HeaderSearch/>
                    </div>

                    <div className="header_right wow fadeInLeft animated animated" data-wow-delay=".5s"
                         style={{visibility: "visible", animationDelay: "0.5s", animationName: "fadeInLeft",}}>
                        <div className="navbar navbar-default">
                            <MoreNav/>
                            <MenuNav/>
                        </div>
                    </div>

                    <div className="nav navbar-nav navbar-right social-icons wow fadeInRight animated animated"
                         data-wow-delay=".5s"
                         style={{visibility: "visible", animationDelay: "0.5s", animationName: "fadeInRight",}}>
                        <FollowList/>
                    </div>
                </Container>
            </div>
        );
    }

}

export default Header;