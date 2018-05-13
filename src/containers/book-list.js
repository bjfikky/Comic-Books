import React, {Component} from 'react';
import {connect} from 'react-redux';

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
                <a href="#" key={book.title} className="list-group-item list-group-item-action">{book.title}</a>
            );
        });
    }
}

function mapStateToProps(state) {
    return {
        books: state.books,
    };
}

export default connect(
    mapStateToProps,
)(BookList);
