import React from 'react';
import Right from "../right/Right";
import Content from './Content';
import Comment from "./Comment";
import ReplyForm from "./ReplyForm";
import MenuNav from "../../header/MenuNav";

class ArticleContainer extends React.Component {
    constructor(props) {
        super(props);

        this.articleInfo = {
            title: 'Article Page',
            bigPicSrc: '/assets/images/sing-1.jpg',
            secondaryTitle: 'Article secondary title',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
            'Lorem Ipsum has been the industry\'s standard dummy text ever since,' +
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
            'Lorem Ipsum has been the industry\'s standard dummy text ever ' +
            'since Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
            createTime: 'On Jun 10',
            commentsCount: 2,
            readerCount: 0,
        };

        this.comments = [
            {
                headImgSrc: '/assets/images/sin1.jpg',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,' +
                'There are many variations of passages of Lorem Ipsum available,' +
                'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                createTime: 'Jun 21, 2016',
                isReply: false,
                subComments: [
                    {
                        headImgSrc: '/assets/images/sin2.jpg',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,' +
                        'There are many variations of passages of Lorem Ipsum available,' +
                        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        createTime: 'Jun 21, 2016',
                        isReply: true,
                        subComments: [],
                    },
                ],
            },
            {
                headImgSrc: '/assets/images/sin1.jpg',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,' +
                'There are many variations of passages of Lorem Ipsum available,' +
                'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                createTime: 'Jun 21, 2016',
                isReply: false,
                subComments: [
                    {
                        headImgSrc: '/assets/images/sin2.jpg',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,' +
                        'There are many variations of passages of Lorem Ipsum available,' +
                        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        createTime: 'Jun 21, 2016',
                        isReply: true,
                        subComments: [],
                    },
                ],
            },
        ];
    }

    render() {
        return (
            <div className="technology">
                <div className="container">
                    <div className="col-md-9 technology-left">
                        <div className="agileinfo">
                            <Content {...this.articleInfo}/>
                            <div className="response">
                                <h4>Responses</h4>
                                {this.articleInfo.commentsCount > 0 ?
                                    this.comments.map((comment, index) => (<Comment {...comment} key={index}/>)) :
                                    <div>There is no RESPONSE.</div>}
                            </div>

                            <ReplyForm/>
                            <div className="clearfix"/>
                        </div>
                    </div>
                    <Right/>
                </div>
            </div>
        );
    }

}

export default ArticleContainer;