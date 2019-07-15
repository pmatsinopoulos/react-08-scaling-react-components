class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.handleClick}>{this.props.buttonLabel}</button>
    )
  }
}

Button.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  email: function(props, propName, componentName) {
    if (props[propName]) {
      var emailRegularExpression = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
      if (!emailRegularExpression.test(props[propName])) {
        return new Error('Email validation failed!')
      }
    }
  }
}