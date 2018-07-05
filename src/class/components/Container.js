import React from 'react';

class Container extends React.Component {
    constructor(props) {
        super(props);

        this.children = props.children;
    }


    render() {
        return (
            <div className={'container'}>
                {this.children}
            </div>
        );
    }
}

export default Container;