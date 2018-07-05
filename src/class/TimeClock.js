import React from 'react';

class TimeClock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            time: new Date(),
        }
    }

    componentDidMount() {
        this.timeId = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timeId);
    }

    tick() {
        this.setState({
            time: new Date()
        });
    }

    render() {
        return <span>It is {this.state.time.toLocaleTimeString()}</span>;
    }
}

export default TimeClock;