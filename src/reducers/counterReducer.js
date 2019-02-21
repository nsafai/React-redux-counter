import { INCREMENT, DECREMENT, RESET } from '../actions/';

const counterReducer = (state = 0, action) => {
  // state is the value that represents state (num, string, etc.)
  // action is the action you want to perform on state

  switch(action.type) {
    case INCREMENT:
      return state += 1;

    case DECREMENT:
      return state -= 1;

    case RESET:
      return 0;

    default:
      return state;
  }
}

export default counterReducer;