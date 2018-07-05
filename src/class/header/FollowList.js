import React from 'react';
import LiButton from '../components/LiButton';


class FollowList extends React.Component{
    constructor(props) {
        super(props);
        this.ulClass = props.ulClass;

        this.followList = [
            {link: '#', aClass: ''},
            {link: '#', aClass: 'pin'},
            {link: '#', aClass: 'in'},
            {link: '#', aClass: 'be'},
            {link: '#', aClass: 'vimeo'},
        ];
    }

    render() {
        return (
            <ul>
                {this.followList.map((menu, index) =>
                    <LiButton aClass={menu.aClass} link={menu.link} key={index}/>
                )}
            </ul>
        );
    }
}

export default FollowList;