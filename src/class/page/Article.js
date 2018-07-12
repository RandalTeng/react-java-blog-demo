import React from 'react';
import $ from 'jquery';
import BannerBox from "../header/BannerBox";
import ArticleContainer from "../body/article/ArticleContainer";
import MenuNav from "../header/MenuNav";

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

    componentDidMount() {
        MenuNav.cancelMenuActive();
    }


    render() {
        return (
            <div>
                <BannerBox/>
                <ArticleContainer/>
            </div>
        );
    }

}

export default Article;