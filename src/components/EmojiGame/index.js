/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}
import WinOrLooseCard from '../WinOrLooseCard'
*/

// Write your code here.

import {Component} from 'react'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import EmojiCard from '../EmojiCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    isGameOver: false,
    idList: [],

    isWin: false,
  }

  getShuffledEmojiList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onEmojiClick = id => {
    const {idList, score, topScore} = this.state

    if (idList.includes(id)) {
      this.setState({
        isGameOver: true,
        topScore: Math.max(score, topScore),
        isWin: false,
      })
    } else if (score + 1 === 12) {
      this.setState({
        isGameOver: true,
        score: score + 1,
        topScore: 12,
        isWin: true,
      })
    } else {
      this.setState(prevState => ({
        score: prevState.score + 1,
        idList: [...prevState.idList, id],
      }))
    }
  }

  resetGamePlay = () => {
    this.setState({
      score: 0,
      isGameOver: false,
      idList: [],
    })
  }

  renderEmojiCard = () => {
    const {score} = this.state
    const shuffledEmojisList = this.getShuffledEmojiList()

    return (
      <ul className="emoji-card-container">
        {shuffledEmojisList.map(eachEmoji => (
          <EmojiCard
            emojiDetails={eachEmoji}
            key={eachEmoji.id}
            score={score}
            onEmojiClick={this.onEmojiClick}
          />
        ))}
      </ul>
    )
  }

  renderScoreCard = () => {
    const {score, isWin} = this.state

    return (
      <WinOrLoseCard
        score={score}
        resetGamePlay={this.resetGamePlay}
        isWin={isWin}
      />
    )
  }

  render() {
    const {score, topScore, isGameOver} = this.state

    return (
      <div className="page-container">
        <div className="navbar-container">
          <NavBar score={score} topScore={topScore} isGameOver={isGameOver} />
        </div>
        <div className="game-playing-container">
          {isGameOver ? this.renderScoreCard() : this.renderEmojiCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
