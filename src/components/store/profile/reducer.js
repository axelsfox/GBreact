import { SHOWNAME_ACTION } from "./actions"

const initialState = {
    showName: false,
    name: 'Anonymous'
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOWNAME_ACTION: {
            return {
                ...state,
                showName: !state.showName
            }
        }
        default:
            return state;
    }
}