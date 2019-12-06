import React , {Component} from 'react';
import './App.css';
import ListContainer from './components/ListContainer';
import CreateFormContainer from './components/CreateFormContainer'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  render(){

    return (
      <div>
        <h1><u>Imageboard</u></h1><br/>
        <ListContainer />
        <CreateFormContainer />
      </div>
    );
  }
}

export default App;
