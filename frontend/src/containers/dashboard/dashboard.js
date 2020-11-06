import React from 'react';
import { connect } from 'react-redux';

const Dashboard = (props) => {
  
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}

const mapStateToProps = (state) => {
 
  return {
    
  }
}
const mapActionsToProps = (dispatch) => ({
  
})

export default connect(mapStateToProps, mapActionsToProps)(Dashboard);
