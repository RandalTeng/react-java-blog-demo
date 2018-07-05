import React from 'react';
import LiButton from '../components/LiButton';


class MenuNav extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            menuList: [
                {link: 'index.html', linkName: 'Home', liClass: 'active act'},
                {link: 'about.html', linkName: 'About',},
                {link: 'features.html', linkName: 'Features',},
                {link: 'travel.html', linkName: 'Travel',},
                {link: 'fashion.html', linkName: 'Fashion',},
                {link: 'music.html', linkName: 'Music',},
                {link: 'codes.html', linkName: 'Codes',},
                {link: 'contact.html', linkName: 'Contact',},
            ],
        };

        this.activeClass = 'active act';

        // 鼠标事件
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {

    }

    handleClick(e, activeLink) {
        let menuList = this.state.menuList, activeClass = this.activeClass;
        menuList.map(function (menu) {
            menu.liClass = menu.link === activeLink ? activeClass : '';
        });
        this.setState({
            menuList: menuList,
        });
    }

    render() {
        return (
            <div className="collapse navbar-collapse nav-wil" id="bs-example-navbar-collapse-1">
                <nav className="link-effect-7" id="link-effect-7">
                    <ul className="nav navbar-nav">
                        {this.state.menuList.map((menu) =>
                            <LiButton
                                liClass={typeof menu.liClass === "undefined" ? '' : menu.liClass}
                                link={menu.link}
                                linkName={menu.linkName}
                                onClick={this.handleClick}
                                key={menu.link}
                            />
                        )}
                    </ul>
                </nav>
            </div>
        );
    }
}

export default MenuNav;