import { CHANGE_LOGIN } from './constans'
const defaultState = {
    login: false
}
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_LOGIN:
           return {
               ...state,
               login: action.value
           }
        default:
            return state
    }
    
}
export default reducer;