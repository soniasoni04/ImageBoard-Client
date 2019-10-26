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
        //console.log("images by deconstructor :", images)
        

      return <div>
                <h1>hello from listContainer </h1>
                <ul>{
                    images.map(image => <li key={image.id}>{image.url}</li>)
                    }
                </ul>
      
             </div> 
    }
  }
  
  function mapStateToProps (state) {
    return { images: state.images }
  }
  
  
  
  export default connect(mapStateToProps, { getImages })(ListContainer)