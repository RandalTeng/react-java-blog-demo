import React from 'react';
import TeamPerson from "./TeamPerson";

class Team extends React.Component {
    constructor(props) {
        super(props);

        this.teamPersons = [
            {
                imgSrc: '/assets/images/2.jpg',
                mask: 'Neque porro quisquam est, qui dolorem ipsum.',
                name: 'Laura Mark',
                post: 'Sales Manager',
                socialUlClass: 'social',
                socialMedia: [
                    {
                        aClass: 'social-facebook', link: '#', linkName:
                            <div>
                                <i/>
                                <div className="tooltip">
                                    <span>Facebook</span>
                                </div>
                            </div>
                    },
                    {
                        aClass: 'social-twitter', link: '#', linkName:
                            <div>
                                <i/>
                                <div className="tooltip">
                                    <span>Twitter</span>
                                </div>
                            </div>
                    },
                    {
                        aClass: 'social-google', link: '#', linkName:
                            <div>
                                <i/>
                                <div className="tooltip">
                                    <span>Google+</span>
                                </div>
                            </div>
                    },
                ],
            },
            {
                imgSrc: '/assets/images/3.jpg',
                mask: 'Neque porro quisquam est, qui dolorem ipsum.',
                name: 'Joseph Ali',
                post: 'Manager',
                socialUlClass: 'social',
                socialMedia: [
                    {
                        aClass: 'social-facebook', link: '#', linkName:
                            <div>
                                <i/>
                                <div className="tooltip">
                                    <span>Facebook</span>
                                </div>
                            </div>
                    },
                    {
                        aClass: 'social-twitter', link: '#', linkName:
                            <div>
                                <i/>
                                <div className="tooltip">
                                    <span>Twitter</span>
                                </div>
                            </div>
                    },
                    {
                        aClass: 'social-google', link: '#', linkName:
                            <div>
                                <i/>
                                <div className="tooltip">
                                    <span>Google+</span>
                                </div>
                            </div>
                    },
                ],
            },
        ];
    }


    render() {
        return (
            <div className="team">
                <h3 className="team-heading">Meet our team</h3>
                <div className="team-grids">
                    {this.teamPersons.map((person, index) => <TeamPerson {...person} key={index}/>)}
                    <div className="clearfix"/>
                </div>
            </div>
        );
    }

}

export default Team;