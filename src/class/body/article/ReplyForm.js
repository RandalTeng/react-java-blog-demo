import React from 'react';
import $ from 'jquery';

class ReplyForm extends React.Component {
    constructor(props) {
        super(props);

        this.defaultValue = {
            name: 'Name',
            email: 'Email',
            website: 'Your Website',
            comment: 'Your Comment',
        };

        this.state = this.defaultValue;

        this.placeholderFocus = this.placeholderFocus.bind(this);
        this.placeholderChange = this.placeholderChange.bind(this);
        this.placeholderBlur = this.placeholderBlur.bind(this);
    }

    /**
     * 焦点触发
     */
    placeholderFocus(eventObj) {
        let key = $(eventObj.target).attr('name');

        if (eventObj.target.value === this.defaultValue[key]) {
            let newValueObj = {};

            newValueObj[key] = '';

            this.setState(newValueObj);
        }
    }

    /**
     * 更新value
     */
    placeholderChange(eventObj) {
        let updateKey = $(eventObj.target).attr('name');
        let newValueObj = {};

        newValueObj[updateKey] = eventObj.target.value;

        this.setState(newValueObj);
    }

    /**
     * 焦点取消
     */
    placeholderBlur(eventObj) {
        let key = $(eventObj.target).attr('name');

        if (eventObj.target.value === '') {
            let newValueObj = {};

            newValueObj[key] = this.defaultValue[key];

            this.setState(newValueObj);
        }
    }

    render() {
        return (
            <div className="coment-form">
                <h4>Leave your comment</h4>
                <form action="#" method="post">
                    <input type="text" value={this.state.name} name="name" onFocus={this.placeholderFocus}
                           onChange={this.placeholderChange} onBlur={this.placeholderBlur} required/>
                    <input type="email" value={this.state.email} name="email" onFocus={this.placeholderFocus}
                           onChange={this.placeholderChange} onBlur={this.placeholderBlur} required=""/>
                    <input type="text" value={this.state.website} name="website" onFocus={this.placeholderFocus}
                           onChange={this.placeholderChange} onBlur={this.placeholderBlur} required/>
                    <textarea name="comment" value={this.state.comment} onFocus={this.placeholderFocus}
                              onChange={this.placeholderChange} onBlur={this.placeholderBlur} required/>

                    <input type="submit" defaultValue="Submit Comment"/>
                </form>
            </div>
        );
    }

}

export default ReplyForm;