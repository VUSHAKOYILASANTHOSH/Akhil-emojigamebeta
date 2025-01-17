import './index.css'

const WinOrLoseCard = props => {
  const {score, isWin, resetGamePlay} = props
  const winImage = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
  const loseImage = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const gameImage = isWin ? winImage : loseImage

  const onClickPlayAgain = () => {
    resetGamePlay()
  }

  return (
    <div className="result-card-container">
      <div className="result-details">
        <h1>{isWin ? 'You Won' : 'You Lose'}</h1>
        <div>
          <p className="score-heading">{isWin ? 'Best Score' : 'Score'}</p>
          <p className="player-score">{score}/12</p>
        </div>
        <button
          className="play-button"
          type="button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <img src={gameImage} className="winloose-image" alt="win or lose" />
    </div>
  )
}

export default WinOrLoseCard
