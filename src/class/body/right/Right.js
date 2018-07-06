import React from 'react';
import Search from "./Search";
import PopularPost from "./PopularPost";
import UlList from "../../components/UlList";

class Right extends React.Component {
    constructor(props) {
        super(props);

        this.popularList = [
            {artLink: '/singlepage.html', imgSrc: '/assets/images/t2.jpg', artTitle: 'Pellentesque dui Maecenas male',},
            {artLink: '/singlepage.html', imgSrc: '/assets/images/m2.jpg', artTitle: 'Pellentesque dui Maecenas male',},
            {artLink: '/singlepage.html', imgSrc: '/assets/images/f2.jpg', artTitle: 'Pellentesque dui Maecenas male',},
            {artLink: '/singlepage.html', imgSrc: '/assets/images/t3.jpg', artTitle: 'Pellentesque dui Maecenas male',},
            {artLink: '/singlepage.html', imgSrc: '/assets/images/m3.jpg', artTitle: 'Pellentesque dui Maecenas male',},
        ];

        this.recommendList = [
            {link: '/singlepage.html', linkName: <img src="/assets/images/t1.jpg" className="img-responsive" alt=""/>},
            {link: '/singlepage.html', linkName: <img src="/assets/images/m1.jpg" className="img-responsive" alt=""/>},
            {link: '/singlepage.html', linkName: <img src="/assets/images/f1.jpg" className="img-responsive" alt=""/>},
            {link: '/singlepage.html', linkName: <img src="/assets/images/m2.jpg" className="img-responsive" alt=""/>},
            {link: '/singlepage.html', linkName: <img src="/assets/images/f2.jpg" className="img-responsive" alt=""/>},
            {link: '/singlepage.html', linkName: <img src="/assets/images/t2.jpg" className="img-responsive" alt=""/>},
            {link: '/singlepage.html', linkName: <img src="/assets/images/f3.jpg" className="img-responsive" alt=""/>},
            {link: '/singlepage.html', linkName: <img src="/assets/images/t3.jpg" className="img-responsive" alt=""/>},
            {link: '/singlepage.html', linkName: <img src="/assets/images/m3.jpg" className="img-responsive" alt=""/>},
        ];
    }


    render() {
        return (
            <div className="col-md-3 technology-right">
                <div className="blo-top1">
                    <div className="tech-btm">
                        <Search/>
                        <h4>Popular Posts </h4>
                        {this.popularList.map((art, index) => <PopularPost {...art} key={index}/>)}
                        <div className="insta wow fadeInDown">
                            <h4>Instagram</h4>
                            <UlList list={this.recommendList}/>
                        </div>

                        <p>Lorem ipsum ex vix illud nonummy, novum tation et his. At vix scripta patrioque
                            scribentur, at pro</p>
                    </div>
                </div>
            </div>
        );
    }

}

export default Right;