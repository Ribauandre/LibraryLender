import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    axios.get('/api/book')
      .then(res => {
        this.setState({ books: res.data });
        console.log(this.state.books);
      });
  }
onButtonPress(){
  this.setState({
    books: this.state.books.map.filter(function(book) {
        return this.state.book.location == false;
      })
    });
}


  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              BOOK CATALOG
            </h3>
          </div>
          <div class="panel-body">
          <div class="btn-group btn-group-toggle" data-toggle="buttons">
          <Link to="/create">
         <button class="btn btn-secondary" >
         Add Book
         </button>
         </Link>
          <button onPress={this.onButtonPress} class="btn btn-secondary">Return a book</button>
          </div>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>ISBN</th>
                  <th>Title</th>
                  <th>Author</th>
                </tr>
              </thead>
              <tbody>
                {this.state.books.map(book =>
                  <tr>
                    <td><Link to={`/show/${book._id}`}>{book.isbn}</Link></td>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
