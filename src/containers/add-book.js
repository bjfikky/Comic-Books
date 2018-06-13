import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';


import { addBook } from "../actions";

class AddBook extends Component {
    
    state = {
        image: null
    }
    
    render() {
        return (
            <form className="col-md-8 add-new-form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <h3>Add New</h3>
                <hr/>
                <Field name="title" label="Title" component={this.renderTextField}/>
                <input type="file" accept="image/*" onChange={this.imageSelect}/>
                <Field name="body" label="Body"  component={this.renderTextarea}/>
                <input type="submit" className="btn btn-outline-success" value="Add Book"/>
                <Link to="/"><button className="btn btn-outline-secondary cancel-button">Cancel</button></Link>
            </form>
        );
    }
    
    
    renderTextField = (field) => {
        return (
            <div className="form-group">
                <label htmlFor={field.name}>{field.label} :</label>
                <input className="form-control" type="text" {...field.input} />
                <div className="text-danger">{field.meta.error}</div>
            </div>
        );
    }
    
    
    
    
    
    renderTextarea = (field) => {
        return (
            <div className="form-group">
                <label htmlFor={field.name}>{field.label} :</label>
                <textarea className="form-control" rows="15" {...field.input}></textarea>
                <div className="text-danger">{field.meta.error}</div>
            </div>
        );
    }
    
    
    imageSelect = (event) => {
        console.log(event.target.files[0].name);
        this.setState({
            image: event.target.files[0]
        })
    }
    
    
    onSubmit = (values) => {
        // var coverName = (this.state.selectedFile).name;
        // coverName = coverName.replace(/\s+/g, "-").toLowerCase();
    
        // if (this.props.addBook(values)) {
        //     this.props.history.push("/")
        // }
    
        this.props.addBook(values, this.state.image ,() => {
            this.props.history.push("/");
        });
        
    }
}

const validate = (values) => {
    const errors = {};
    
    if (!values.title) {
        errors.title = "Enter a title";
    }
    
    if (!values.cover) {
        errors.cover = "Please select a cover image";
    }
    
    if (!values.body) {
        errors.body = "You must add a body text";
    }
    
    return errors;
    
}


export default reduxForm({
    validate: validate,
    form: 'AddBookForm'
})(
    connect(null, { addBook })(AddBook)
);
