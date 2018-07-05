import React from 'react';

class Container extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.children = this.props.children;
    }

    render() {
        const {children} = this.props;
        return (
            <div className={'container'}>
                {children}
            </div>
        );
    }
}

export default Container;