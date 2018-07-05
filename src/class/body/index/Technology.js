import React from 'react';
import Container from "../../components/Container";
import FirstNews from "./FirstNews";
import SecondNews from "./SecondNews";

class Technology extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="technology">
                <Container>
                    <div className="col-md-9 technology-left">
                        <div className="tech-no">
                            <FirstNews/>
                            <SecondNews/>
                        </div>
                    </div>
                    <div className="col-md-3 technology-right">
                        <div className="blo-top1">
                            <div className="tech-btm">
                                {/*<div className="search-1 wow fadeInDown" data-wow-duration=".8s" data-wow-delay=".2s">
                                    <form action="#" method="post">
                                        <label>
                                            <input type="search" name="Search" value="Search" onFocus="this.value = '';"
                                                   onBlur="if (this.value === '') {this.value = 'Search';}" required=""/>
                                        </label>
                                        <input type="submit" value=" "/>
                                    </form>
                                </div>*/}
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
                    </div>
                </Container>
            </div>
        );
    }

}

export default Technology;