import React, { Component } from 'react';
import './App.scss';
import './general.scss';
import ContentBox from './components/ContentBox'
import Footer from './components/Footer';

class App extends Component {
  state = {
    data: {}
  }
  
  componentDidMount = () => {
    const baseURL = 'http://127.0.0.1:8000/'
    fetch(`${baseURL}`, 
        {
            method: 'GET', 
            headers: {
              "Content-Type": "application/json"
            }
        }
    )
    .then(res => res.json())
    .then(data => this.setState({data: data[0].data}))
  }
  render() {

    return (
      <div className="app">
        <div className="app__container">
          <ContentBox users={this.state.data} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
