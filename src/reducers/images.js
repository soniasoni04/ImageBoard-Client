import { ALL_IMAGES } from '../actions' 

export default function (state = [], action = {}) {
    switch (action.type) {
      case ALL_IMAGES : 
        console.log("ALL_IMAGES   state : ", state, "action.payload :", action.payload)
        console.log(" ALL_IMAGES NEW STATE", [...state, ...action.payload]);
        return [...state, ...action.payload]

      default:
        return state
    }
  }