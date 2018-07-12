import React from 'react';
import PropTypes from 'prop-types';

class Comment extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {
            headImgSrc,
            content,
            createTime,
            isReply,
            subComments,
        } = this.props;

        return (
            <div className="media response-info">
                <div className="media-left response-text-left">
                    <a href="#">
                        <img src={headImgSrc} className="img-responsive" alt=""/>
                    </a>
                </div>
                <div className="media-body response-text-right">
                    <p>{content}</p>
                    <ul>
                        <li>{createTime}</li>
                        <li><a href="#">Reply</a></li>
                    </ul>
                    {isReply ? '' : subComments.map((subComment, index) => (
                        <Comment {...subComment} key={index}/>
                    ))}
                </div>
                <div className="clearfix"/>
            </div>
        );
    }

}

Comment.propTypes = {
    headImgSrc: PropTypes.string,
    content: PropTypes.string,
    createTime: PropTypes.string,
    isReply: PropTypes.bool,
    subComments: PropTypes.array,
};
Comment.defaultProps = {
    headImgSrc: '',
    content: '',
    createTime: '',
    isReply: true,
    subComments: [],
};

export default Comment;