import React, { Component } from 'react';
import './App.css';
import ShowRow from './ShowRow';
const axios = require('axios');

class App extends Component {
  constructor(props){
super(props)

this.state = {}

this.searchShow("scandal")
  }

searchShow = search => {
  const url = 'http://api.tvmaze.com/search/shows?q=' + search
  axios.get(url)
    .then(res => {
      const shows = res.data;
      let eachShow = []

      shows.forEach(show => {
        const showRoW = <ShowRow key={show.id} show={show}/>
        eachShow.push(showRoW)
      })  
   this.setState({rows: eachShow})  
    })
    .catch((error)=>{
      console.log(error)
    })
    
}

handleChange = e => {
  const search = e.target.value
  this.searchShow(search)
  this.setState({name: e.target.value})
}

  render() {
    return (
      <div className="App">
      <h1>TV SHOW APP </h1> 
      <input onChange={this.handleChange.bind(this)} className="searchInput" name="search" type="text" /> 
      {this.state.rows}
      </div>
    );
  }
}

export default App;
