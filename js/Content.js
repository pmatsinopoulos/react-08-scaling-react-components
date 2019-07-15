class Content extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(Button, { buttonLabel: "Start", handleClick: () => console.debug("Start clicked"), email: "foo@mailinator.com" }),
      React.createElement(Button, { buttonLabel: "Stop", handleClick: () => console.debug("Stop clicked") }),
      React.createElement(Button, { buttonLabel: "Pause", handleClick: () => console.debug("Pause clicked") }),
      React.createElement(Button, { buttonLabel: "Resume", handleClick: () => console.debug("Resume clicked") })
    );
  }
}