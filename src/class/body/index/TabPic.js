import React from 'react';
import Container from "../../components/Container";
import TabPicContent from "./TabPicContent";
import PicTitle from "./PicTitle";

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

        console.log('new constructor.');
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e, activeLink) {
        console.log('click a link');
        console.dir(this);
        let picTitles = this.state.picTitles, tabList = this.state.tabList;

        let newPicTitle = [];

        picTitles.map(function (pic) {
            pic.liClass = pic.link === activeLink ? 'active' : '';
            newPicTitle.push(Object.assign({}, pic));
        });


        tabList.map((tab) => {
            tab.class = "#" + tab.id === activeLink ? 'tab-pane fade active in' : 'tab-pane fade';
        });
        this.setState({
            picTitles: newPicTitle,
            tabList: tabList,
        });
    }

    componentDidUpdate() {

    }

    render() {
        console.log("TabPic render.");
        console.dir(this.state);
        return (
            <div className="services w3l wow fadeInDown" data-wow-duration=".8s" data-wow-delay=".2s">
                <Container>
                    <div className="grid_3 grid_5">
                        <PicTitle picTitles={this.state.picTitles} handleClick={this.handleClick}/>
                        <TabPicContent tabList={this.state.tabList}/>
                    </div>
                </Container>
            </div>
        );
    }


}

export default TabPic;