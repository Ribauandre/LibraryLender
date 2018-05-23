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
    this.StatusRen = this.StatusRen.bind(this)
  }

  componentDidMount() {
    axios.get('/api/book')
      .then(res => {
        this.setState({ books: res.data });
        console.log(this.state.books);
        document.getElementsByClassName("load").style.visibility = "hidden";
      });
      
  }
  StatusRen(loc){
    if(loc == "in"){
      return <td><p style={{color: 'green'}}>{loc}</p></td>;
    } else{
      return <td><p style={{color: 'red'}}>{loc}</p></td>;
    }
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
            <h4><Link to="/create"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Donate Book</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>ISBN</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {this.state.books.map(book =>
                  <tr>
                    <td class="load">Loading...</td>
                    <td><Link to={`/edit/${book._id}`}>{book.isbn}</Link></td>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    {this.StatusRen(book.location)}
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <footer class="w3-container w3-blue w3-center w3-margin-top">
      <p>Find me on linkedin, Github and <a href="https://ribauandre.com">RibauAndre.com</a> </p>
      <a href="https://www.linkedin.com/in/ribauandre/" class="fa fa-linkedin w3-hover-opacity"></a>
      <a href="https://github.com/Ribauandre" class="fa fa-github w3-hover-opacity"></a>
    </footer>
      </div>
      
    );
  }
}

export default App;
