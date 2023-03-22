import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {userText: ''}

  userEnteredtext = event => {
    const {userText} = this.state
    if (event.target.value !== ' ') {
      this.setState({userText: event.target.value})
    }
  }

  render() {
    const {userText} = this.state
    return (
      <div className="bg-container">
        <div className="image1">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
        <div className="bottom-card">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <div className="input-phrase-container">
            <label htmlFor="text" className="label-element">
              Enter the phrase
            </label>
            <input
              className="phrase"
              type="text"
              id="text"
              value={userText}
              onChange={this.userEnteredtext}
              placeholder="Enter the phrase"
            />
          </div>

          <p className="letters">No.of letters: {userText.length}</p>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
