import React from 'react';

class HeaderSearch extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return <div className="header-search">
            <div className="search">
                <input className="search_box" type="checkbox" id="search_box"/>
                <label className="icon-search" htmlFor="search_box">
                    <span className="glyphicon glyphicon-search" aria-hidden="true"/>
                </label>
                <div className="search_form">
                    <form action="#" method="post">
                        <input type="text" name="Search" placeholder="Search..."/>
                        <input type="submit" defaultValue="Send"/>
                    </form>
                </div>
            </div>
        </div>;
    }
}

export default HeaderSearch;