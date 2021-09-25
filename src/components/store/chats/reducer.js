import { ADD_CHAT, DELETE_CHAT } from "./actions";

const initialState = {
  chatsList: []
};

export const chatsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CHAT: {
      return {
        ...state,
        chatsList: [...state.chatsList, { id: `${Date.now()}`, name: payload}]
          };
        }   
    case DELETE_CHAT: {
      const newChats = state.chatsList.filter(({ id }) => id !== payload);
      return {
        ...state,
        chatsList: newChats,

      }
    }
    
    default:
      return state;
  }
};



