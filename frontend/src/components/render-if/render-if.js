export const RenderIf = (props) => {
  if (props.if) {
    if (props.then) {
      if (typeof props.then === 'function') {
        return props.then(props)
      }

      return props.then
    }

    return props.children
  }

  if (props.else) {
    if (typeof props.else === 'function') {
      return props.else(props)
    }

    return props.else
  }

  return null
}  