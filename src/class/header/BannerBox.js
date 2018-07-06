import React from 'react';
import PropTypes from 'prop-types';

class BannerBox extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className={this.props.className}>
                {this.props.children}
            </div>
        );
    }
}

BannerBox.propTypes = {
    className: PropTypes.oneOf(['banner', 'banner-1'])
};
BannerBox.defaultProps = {
    className: 'banner-1'
};

export default BannerBox;