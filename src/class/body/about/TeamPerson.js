import React from 'react';
import UlList from "../../components/UlList";

class TeamPerson extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className="col-md-6 team-grid">
                <div className="team-grid1">
                    <img src={this.props.imgSrc} alt=" " className="img-responsive"/>
                    <div className="p-mask">
                        <p>{this.props.mask}</p>
                    </div>
                </div>
                <h5>{this.props.name}<span>{this.props.post}</span></h5>
                <UlList ulClass={this.props.socialUlClass} list={this.props.socialMedia}/>
            </div>
        );
    }

}

export default TeamPerson;