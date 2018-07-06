import React from 'react';
import PropTypes from 'prop-types';
import UlList from "../../../components/UlList";

class ArticleContent extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        const {
            imgSrc, artLink, artTitle, artAuthor, artTime, artDesc, followList, artContentClass
        } = this.props;

        return (
            <div className={artContentClass}>
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
        );
    }

}

ArticleContent.propTypes = {
    artContentClass: PropTypes.string
};

ArticleContent.defaultProps = {
    artContentClass: '',
};

export default ArticleContent;