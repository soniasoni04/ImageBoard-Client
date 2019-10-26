import { NEW_IMAGE } from '../actions' 

export default function (state = [], action = {}) {
    switch (action.type) {
      case NEW_IMAGE : 
       // console.log("state : ", state, "action.payload :", action.payload)
       // console.log("NEW STATE", [...state, {...action.payload}]);
        return  [...state,  {...action.payload} ]

      default:
        return state
    }
  }