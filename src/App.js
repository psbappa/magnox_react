import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Listings from './components/Listings';
import Navbar from './components/Navbar';
import Home from './components/Home';

class App extends Component {

  state = {
    listings: []
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((data) => {
        // console.log(data);
        this.setState({ listings: data })
      })
      .catch(console.log('data'))
  }

  render() {
    return (
      <>
        <Navbar />
        <Route exact path="/"><Home /></Route>
        <Route path="/listings"><Listings /></Route>
      </>
    )
  }
}

export default App;
