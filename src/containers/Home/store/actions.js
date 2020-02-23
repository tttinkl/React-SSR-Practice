import { CHANGE_HOME_LIST } from './constans';


const changeList = list => ({
  type: CHANGE_HOME_LIST,
  list
})
export const getHomeList = () => {
  return (dispatch, getState, axiosInstance) => {
    console.log(getState());
    return axiosInstance.get('/api/list')
      .then((res) => {
        const list = res.data;
        dispatch(changeList(list))
      })
  }
}