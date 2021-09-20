export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';

export const addMessage = (chatId, message, autor) => ({
  type: ADD_MESSAGE,
  chatId,
  message,
  autor,
});

