import React from 'react';
import $ from 'jquery';

class Article extends React.Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {
        const {artId} = this.props.match.params;
        $.ajax({
            url: '/index/login.do?username=admin&password=admin',
            method: 'get',
            data: {
                art_id: artId,
            },
            // dataType: 'json',
            success: this.dataRender
        });
    }

    dataRender = (data) => {
        console.dir(data);
    };


    render() {
        return (
            <div>
                <h1>Article Page</h1>
            </div>
        );
    }

}

export default Article;