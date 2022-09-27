import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {total: 0, heads: 0, tails: 0, activeHeadImage: true}

  getImage = () => {
    const {activeHeadImage} = this.state
    const image = activeHeadImage
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return image
  }

  getCoinToss = () => {
    const {activeHeadImage, total, heads, tails} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    this.setState(prevState => ({
      total: prevState.total + 1,
    }))
    if (tossResult === 0) {
      this.setState(prevState => ({
        tails: prevState.tails + 1,
      }))
      this.setState({activeHeadImage: !activeHeadImage})
    } else {
      this.setState(prevState => ({
        heads: prevState.heads + 1,
      }))
      this.setState({activeHeadImage: !activeHeadImage})
    }
  }

  render() {
    const {total, heads, tails, activeHeadImage} = this.state
    const tossImage = this.getImage()

    return (
      <div className="container">
        <div className="bg-container">
          <div className="toss-container">
            <h1 className="heading"> Coin Toss Game</h1>
            <p className="tag-line">Heads (or) Tails</p>
            <div>
              <img src={tossImage} alt="toss result" className="toss-image" />
            </div>
            <button type="button" className="button" onClick={this.getCoinToss}>
              Toss Coin
            </button>
            <p className="total-heads-tails">Total: {total}</p>
            <p className="total-heads-tails">Heads: {heads}</p>
            <p className="total-heads-tails">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
