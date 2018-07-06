import React from 'react';
import FirstArticle from "./left/FirstArticle";
import SecondArticle from "./left/SecondArticle";
import OtherArticle from "./left/OtherArticle";

class Left extends React.Component {
    constructor(props) {
        super(props);

        this.secondArticles = [
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
        this.otherArticles = [
            {
                imgSrc: '/assets/images/f1.jpg',
                artLink: '/singlepage.html',
                artTitle: 'Lorem Ipsum is simply',
                artAuthor: 'ADAM ROSE',
                artTime: 'JULY 10 2016',
                artDesc: 'Ut enim ad minim veniam, quis nostrud eiusmod tempor incididunt ut labore et dolore magna aliqua' +
                'exercitation ullamco laboris.',
                followList: [
                    {liClass: 'hvr-rectangle-out', aClass: 'twit', link: '#'},
                    {liClass: 'hvr-rectangle-out', aClass: 'pin', link: '#'},
                ]
            },
            {
                imgSrc: '/assets/images/f2.jpg',
                artLink: '/singlepage.html',
                artTitle: 'Lorem Ipsum is simply',
                artAuthor: 'ADAM ROSE',
                artTime: 'JULY 10 2016',
                artDesc: 'Ut enim ad minim veniam, quis nostrud eiusmod tempor incididunt ut labore et dolore magna aliqua' +
                'exercitation ullamco laboris.',
                followList: [
                    {liClass: 'hvr-rectangle-out', aClass: 'goog', link: '#'},
                    {liClass: 'hvr-rectangle-out', aClass: 'fb', link: '#'},
                ]
            },
            {
                imgSrc: '/assets/images/f3.jpg',
                artLink: '/singlepage.html',
                artTitle: 'Lorem Ipsum is simply',
                artAuthor: 'ADAM ROSE',
                artTime: 'JULY 10 2016',
                artDesc: 'Ut enim ad minim veniam, quis nostrud eiusmod tempor incididunt ut labore et dolore magna aliqua' +
                'exercitation ullamco laboris.',
                followList: [
                    {liClass: 'hvr-rectangle-out', aClass: 'drib', link: '#'},
                    {liClass: 'hvr-rectangle-out', aClass: 'goog', link: '#'},
                ]
            },
        ];
    }


    render() {
        return (
            <div className="col-md-9 technology-left">
                <div className="tech-no">
                    <FirstArticle/>
                    <div className="w3ls">
                        {this.secondArticles.map((news, index) => <SecondArticle {...news} key={index}/>)}
                        <div className="clearfix"/>
                    </div>
                    {this.otherArticles.map((article, index) => <OtherArticle {...article} key={index}/>)}
                </div>
            </div>
        );
    }

}

export default Left;