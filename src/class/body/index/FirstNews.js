import React from 'react';
import UlList from "../../components/UlList";

class FirstNews extends React.Component {
    constructor(props) {
        super(props);

        this.followList = [
            {liClass: 'hvr-rectangle-out', link: '#', aClass: 'fb'},
            {liClass: 'hvr-rectangle-out', link: '#', aClass: 'twit'},
            {liClass: 'hvr-rectangle-out', link: '#', aClass: 'goog'},
            {liClass: 'hvr-rectangle-out', link: '#', aClass: 'pin'},
            {liClass: 'hvr-rectangle-out', link: '#', aClass: 'drib'},
        ];

    }

    render() {
        return (
            <div className="tc-ch wow fadeInDown" data-wow-duration=".8s" data-wow-delay=".2s">

                <div className="tch-img">
                    <a href="/singlepage.html">
                        <img src="/assets/images/t4.jpg" className="img-responsive" alt=""/>
                    </a>
                </div>

                <h3><a href="/singlepage.html">Lorem Ipsum is simply</a></h3>
                <h6>BY <a href="/singlepage.html">ADAM ROSE </a>JULY 10 2016.</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud eiusmod tempor incididunt ut labore et dolore magna aliqua
                    exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat.</p>
                <p>Ut enim ad minim veniam, quis nostrud eiusmod tempor incididunt ut labore et dolore magna aliqua
                    exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.</p>
                <div className="bht1">
                    <a href="/singlepage.html">Continue Reading</a>
                </div>
                <div className="soci">
                    <UlList list={this.followList}/>
                </div>
                <div className="clearfix"/>
            </div>
        );
    }

}

export default FirstNews;