import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Navbar } from '../../components/navbar/navbar'

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 100px;
`

const Card = styled.div`
  width: 15%;
  height: 300px;
  border-radius: 20px;
  margin: 20px 10px;
  background-color: blue;
  opacity: .2;
`

const Home = (props) => {
  console.log(props)
  return (
    <div>
      <Navbar history={props.history} />
      <CardWrapper>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardWrapper>  
    </div>
  )
}

const mapStateToProps = (state) => {
 
  return {
    
  }
}
const mapActionsToProps = (dispatch) => ({
  
})

export default connect(mapStateToProps, mapActionsToProps)(Home);
