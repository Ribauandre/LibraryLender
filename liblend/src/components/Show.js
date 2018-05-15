import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      book: {}
    };
  }

  componentDidMount() {
    axios.get('/api/book/'+this.props.match.params.id)
      .then(res => {
        this.setState({ book: res.data });
        console.log(this.state.book);
      });
  }
  delete(id){
    console.log(id);
    axios.delete('/api/book/'+id)
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    function Button(book) {
    if (book.location) {
        return 
           <button onPress={onBorrow(this.state.book)} class="btn btn-success">Return</button>;
    }
   else {
        return 
           <button onPress={onReturn(this.state.book)} class="btn btn-success">Borrow</button>;
       
    }
}


  

  function onBorrow(book){
    const state = this.state.book
    state[book.location] = true;
    this.setState({book:state});
    Submit(book)
  }
  function onReturn(book){
    const state = this.state.book
    state[book.location] = false;
    this.setState({book:state});
    Submit(book)
  }
   
  
  
  
  function Submit(e){
    e.preventDefault();

    const { location, isbn, title, author, description, published_year, publisher } = this.state.book;

    axios.put('/api/book/'+this.props.match.params.id, { location, isbn, title, author, description, published_year, publisher })
      .then((result) => {
        this.props.history.push("/show/"+this.props.match.params.id)
      });
  }
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              {this.state.book.title}
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Book List</Link></h4>
            <dl>
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
            </dl>
            {Button(this.state.book)}
           
          </div>
        </div>
      </div>
    );
  }
}

export default Show;