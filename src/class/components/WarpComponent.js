import React from 'react';

export default (TargetComponent) =>{
    class WrappedComponent extends React.Component {
        constructor(props) {
            super(props);
        }

        componentWillReceiveProps(newProps) {
            //this.setState({...newProps});
        }

        render() {
            return (
                <TargetComponent {...this.props}/>
            );
        }
    }

    return WrappedComponent;
};