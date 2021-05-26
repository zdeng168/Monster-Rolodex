
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import { Component } from 'react';

import {CardList } from './components/card-list/card-list.component'


class App extends Component {
  constructor() {

    super();
    this.state = {
      monsters: [
        // {
        //   name: 'One',
        //   id: 'id1'
        // },
        // {
        //   name: 'Two',
        //   id: 'id2'
        // },
        // {
        //   name: 'Three',
        //   id: 'id3'
        // },
        // {
        //   name: 'Four',
        //   id: 'id4'
        // }
      ],
      searchItem:''
      // this.state = {
      //   string: 'Hello Zhenghan'
      // }
    };
  }

  componentDidMount(){
    fetch ('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({monsters:users}))
  }

  render() {
    const {monsters, searchItem} = this.state
    
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchItem.toLowerCase()))

    return (
    <div className='App'>
      <input type='search' placeholder='search monster' onChange={e => this.setState({searchItem: e.target.value})}/>
      <CardList monsters={filteredMonsters}> 
      </CardList>
      
    </div>
    );


    // return (<div className="App">
    //       <header className="App-header">
    //         <img src={logo} className="App-logo" alt="logo" />
    //         <p>
    //           Edit <code>src/App.js</code> and save to reload.
    //         </p>
    //         <a
    //           className="App-link"
    //           href="https://reactjs.org"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //          {this.state.string}
    //         </a>
    //         <button onClick={()=> {this.setState({string:'yes, it clicked!'})}}> click me</button>
    //       </header>
    //     </div>);
  }

}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
