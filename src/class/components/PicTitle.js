import React from 'react';
import LiButton from "./LiButton";

class PicTitle extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <ul className="nav nav-tabs" role="tablist">
                {this.props.picTitles.map((title, index) => (
                    <LiButton
                        link={title.link}
                        liClass={title.liClass}
                        onClick={this.props.handelClick}
                        linkName={title.linkName}
                        key={index} />
                ))}
            </ul>
        );
    }
}

export default PicTitle;