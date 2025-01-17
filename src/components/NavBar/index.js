// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, isGameOver} = props

  return (
    <nav className="navbar-container">
      <div className="navbar-emoji-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="navabar-image"
        />
        <h1 className="navbar-heading">Emoji Game</h1>
      </div>
      {!isGameOver ? (
        <div className="scores-container">
          <p className="score-text">Score: {score}</p>
          <p className="top-score-text">Top Score: {topScore}</p>
        </div>
      ) : null}
    </nav>
  )
}

export default NavBar
