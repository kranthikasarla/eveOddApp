// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  btnIncreases = () => {
    const randomNum = () => Math.floor(Math.random() * 100)
    this.setState(oldState => ({count: oldState.count + randomNum()}))
  }

  render() {
    const {count} = this.state
    const value = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="container">
        <h1 className="heading">Count {count}</h1>
        <p className="count-type">Count is {value}</p>
        <button type="button" className="button" onClick={this.btnIncreases}>
          Increment
        </button>
        <p className="description">
          *Increase By Random Number Between 0 to 100{' '}
        </p>
      </div>
    )
  }
}
export default EvenOddApp
