import { NEW_IMAGE } from '../actions' 

export default function (state = [], action = {}) {
    switch (action.type) {
      case NEW_IMAGE : 
        return  [...state,  {...action.payload} ]

      default:
        return state
    }
  }