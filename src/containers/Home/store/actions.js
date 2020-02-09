import axios from 'axios';
import { CHANGE_HOME_LIST } from './constans';
import clientAxios from '../../../client/request';
import serverAxios from '../../../server/request';

const changeList = list => ({
  type: CHANGE_HOME_LIST,
  list
})
export const getHomeList = (server) => {
  const request = server ? serverAxios : clientAxios;

  return (dispatch, getState, ) => {
    console.log(getState());
    return request.get('/api/list')
      .then((res) => {
        const list = res.data;
        dispatch(changeList(list))
      })
  }
}