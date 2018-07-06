import React from 'react';
import UlList from "../../../components/UlList";
import ArticleContent from "./ArticleContent";
import ArticleTitle from "./ArticleTitle";

class OtherArticle extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className="wthree">
                <ArticleTitle artTitleClass="col-md-6 wthree-left wow fadeInDown" {...this.props}/>
                <ArticleContent artContentClass="col-md-6 wthree-right wow fadeInDown" {...this.props}/>
                <div className="clearfix"/>
            </div>
        );
    }

}

export default OtherArticle;