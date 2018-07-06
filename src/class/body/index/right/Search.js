import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchValue: 'Search',
            focus: false
        };
    }

    handleFocus = (e) => {
        console.log('focus: ' + e.target.value);
        this.setState(Object.assign({}, this.state, {focus: true}));
    };

    handleBlur = (e) => {
        console.log('blur: ' + e.target.value);
        this.setState(Object.assign({}, this.state, {focus: false}));
    };

    handleChange = (e) => {
        console.log('change: ' + e.target.value);
        if (e.target.value !== '') {
            this.setState(Object.assign({}, this.state, {searchValue: e.target.value}));
        } else {
            this.setState(Object.assign({}, this.state, {searchValue: 'Search'}));
        }
    };

    render() {
        const {value, focus} = this.state;
        return (
            <div className="search-1 wow fadeInDown">
                <form action="#" method="post">
                    <label>
                        <input type="search" name="Search"
                               value={focus ? (value || '') : 'Search'}
                               onFocus={this.handleFocus}
                               onBlur={this.handleBlur}
                               onChange={this.handleChange} required/>
                    </label>
                    <input type="submit" defaultValue=" "/>
                </form>
            </div>
        );
    }

}

export default Search;