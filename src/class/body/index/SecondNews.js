import React from 'react';
import SecondNewsBox from "./SecondNewsBox";

class SecondNews extends React.Component {
    constructor(props) {
        super(props);

        this.secondNews = [
            {
                imgSrc: '/assets/images/m4.jpg',
                artLink: '/singlepage.html',
                artTitle: 'Lorem Ipsum is simply',
                artAuthor: 'ADAM ROSE',
                artTime: 'JULY 10 2016',
                artDesc: 'Ut enim ad minim veniam, quis nostrud eiusmod tempor incididunt ut labore et dolore magna ' +
                    'aliqua exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                followList: [
                    {liClass: 'hvr-rectangle-out', aClass: 'fb', link: '#'},
                    {liClass: 'hvr-rectangle-out', aClass: 'pin', link: '#'},
                ],
            },
            {
                imgSrc: '/assets/images/m5.jpg',
                artLink: '/singlepage.html',
                artTitle: 'Lorem Ipsum is simply',
                artAuthor: 'ADAM ROSE',
                artTime: 'JULY 10 2016',
                artDesc: 'Ut enim ad minim veniam, quis nostrud eiusmod tempor incididunt ut labore et dolore magna ' +
                    'aliqua exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                followList: [
                    {liClass: 'hvr-rectangle-out', aClass: 'twit', link: '#'},
                    {liClass: 'hvr-rectangle-out', aClass: 'drib', link: '#'},
                ],
            },
        ];
    }


    render() {
        return (
            <div className="w3ls">
                {this.secondNews.map((news, index) => <SecondNewsBox {...news} key={index}/>)}
                <div className="clearfix"/>
            </div>
        );
    }

}

export default SecondNews;