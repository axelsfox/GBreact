export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';

export const addMessage = (chatId, message, autor) => ({
  type: ADD_MESSAGE,
  payload: {
  chatId,
  message,
  autor,
}
});

let timeout;

export const addMessageWithReplay = (chatId, text, autor) => (dispatch) => {
  dispatch(addMessage(chatId, text, autor));

  if(autor !== 'bot'){
  clearTimeout(timeout);
  timeout = setTimeout(() => {
      dispatch(addMessage(chatId, "hey", 'bot'));
    }, 1000);
  }
}