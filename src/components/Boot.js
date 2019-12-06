import React,{Component} from 'react'
import logo from './SP.jpg'
//import  Glyphicon  from '../components/Glyphicon';


class Boot extends Component{
    render(){
        return(
            <div>
            <div class="container">
            <div class="jumbotron">
              <h1>bootstrap jumbotron sections</h1>      
              <p>Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile-first projects on the web.</p>
            </div>
            <h1> hello <small> everyone</small></h1>
            <p><kbd>Lorem ipsum dolor sit amet </kbd>Lorem ipsum dolor sit amet, consectetur adipisicing elit... <small> consectetur adipisicing elit</small></p>
            <p class="text-success">This text indicates success.</p>
            <img src={logo} class="img-rounded" width="304" height="356" />
            <button type="button" class="btn btn-success btn-lg">click me </button>
            
            
            
           

              <dl>
                <dt>Coffee</dt>
                <dd>- black hot drink</dd>
                <dt>Milk</dt>
                <dd>- white cold drink</dd>
              </dl>  
              <p>The following HTML elements: <code>span</code>, <code>section</code>, and <code>div</code> defines a section in a document.</p>   

                <div class="row">
                  <div class="col-sm-3">
                    <h3>Column 1</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                  </div>
                  <div class="col-sm-6">
                    <h3>Column 2</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                  </div>
                  <div class="col-sm-3">
                    <h3>Column 3</h3>        
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}

export default Boot;

//<p>Envelope icon: <span> <Glyphicon glyph ="search"/> </span></p> not supported bootStrap 4 :(