import React from 'react';
import PicBox from "./PicBox";

class TabBox extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div role="tabpanel" className={this.props.className} id={this.props.id}
                 aria-labelledby={this.props.id + "-tab"}>
                {this.props.picList.map((pic, index) => (
                    <PicBox src={pic.location} key={index}/>
                ))}
                <div className="clearfix"/>
            </div>
        );
    }

}

export default TabBox;