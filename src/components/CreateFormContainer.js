import React,{Component} from 'react'
import { connect } from 'react-redux'
import { createImage } from '../actions'

class CreateFormContainer extends Component {
    state={
        url : '',
        title: ''
    }

    onChange=(e)=>{
        //console.log("onchange :", e.target.value)
        this.setState({
            [e.target.name] : e.target.value,
        })
    }

    onSubmit=(e)=>{
        e.preventDefault();   
        if(this.state.url){
            console.log("updated value of the url: ", this.state.url)
            this.props.createImage(this.state)
        }
        else{
            console.log("you have not entered the url of the image")
        }
        this.setState({
            url : '',
            title: ''
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