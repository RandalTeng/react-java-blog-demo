import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class LiButton extends React.Component {
    constructor(props) {
        super(props);

        this.link = this.props.link;
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
                <Link to={this.props.link} className={this.props.aClass}>
                    {this.props.linkName}
                </Link>
            </li>
        )
    }
}

LiButton.propTypes = {
    liClass: PropTypes.string,
    aClass: PropTypes.string,
    linkName: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]),
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