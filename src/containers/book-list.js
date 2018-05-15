import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import selectBook from '../actions/index';

class BookList extends Component {
    render() {
       
        return (
            <div className="col-md-4">
                <div className="list-group">
                    {this.renderList()}
                </div>
            </div>
        );
    }
    
    renderList = () => {
        return this.props.books.map((book) => {
            return (
                <button key={book.title} className="list-group-item list-group-item-action" onClick={() => this.props.selectBook(book)}>{book.title}</button>
            );
        });
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books,
    };
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        selectBook: selectBook
    }, dispatch);
}


export default connect(
    mapStateToProps,
    matchDispatchToProps,
)(BookList);
