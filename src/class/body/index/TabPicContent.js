import React from 'react';
import PropTypes from 'prop-types';
import TabBox from './TabBox';

class TabPicContent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="tab-content">
                {this.props.tabList.map((tab, index) => (
                    <TabBox className={tab.class} id={tab.id} picList={tab.picList} key={tab.id}/>
                ))}
            </div>
        );
    }

}

TabPicContent.propTypes = {
    tabList: PropTypes.array,
};

export default TabPicContent;