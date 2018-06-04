import React, {Component} from 'react';
import {connect} from 'react-redux';

class SelectedBook extends Component {
    render() {
        
        if (!this.props.selectedBook) {
            return <p className="lead">... Select a book please ...</p>
        }
        
        return (
            <div className="selected-book col-md-8">
                <h3>{this.props.selectedBook.title}</h3>
                <img src={"http://localhost:3000/" + this.props.selectedBook.cover} alt="comic book" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ipsam magnam odit officia quam rem veniam
                    voluptas voluptatum? Asperiores consequatur cumque eum ex magnam molestias nulla odio perferendis rerum sed?
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda cumque ex impedit incidunt ips
                    a iste minima odit optio pariatur porro provident quos, reiciendis repellat reprehenderit soluta tempora tenetur
                    voluptatibus?Accusantium atque aut, doloribus esse, eveniet itaque laboriosam libero maiores minus
                    nam numquam odio optio, qui recusandae rem sapiente soluta suscipit voluptatum. Deserunt facilis quibusdam reprehenderit.
                    Cum dignissimos laboriosam possimus!>Aperiam dignissimos explicabo id, maiores perspiciatis quisquam recusandae similique
                    sint?
                </p>
                <p>Aliquid atque corporis deleniti, doloremque et iure labore laudantium nostrum odit officiis quaerat, quas quasi
                    quis sequi, sunt totam voluptate!Aliquid autem cumque dolorem fugiat impedit iste, nesciunt numquam odit
                    officia, provident repudiandae saepe veniam veritatis.
                    Aperiam aspernatur consequatur culpa delectus ea enim, et iure obcaecati pariatur quibusdam quo voluptatum.
                </p>
        
                <button type="button" className="btn btn-outline-secondary">Read</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        selectedBook: state.activeBook,
    };
}

export default connect(
    mapStateToProps,
)(SelectedBook);
