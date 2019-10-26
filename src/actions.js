import request from 'superagent'

export const ALL_IMAGES = 'ALL_IMAGES'
export const NEW_IMAGE = 'NEW_IMAGE'
//imageCreate(this.state.name)

export const IMAGE_CREATE = 'IMAGE_CREATE'

const baseUrl = 'http://localhost:4000'




function allImages (payload) {
  return {
    type: ALL_IMAGES,
    payload
  }
}

export const getImages = () => (dispatch, getState) => {
    console.log("getState: ", getState())
    const state = getState()
    const { images } = state
  
    if (!images.length) {
      request(`${baseUrl}/image`)
        .then(response => { 
            console.log("response", response)
          const action = allImages(response.body)
  
          dispatch(action)
        })
        .catch(console.error)
    }
  }

  
  
  function newImage(image) {
      return {
          type : NEW_IMAGE,
          payload : image
      }
  }


  export const createImage = (image) => (dispatch) => {
    console.log("got the new image : ", image)

    request
    .post(`${baseUrl}/image`)
    .send(image)
        .then(response => { 
            console.log("response", response)
          const action = newImage(response.body)
  
          dispatch(action)
        })
        .catch(console.error)
    }
  