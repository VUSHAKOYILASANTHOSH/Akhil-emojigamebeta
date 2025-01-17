// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onEmojiClick} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onclickedEmoji = () => onEmojiClick(id)
  return (
    <li className="each-emoji-container">
      <button
        type="button"
        className="emoji-button"
        data-testid="emoji"
        onClick={onclickedEmoji}
      >
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}

export default EmojiCard
