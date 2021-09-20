import { ADD_MESSAGE } from "./actions";

const initialState = {
   messageList: {},
};

export const messagesReducer = (state = initialState, { type, payload}) => {
  switch (type) {
    case ADD_MESSAGE: {
      return {
        ...state,
        messageList: {
          ...state.messageList,
          [payload.chatId]: [
            ...(state.messageList[payload.chatId] || []), 
        {
          id: `message-${Date.now()}`,
          text: payload.text,
          autor: payload.autor,
        }
      ],
    },
  };
}
    default:
      return state;
  }
};

