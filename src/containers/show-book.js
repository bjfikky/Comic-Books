import React, {Component} from 'react';
import {connect} from 'react-redux';
import {showBook} from "../actions";


class ShowBook extends Component {
    
    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.showBook(id);
    }
    
    render() {
        if(this.props.book == null) {
            return (
                <div>Loading...</div>
            );
        }
        
        return (
            <div>
                <h2>{this.props.book.title}</h2>
                <img src={this.props.book.cover} alt=""/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eius eos illum labore libero maxime
                    minima, nam nobis, non obcaecati omnis provident quam, rerum tempora voluptate! Eaque expedita
                    nostrum suscipit. Alias architecto eos maxime modi placeat! Aspernatur doloribus eius natus qui repudiandae. A
                    assumenda atque, enim iusto mollitia nam neque perferendis perspiciatis reprehenderit repudiandae,
                    sit voluptatem? Esse minus nobis perspiciatis. met aspernatur cum dicta dolore dolorem ea eveniet fuga fugit harum minus modi molestiae
                    necessitatibus nulla odio quia recusandae, reiciendis rem rerum sed totam. Eum molestias odio quam
                    sint temporibus?
                </p>
                <p>Ad alias aliquam asperiores, aspernatur assumenda autem dicta ducimus ea eveniet exercitationem
                    fugit harum illo in ipsa itaque iusto minus nam nostrum perferendis provident, quidem quis sint
                    tempore temporibus voluptatibus?
                </p>
                <p>Ab aliquid deleniti doloribus ducimus earum eius eum id, illum in ipsum itaque necessitatibus
                    nesciunt nobis nulla numquam odio perspiciatis, quas quo quod reprehenderit rerum, sapiente sed
                    tenetur ullam ut. Alias architecto eos maxime modi placeat! Aspernatur doloribus eius natus qui repudiandae. A
                    assumenda atque, enim iusto mollitia nam neque perferendis perspiciatis reprehenderit repudiandae,
                    sit voluptatem? Esse minus nobis perspiciatis. met aspernatur cum dicta dolore dolorem ea eveniet fuga fugit harum minus modi molestiae
                    necessitatibus nulla odio quia recusandae, reiciendis rem rerum sed totam. Eum molestias odio quam
                    sint temporibus.
                </p>
                <p>Amet aspernatur cum dicta dolore dolorem ea eveniet fuga fugit harum minus modi molestiae
                    necessitatibus nulla odio quia recusandae, reiciendis rem rerum sed totam. Eum molestias odio quam
                    sint temporibus?
                </p>
                <p>Alias architecto eos maxime modi placeat! Aspernatur doloribus eius natus qui repudiandae. A
                    assumenda atque, enim iusto mollitia nam neque perferendis perspiciatis reprehenderit repudiandae,
                    sit voluptatem? Esse minus nobis perspiciatis.
                </p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    };
}

export default connect(
    mapStateToProps, {showBook}
)(ShowBook);
