import React, {Component} from 'react';

class SearchBar extends Component {
    render() {
        console.log("nothing makes sense!");
        return (
            <div className="search-form">
                <form className="form-group">
                    <input className="form-control" onChange={this.searchBooks} placeholder="Search ..." />
                </form>
            </div>
        );
    }
    
    searchBooks() {
    
    }
}


export default SearchBar;
