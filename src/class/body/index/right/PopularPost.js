import React from 'react';

class PopularPost extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        const {artLink, imgSrc, artTitle,} = this.props;
        return (
            <div className="blog-grids wow fadeInDown">
                <div className="blog-grid-left">
                    <a href={artLink}>
                        <img src={imgSrc} className="img-responsive" alt=""/>
                    </a>
                </div>
                <div className="blog-grid-right">
                    <h5><a href={artLink}>{artTitle}</a></h5>
                </div>
                <div className="clearfix"/>
            </div>
        );
    }

}

export default PopularPost;