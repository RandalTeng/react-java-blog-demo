import React from 'react';
import PropTypes from 'prop-types';

class PicBox extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="col-md-4 col-sm-5 tab-image">
                <img src={this.props.src} className="img-responsive" alt="Wanderer"/>
            </div>
        );
    }

}

PicBox.propTypes = {
    src: PropTypes.string.isRequired,
};

export default PicBox;