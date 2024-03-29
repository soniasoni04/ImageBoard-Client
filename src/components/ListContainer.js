import React from 'react'
import { getImages } from '../actions'
import { connect } from 'react-redux'

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
                      return <div key={image.id}>
                          <li > 
                            {image.title} <img src={image.url} width='250' height='200'/>
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