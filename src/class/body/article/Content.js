import React from 'react';

class Content extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        const {
            title,
            bigPicSrc,
            secondaryTitle,
            content,
            createTime,
            commentsCount,
            readerCount,
        } = this.props;

        return (
            <div>
                <h2 className="w3">{title}</h2>
                <div className="single">
                    <img src={bigPicSrc} className="img-responsive" alt=""/>
                    <div className="b-bottom">
                        <h5 className="top">{secondaryTitle}</h5>
                        <p className="sub">{content}</p>
                        <p>
                            {createTime}
                            <a className="span_link" href="#">
                                <span className="glyphicon glyphicon-comment"/>{commentsCount}
                            </a>
                            <a className="span_link" href="#">
                                <span className="glyphicon glyphicon-eye-open"/>{readerCount}
                            </a>
                        </p>

                    </div>
                </div>
            </div>
        );
    }

}

export default Content;