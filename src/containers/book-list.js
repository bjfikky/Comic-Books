import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom'

import {selectBook, getBooks} from '../actions/index';

class BookList extends Component {
    componentWillMount() {
        this.props.getBooks();
    }
    
    renderList = () => {
        return this.props.books.map((book) => {
            return (
                <button key={book.id} className="list-group-item list-group-item-action" onClick={() => this.props.selectBook(book)}>{book.title}</button>
            );
        });
    }
    
    render() {
        if (this.props.books.length === 0) {
            return (<h3 className="text-warning">No results found! </h3>);
        }
        
        return (
            <div className="col-md-4">
                <Link to="/books/add" className="btn btn-outline-success add-book">Add Book</Link>
                <div className="list-group">
                    {this.renderList()}
                </div>
            </div>
        );
    }
    
    
}

const mapStateToProps = (state) => {
    return {
        books: state.books,
    };
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        selectBook: selectBook,
        getBooks : getBooks
    }, dispatch);
}


export default connect(
    mapStateToProps,
    matchDispatchToProps,
)(BookList);
