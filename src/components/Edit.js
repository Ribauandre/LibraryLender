import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      book: {}
    };
    this.ButtonRen = this.ButtonRen.bind(this)
    this.ReturnBook = this.ReturnBook.bind(this)
  }

  componentDidMount() {
    axios.get('/api/book/'+this.props.match.params.id)
      .then(res => {
        this.setState({ book: res.data });
        console.log(this.state.book);
      });
  }

  onChange = (e) => {
    const state = this.state.book
    state[e.target.name] = e.target.value;
    this.setState({book:state});
  }
  
  onSubmit = (e) => {
    e.preventDefault();

    const {location, isbn, title, author, description, published_year, publisher } = this.state.book;

    axios.put('/api/book/'+this.props.match.params.id, { location: 'out', isbn, title, author, description, published_year, publisher })
      .then((result) => {
        this.props.history.push("/")
      });
  }
  ReturnBook = (e) =>{
    e.preventDefault();
    const {location, isbn, title, author, description, published_year, publisher } = this.state.book;

    axios.put('/api/book/'+this.props.match.params.id, { location: 'in', isbn, title, author, description, published_year, publisher })
      .then((result) => {
        this.props.history.push("/")
      });
  }

  ButtonRen(loc){
    if(loc == "in"){
      return <button type="submit" class="btn btn-success">Borrow Book</button>;
    } else{
      return  <button onClick={this.ReturnBook} class="btn btn-danger">Return Book</button>;
    }
  }

  render() {
    
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Book Return/Checkout
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={`/`}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Book List</Link></h4>
            <form onSubmit={this.onSubmit}>
            <dt>ISBN:</dt>
              <dd>{this.state.book.isbn}</dd>
              <dt>Author:</dt>
              <dd>{this.state.book.author}</dd>
              <dt>Description:</dt>
              <dd>{this.state.book.description}</dd>
              <dt>Publish Date:</dt>
              <dd>{this.state.book.published_year}</dd>
              <dt>Publisher:</dt>
              <dd>{this.state.book.publisher}</dd>
              <dt>Status:</dt>
              <dd>{this.state.book.location}</dd>
              {this.ButtonRen(this.state.book.location)}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;
