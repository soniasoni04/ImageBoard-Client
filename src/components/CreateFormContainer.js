import React,{Component} from 'react'
import { connect } from 'react-redux'
import { createImage } from '../actions'
//import CreateForm from './CreateForm'

class CreateFormContainer extends Component {
    state={
        url : " ",
        title: " "
    }

    onChange=(e)=>{
        console.log("onchange :", e.target.value)
        this.setState({
            [e.target.name] : e.target.value,
            
        })

        //console.log("now value set in the state: ", this.state.name)
    }
    
    
    onSubmit=(e)=>{
        e.preventDefault();
        
        //console.log(" on submit , this.state: ", this.state)

        this.props.createImage(this.state)

        this.setState({
            url : " ",
            title: " "
        })
    }



    render(){

        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <label>Upload your image <b> url</b> here</label>
                        <input 
                            type="text"
                            name="url"
                            value={this.state.url}
                            onChange={this.onChange} /><br />
                    
                    <label>Upload your image <b> title </b> here : </label>
                            <input 
                            type="text"
                            name="title"
                            value={this.state.title}
                            onChange={this.onChange} /> <br />

                    <label>submit your image  here : </label>
                            <input 
                            type="submit" value="Submit" />
                </form>
            
            </div>
        )
    }

}

export default connect(null, { createImage })(CreateFormContainer)