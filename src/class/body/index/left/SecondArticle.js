import React from 'react';
import UlList from "../../../components/UlList";
import ArticleTitle from "./ArticleTitle";
import ArticleContent from "./ArticleContent";

class SecondArticle extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        const {
            imgSrc, artLink, artTitle, artAuthor, artTime, artDesc, followList,
        } = this.props;

        return (
            <div className="col-md-6 w3ls-left wow fadeInDown" data-wow-duration=".8s" data-wow-delay=".2s">
                <div className="tc-ch">
                    <ArticleTitle {...this.props}/>
                    <ArticleContent {...this.props}/>
                </div>
            </div>
        );
    }

}

export default SecondArticle;