import React from 'react';
import LiButton from "./LiButton";
//import emptyShell from "./WarpComponent";

class PicTitle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {...this.props};
    }

    componentWillReceiveProps(nextProps) {
       console.log('get new-props');
       console.dir(nextProps);
    }


    render() {
        return (
            <ul className="nav nav-tabs" role="tablist">
                {this.props.picTitles.map((title, index) => (
                    <LiButton
                        link={title.link}
                        liClass={title.liClass}
                        onClick={this.props.handleClick}
                        linkName={title.linkName}
                        key={index} />
                ))}
            </ul>
        );
    }
}

//PicTitle = emptyShell(PicTitle);

export default PicTitle;