import { CHANGE_HOME_LIST} from './constans';
const defaultState = {
  name: 'tttinkl',
  newsList: []
};

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case CHANGE_HOME_LIST: 
      return {
        ...state,
        newsList: action.list
      }
    default: 
      return state;
  }
}

export default reducer;