import React, {Component} from 'react';
import {connect} from 'react-redux';
import {searchBooks} from '../actions';
import {bindActionCreators} from 'redux';

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
    }
    
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.searchBook(this.state.term);
    }
    
    
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        books: state.books,
    };
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        searchBook: searchBooks
    }, dispatch);
}


export default connect(
    mapStateToProps,
    matchDispatchToProps,
)(SearchBar);
