import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getHomeList } from './store/actions';

const Home = (props) => {
  useEffect(() => {
    props.getHomeList(false);
  },[]);

  return (
    <div>
      <div>home</div>
      {props.list && props.list.map( li => (
        <div>{li.detail}</div>
      ))}
      <button onClick={() => showList()}></button>
    </div>
  )
}

Home.loadData = (store) => {
  return store.dispatch(getHomeList(true));
}
const mapStateToProps = state => ({
  list: state.home.newsList
})

const mapDispatchToProps = dispatch => ({
  getHomeList() {
    dispatch(getHomeList());
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);