import React from 'react';
import PropTypes from 'prop-types';

class LiButton extends React.Component {
    constructor(props) {
        super(props);
        // 可变属性

        // 不可变属性
        this.link = props.link;

        // 鼠标事件
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        if (typeof this.props.onClick === 'function') {
            e.preventDefault();
            this.props.onClick(e, this.link);
        }
    }

    render() {
        return (
            <li className={this.props.liClass} onClick={this.handleClick}>
                <a href={this.props.link} className={this.props.aClass}>
                    {this.props.linkName}
                </a>
            </li>
        )
    }
}

LiButton.propTypes = {
    liClass: PropTypes.string,
    aClass: PropTypes.string,
    linkName: PropTypes.string,
    link: PropTypes.string,
    onClick: PropTypes.func,
};
LiButton.defaultProps = {
    liClass: '',
    aClass: '',
    linkName: '',
    link: '',
    onClick: null
};

export default LiButton;