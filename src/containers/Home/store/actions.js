import axios from 'axios';
import { CHANGE_HOME_LIST } from './constans';
const changeList = list => ({
  type: CHANGE_HOME_LIST,
  list
})
export const getHomeList = () => {
  return (dispatch, getState, ) => {
    console.log(getState());
    axios.get('http://localhost:3010/api/list')
      .then((res) => {
        const list = res.data;
        dispatch(changeList(list))
      })
  }
}