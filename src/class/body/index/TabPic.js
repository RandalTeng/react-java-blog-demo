import React from 'react';
import Container from "../../components/Container";
import TabPicContent from "./TabPicContent";
import UlList from "../../components/UlList";

class TabPic extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            picTitles: [
                {
                    liClass: 'active',
                    link: '#expeditions',
                    linkName: 'FASHION',
                },
                {
                    liClass: '',
                    link: '#safari',
                    linkName: 'TRAVEL',
                },
                {
                    liClass: '',
                    link: '#trekking',
                    linkName: 'MUSIC',
                }
            ],
            tabList: [
                {
                    id: 'expeditions',
                    class: 'tab-pane fade active in',
                    picList: [
                        {
                            location: '/assets/images/f2.jpg',
                        },
                        {
                            location: '/assets/images/f4.jpg',
                        },
                        {
                            location: '/assets/images/f3.jpg',
                        },
                    ]
                },
                {
                    id: 'safari',
                    class: 'tab-pane fade',
                    picList: [
                        {
                            location: '/assets/images/t1.jpg',
                        },
                        {
                            location: '/assets/images/t2.jpg',
                        },
                        {
                            location: '/assets/images/t3.jpg',
                        },
                    ]
                },
                {
                    id: 'trekking',
                    class: 'tab-pane fade',
                    picList: [
                        {
                            location: '/assets/images/m2.jpg',
                        },
                        {
                            location: '/assets/images/m1.jpg',
                        },
                        {
                            location: '/assets/images/m3.jpg',
                        },
                    ]
                },
            ],
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e, activeLink) {
        let picTitles = this.state.picTitles, tabList = this.state.tabList;

        picTitles.forEach((pic) => pic.liClass = pic.link === activeLink ? 'active' : '');
        tabList.forEach((tab) => tab.class = "#" + tab.id === activeLink ? 'tab-pane fade active in' : 'tab-pane fade');

        this.setState({
            picTitles: picTitles,
            tabList: tabList,
        });
    }

    render() {
        return (
            <div className="services w3l wow fadeInDown" data-wow-duration=".8s" data-wow-delay=".2s">
                <Container>
                    <div className="grid_3 grid_5">
                        <UlList ulClass="nav nav-tabs" list={this.state.picTitles} handleClick={this.handleClick}/>
                        <TabPicContent tabList={this.state.tabList}/>
                    </div>
                </Container>
            </div>
        );
    }
}

export default TabPic;