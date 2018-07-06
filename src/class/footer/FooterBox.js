import React from 'react';

class FooterBox extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className="col-md-4 footer-left wow fadeInDown">
                {this.props.children}
            </div>
        );
    }

}

export default FooterBox;