import React , {Component} from 'react';
import './App.css';
import ListContainer from './components/ListContainer';
import CreateFormContainer from './components/CreateFormContainer'


class App extends Component {

  render(){

    return (
      <div>
        <h1>hello </h1>
        <ListContainer />
        <CreateFormContainer />
      </div>
    );
  }
  
}


export default App;
