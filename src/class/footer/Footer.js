import React from 'react';
import Container from "../components/Container";

class Footer extends React.Component {


    render() {
        return (
            <div className="footer">
                <Container>
                    <div className="col-md-4 footer-left wow fadeInDown" data-wow-duration=".8s" data-wow-delay=".2s">
                        <h4>About Me</h4>
                        <p>Consectetur adipisicing Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod .</p>
                        <img src="/assets/images/t4.jpg" className="img-responsive" alt=""/>
                        <div className="bht1">
                            <a href="/singlepage.html">Read More</a>
                        </div>
                    </div>
                    <div className="col-md-4 footer-middle wow fadeInDown" data-wow-duration=".8s" data-wow-delay=".2s">
                        <h4>Latest Tweet</h4>
                        <div className="mid-btm">
                            <p>Sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                eiusmod .</p>
                        </div>
                        <p>Consectetur adipisicing Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod .</p>
                    </div>
                    <div className="col-md-4 footer-right wow fadeInDown" data-wow-duration=".8s" data-wow-delay=".2s">
                        <h4>Newsletter</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt</p>
                        <div className="name">
                            <form action="#" method="post">
                                <input type="text" placeholder="Your Name" required=""/>
                                <input type="text" placeholder="Your Email" required=""/>
                                <input type="submit" defaultValue="Subscribed Now"/>
                            </form>
                        </div>
                        <div className="clearfix"/>
                    </div>
                    <div className="clearfix"/>
                </Container>
            </div>
        );
    }

}

export default Footer;