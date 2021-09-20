import { ADD_CHAT, DELETE_CHAT } from "./actions";

const initialState = {
  chatsList: [{
    id: 111,
    name: 'Main Chat'
      },
{
    id: 121,
    name: 'Friend Chat'
},
{
    id: 131,
    name: 'Secret Chat'
},
{
    id: 141,
    name: 'Test Chat'

} 

  ]
};

export const chatsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CHAT: {
      return {
        ...state,
        chatsList: [...state.chatsList, { id: `chats-${Date.now()}`, name: payload}]
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



