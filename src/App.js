import React from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.components';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      monsters : [],
      searchField : ""
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters : users} ));
  }
  render () {
    const {monsters,searchField}=this.state;
    const filteredArray = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      <div className='App'>
        <h1>MONSTERS ROLODEX</h1>
        <SearchBox placeholder="Search Monsters" handleChange={e => this.setState({searchField : e.target.value})}/>
        <CardList monsters={filteredArray}/> 
      </div>
    );
  }
}

export default App;
