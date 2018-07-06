import React from 'react';
import PropTypes from "prop-types";

class ArticleTitle extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        const {
            imgSrc, artLink, artTitle, artAuthor, artTime, artDesc, followList, artTitleClass
        } = this.props;
        return (
            <div className={artTitleClass}>
                <div className="tch-img">
                    <a href={artLink}>
                        <img src={imgSrc} className="img-responsive" alt=""/>
                    </a>
                </div>
            </div>
        );
    }

}

ArticleTitle.propTypes = {
    artTitleClass: PropTypes.string
};

ArticleTitle.defaultProps = {
    artTitleClass: '',
};

export default ArticleTitle;