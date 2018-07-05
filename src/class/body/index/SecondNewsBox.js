import React from 'react';
import UlList from "../../components/UlList";

class SecondNewsBox extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        const {
            imgSrc,
            artLink,
            artTitle,
            artAuthor,
            artTime,
            artDesc,
            followList,
        } = this.props;

        return (
            <div className="col-md-6 w3ls-left wow fadeInDown" data-wow-duration=".8s" data-wow-delay=".2s">
                <div className="tc-ch">
                    <div className="tch-img">
                        <a href={artLink}>
                            <img src={imgSrc} className="img-responsive" alt=""/>
                        </a>
                    </div>

                    <h3><a href={artLink}>{artTitle}</a></h3>
                    <h6>BY <a href={artLink}>{artAuthor} </a>{artTime}.</h6>
                    <p>{artDesc}</p>
                    <div className="bht1">
                        <a href={artLink}>Read More</a>
                    </div>
                    <div className="soci">
                        <UlList list={followList}/>
                    </div>
                    <div className="clearfix"/>
                </div>
            </div>
        );
    }

}

export default SecondNewsBox;