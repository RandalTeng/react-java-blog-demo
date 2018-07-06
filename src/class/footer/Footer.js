import React from 'react';
import Container from "../components/Container";
import FooterBox from "./FooterBox";

class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
        };
    }

    handleName = (e) => {
        this.setState({name: e.target.value});
    };

    handleEmail = (e) => {
        this.setState({name: e.target.value});
    };

    render() {
        return (
            <div className="footer">
                <Container>
                    <FooterBox>
                        <h4>About Me</h4>
                        <p>Consectetur adipisicing Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod .</p>
                        <img src="/assets/images/t4.jpg" className="img-responsive" alt=""/>
                        <div className="bht1">
                            <a href="/singlepage.html">Read More</a>
                        </div>
                    </FooterBox>
                    <FooterBox>
                        <h4>Latest Tweet</h4>
                        <div className="mid-btm">
                            <p>Sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                eiusmod .</p>
                        </div>
                        <p>Consectetur adipisicing Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod .</p>
                    </FooterBox>
                    <FooterBox>
                        <h4>Newsletter</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt</p>
                        <div className="name">
                            <form action="#" method="post">
                                <input type="text" placeholder="Your Name" value={this.state.name} required
                                       onChange={this.handleName}/>
                                <input type="text" placeholder="Your Email" value={this.state.email} required
                                       onChange={this.handleEmail}/>
                                <input type="submit" defaultValue="Subscribed Now"/>
                            </form>
                        </div>
                        <div className="clearfix"/>
                    </FooterBox>
                    <div className="clearfix"/>
                </Container>
            </div>
        );
    }

}

export default Footer;