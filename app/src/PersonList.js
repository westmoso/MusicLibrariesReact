import React from 'react';
import axios from 'axios';

import API from '../api';

export default class PersonList extends React.Component {
    state = {
      persons: []
    }
  
    componentDidMount() {
      axios.get(`http://localhost:3000/get`)
        .then(res => {
          const persons = res.data;
          this.setState({ persons });
        })
    }
  
    render() {
      return (
        <ul>
          { this.state.persons.map(person => <li>{person.name}</li>)}
        </ul>
      )
    }
  }

  export default class PersonList extends React.Component {
    state = {
      name: '',
    }
  
    handleChange = event => {
      this.setState({ name: event.target.value });
    }
  
    handleSubmit = event => {
      event.preventDefault();
  
      const user = {
        name: this.state.name
      };
  
      axios.post(`http://localhost:3000/post`, { user })
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
    }
  
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Person Name:
              <input type="text" name="name" onChange={this.handleChange} />
            </label>
            <button type="submit">Add</button>
          </form>
        </div>
      )
    }
  }