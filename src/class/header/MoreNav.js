import React from 'react';

class MoreNav extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"/>
                    <span className="icon-bar"/>
                    <span className="icon-bar"/>
                </button>
            </div>
        );
    }


}

export default MoreNav;