import React from 'react';
import { connect } from 'react-redux';
import { Navbar } from '../../components/navbar/navbar'

const Dashboard = (props) => {
  
  return (
    <div>
      <Navbar history={props.history} />
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
