import { ALL_IMAGES, NEW_IMAGE } from '../actions' 

export default function (state = [], action = {}) {
    switch (action.type) {
      case ALL_IMAGES : 
        //console.log(" ALL_IMAGES NEW STATE", [...state, ...action.payload]);
        return [...state, ...action.payload]

        case NEW_IMAGE : 
        return  [...state,  {...action.payload} ]

      default:
        return state
    }
  }