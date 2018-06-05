import React, {Component} from 'react';
import {connect} from 'react-redux';
import {searchBooks} from '../actions';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        
        this.state = { term: '' };
    }
    render() {
        return (
            <div className="search-form">
                <form className="input-group" onSubmit={this.onFormSubmit}>
                    <input className="form-control" onChange={this.onInputChange}  placeholder="Search ..." value={this.state.term} />
                    <span className="input-group-append"><button className="btn btn-outline-secondary">Search</button></span>
                </form>
            </div>
        );
    }
    
    onInputChange = (event) => {
        this.setState(
            { term: event.target.value }
        );
        
        if (event.target.value === "") {
            this.props.searchBooks("");
        }
    }
    
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.searchBooks(this.state.term);
    }
    
}


export default connect(
    null,
    {searchBooks},
)(SearchBar);
