class Button extends React.Component {
  render() {
    return (
      <button>{this.props.buttonLabel}</button>
    )
  }
}

Button.defaultProps = {
  buttonLabel: "You forgot to give the 'buttonLabel' property value!"
}