import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getHomeList } from './store/actions';


const Home = (props) => {
  useEffect(() => {
    props.getHomeList();
  },[]);

  return (
    <div>
      <div>home</div>
      {props.newsList && props.newsList.map( li => (
        <div>{li.detail}</div>
      ))}
      <button onClick={() => showList()}></button>
    </div>
  )
}


const mapStateToProps = state => ({
  newsList: state.home.newsList
})

const mapDispatchToProps = dispatch => ({
  getHomeList() {
    dispatch(getHomeList());
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);