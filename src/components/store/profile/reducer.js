import { SHOWNAME_ACTION } from "./actions"
import { CHANGE_NAME } from "./actions"

const initialState = {
    showName: false,
    name: 'Anonymous'
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOWNAME_ACTION: 
            return {
                ...state,
                showName: !state.showName
            }
        
        case CHANGE_NAME: 
            return {
                ...state,
                name: action.payload
            }
        
        default:
            return state;
        }
}