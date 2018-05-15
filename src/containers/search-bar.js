import React, {Component} from 'react';
import {connect} from 'react-redux';

class SearchBar extends Component {
    render() {
        
        return (
            <div className="search-form">
                <form className="input-group">
                    <input className="form-control" value={this.props.searchTerm.term} />
                    <span className="input-group-append"><button type="submit" className="btn btn-outline-secondary">Search</button></span>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        searchTerm: state.searchTerm
    };
}

export default connect(
    mapStateToProps,
)(SearchBar);
