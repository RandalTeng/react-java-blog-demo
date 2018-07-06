import React from 'react';
import Container from "../../components/Container";
import Left from "./left/Left";
import Right from "./right/Right";

class Technology extends React.Component {
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
            <div className="technology">
                <Container>
                    <Left/>
                    <Right/>
                    {/*<div className="col-md-3 technology-right">
                        <div className="blo-top1">
                            <div className="tech-btm">
                                <div className="search-1 wow fadeInDown" data-wow-duration=".8s" data-wow-delay=".2s">
                                    <form action="#" method="post">
                                        <label>
                                            <input type="search" name="Search" value="Search" onFocus="this.value = '';"
                                                   onBlur="if (this.value === '') {this.value = 'Search';}" required=""/>
                                        </label>
                                        <input type="submit" value=" "/>
                                    </form>
                                </div>
                                <h4>Popular Posts </h4>
                                <div className="blog-grids wow fadeInDown" data-wow-duration=".8s" data-wow-delay=".2s">
                                    <div className="blog-grid-left">
                                        <a href="singlepage.html">
                                            <img src="/assets/images/t2.jpg" className="img-responsive" alt=""/>
                                        </a>
                                    </div>
                                    <div className="blog-grid-right">
                                        <h5><a href="singlepage.html">Pellentesque dui Maecenas male</a></h5>
                                    </div>
                                    <div className="clearfix"/>
                                </div>
                                <div className="blog-grids wow fadeInDown" data-wow-duration=".8s" data-wow-delay=".2s">
                                    <div className="blog-grid-left">
                                        <a href="singlepage.html">
                                            <img src="/assets/images/m2.jpg" className="img-responsive" alt=""/>
                                        </a>
                                    </div>
                                    <div className="blog-grid-right">
                                        <h5><a href="singlepage.html">Pellentesque dui Maecenas male</a></h5>
                                    </div>
                                    <div className="clearfix"/>
                                </div>
                                <div className="blog-grids wow fadeInDown" data-wow-duration=".8s" data-wow-delay=".2s">
                                    <div className="blog-grid-left">
                                        <a href="singlepage.html">
                                            <img src="/assets/images/f2.jpg" className="img-responsive" alt=""/>
                                        </a>
                                    </div>
                                    <div className="blog-grid-right">

                                        <h5><a href="singlepage.html">Pellentesque dui Maecenas male</a></h5>
                                    </div>
                                    <div className="clearfix"/>
                                </div>
                                <div className="blog-grids wow fadeInDown" data-wow-duration=".8s" data-wow-delay=".2s">
                                    <div className="blog-grid-left">
                                        <a href="singlepage.html">
                                            <img src="/assets/images/t3.jpg" className="img-responsive" alt=""/>
                                        </a>
                                    </div>
                                    <div className="blog-grid-right">
                                        <h5><a href="singlepage.html">Pellentesque dui Maecenas male</a></h5>
                                    </div>
                                    <div className="clearfix"/>
                                </div>
                                <div className="blog-grids wow fadeInDown" data-wow-duration=".8s" data-wow-delay=".2s">
                                    <div className="blog-grid-left">
                                        <a href="singlepage.html">
                                            <img src="/assets/images/m3.jpg" className="img-responsive" alt=""/>
                                        </a>
                                    </div>
                                    <div className="blog-grid-right">
                                        <h5><a href="singlepage.html">Pellentesque dui Maecenas male</a></h5>
                                    </div>
                                    <div className="clearfix"/>
                                </div>


                                <div className="insta wow fadeInDown" data-wow-duration=".8s" data-wow-delay=".2s">
                                    <h4>Instagram</h4>
                                    <ul>
                                        <li>
                                            <a href="singlepage.html">
                                                <img src="/assets/images/t1.jpg" className="img-responsive" alt=""/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="singlepage.html">
                                                <img src="/assets/images/m1.jpg" className="img-responsive" alt=""/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="singlepage.html">
                                                <img src="/assets/images/f1.jpg" className="img-responsive" alt=""/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="singlepage.html">
                                                <img src="/assets/images/m2.jpg" className="img-responsive" alt=""/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="singlepage.html">
                                                <img src="/assets/images/f2.jpg" className="img-responsive" alt=""/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="singlepage.html">
                                                <img src="/assets/images/t2.jpg" className="img-responsive" alt=""/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="singlepage.html">
                                                <img src="/assets/images/f3.jpg" className="img-responsive" alt=""/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="singlepage.html">
                                                <img src="/assets/images/t3.jpg" className="img-responsive" alt=""/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="singlepage.html">
                                                <img src="/assets/images/m3.jpg" className="img-responsive" alt=""/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <p>Lorem ipsum ex vix illud nonummy, novum tation et his. At vix scripta patrioque
                                    scribentur, at pro</p>
                            </div>
                        </div>
                    </div>*/}
                </Container>
            </div>
        );
    }

}

export default Technology;