import React , {Component} from 'react';
import './App.css';
import ListContainer from './components/ListContainer';
import CreateFormContainer from './components/CreateFormContainer'
import 'bootstrap/dist/css/bootstrap.min.css';


import Boot from '../../../other/Boot';




class App extends Component {

  render(){

    return (
      <div>
        <h1>Imageboard </h1>
        <ListContainer />
        <CreateFormContainer />
      </div>
    );
  }
  
}


export default App;


//<ListContainer />
//<CreateFormContainer />
// <Boot />
