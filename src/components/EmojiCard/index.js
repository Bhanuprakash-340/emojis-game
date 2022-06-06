import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmojiCard = () => {
    clickEmoji(id)
  }

  return (
    <li className="emoji-list-items">
      <button
        className="custom-button"
        type="button"
        onClick={onClickEmojiCard}
      >
        <img src={emojiUrl} alt={emojiName} className="emojis" />
      </button>
    </li>
  )
}

export default EmojiCard
