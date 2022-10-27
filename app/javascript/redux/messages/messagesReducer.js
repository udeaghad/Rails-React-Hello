const messages = [];

export default (state = messages, action) => {
  switch (action.type) {
    case 'GET_MESSAGES/fulfilled':      
      return action.payload;
    default:
      return state;
  }
}