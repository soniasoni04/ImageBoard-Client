import React from 'react'
import { getImages } from '../actions'
import { connect } from 'react-redux'
//import List from './List'

class ListContainer extends React.Component {
    componentDidMount() {
      this.props.getImages()
    }
  
    render() {
        console.log("images: " , this.props.images)
        const {images} = this.props
      return <div>
                <ul>{
                    images.map(image => {

                      return <div>
                      <li> 
                      {image.title} <img key={image.id} src={image.url} width='250' height='200'/>
                      </li> 
                      <br></br>
                      </div>
                    })
                    }
                </ul>
      
             </div> 
    }
  }
  
    function mapStateToProps (state) {
    return { images: state.images }
  }
  
  
  
  export default connect(mapStateToProps, { getImages })(ListContainer)