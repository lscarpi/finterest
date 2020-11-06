import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { isLoggedIn, isLoginInProgress } from './redux/auth/selectors'

const DefaultRouteBase = (props) => {
  useEffect(() => {
    if (props.isLoggedIn) {
      const url = (props.history.location?.state?.from?.pathname)
        ? props.history.location.state.from.pathname
        : '/dashboard'

      props.history.push(url)
    } else {
      props.history.push('/')
    }
  }, [props.loginSent, props.isLoggedIn])

  if (
    props.isLoggedIn ||
    props.loginSent ||
    props.location.pathname === '/'
  ) {
    return null
  }

  return <div>Loading...</div>
}

const mapStateToProps = (state) => ({
  isLoggedIn: isLoggedIn(state),
  loginSent: isLoginInProgress(state)
})

export const DefaultRoute = connect(mapStateToProps, null)(React.memo(DefaultRouteBase));
