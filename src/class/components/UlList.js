import React from 'react';
import PropTypes from 'prop-types';
import LiButton from './LiButton';


class UlList extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        const {list, ulClass} = this.props;
        return (
            <ul className={ulClass}>
                {list.map((buttonProps, index) =>
                    <LiButton {...buttonProps} onClick={this.props.handleClick} key={index}/>
                )}
            </ul>
        );
    }
}

UlList.propTypes = {
    ulClass: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.object),
    handleClick: PropTypes.func,
};

UlList.defaultProps = {
    ulClass: '',
    list: [],
    handleClick: null,
};

export default UlList;