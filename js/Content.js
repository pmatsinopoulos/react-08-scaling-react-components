class Content extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(Button, { buttonLabel: "Start" }),
      React.createElement(Button, { buttonLabel: "Stop" }),
      React.createElement(Button, { buttonLabel: "Pause" }),
      React.createElement(Button, null)
    );
  }
}