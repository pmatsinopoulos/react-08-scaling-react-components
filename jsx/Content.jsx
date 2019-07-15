class Content extends React.Component {
  render() {
    return (
      <div>
        <Button buttonLabel="Start" handleClick={() => console.debug("Start clicked")} email="foo@mailinator.com"/>
        <Button buttonLabel="Stop" handleClick={() => console.debug("Stop clicked")}/>
        <Button buttonLabel="Pause" handleClick={() => console.debug("Pause clicked")}/>
        <Button buttonLabel="Resume" handleClick={() => console.debug("Resume clicked")}/>
      </div>
    )
  }
}