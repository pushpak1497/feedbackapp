const EmojiItem = props => {
  const {emojiDetails, onClicked} = props
  const {name, imageUrl} = emojiDetails
  const onClickEmoji = () => {
    onClicked()
  }
  return (
    <li>
      <img src={imageUrl} className="emoji" alt={name} onClick={onClickEmoji} />
      <p>{name}</p>
    </li>
  )
}
export default EmojiItem
