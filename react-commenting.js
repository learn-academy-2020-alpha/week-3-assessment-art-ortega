// ASSESSMENT 3: React Commenting Challenge
// Add comments to the React Robot Listening Challenge
// Explain the purpose and functionality of the code directly below the 10 comment tags


// App.js
class App extends Component{
  constructor(){
    super()
    // 1. create a state that'll take in users input
    this.state = {
      userInput: "",
    }
  }

  robot = (e) => {
    // 2. updates the state to whatever the user inputs
    this.setState({ userInput: e.target.value})
  }

  render(){
    // 3. destructured userInput to variable
    let { userInput } = this.state

    return(
      <div>
        <h1>Robot Challenge</h1>

        <h3>Enter text here:</h3>
        <input
          {/* 4. renders the robot method on change*/}
          onChange={ this.robot }
          {/* 5. */}
          value={ userInput }
        />

        <div>
          {/* 6. rendering all components */}
          <GoodRobot
            {/* 7.Components are passed in prop values equal to the userInput state  */}
            userInput={ userInput }
          />
          <BadRobot
            userInput={ userInput }
          />
          <KanyeBot
            userInput={ userInput }
          />
        </div>
      </div>
    )
  }
}
export default App


// GoodRobot.js
class GoodRobot extends Component{
  render(){
    return(
      // 8. Good robot component
      <div>
        <h3>Good Robot</h3>
        {/* 9.Returns the userInput through props  */}
        <h4>I hear you saying { this.props.userInput }. Is that correct?</h4>
      </div>
    )
  }
}
// 10. export GoodRobot class to be used by other components
export default GoodRobot
