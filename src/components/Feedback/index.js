import {Component} from 'react'
import EmojiItem from '../EmojiItem'
import './index.css'

class Feedback extends Component {
  state = {isClicked: false}

  onClicked = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {isClicked} = this.state
    const emojiClassName = isClicked ? 'hide' : 'show'
    const thanksClassName = isClicked ? 'show' : 'hide'

    return (
      <div className="bg-container">
        <div className={`card1 ${emojiClassName}`}>
          <h1>How satisfied are you with our customer support performance?</h1>
          <ul className="emojis-container">
            {emojis.map(each => (
              <EmojiItem
                emojiDetails={each}
                key={each.id}
                onClicked={this.onClicked}
              />
            ))}
          </ul>
        </div>
        <div className={`card2 ${thanksClassName}`}>
          <img src={loveEmojiUrl} alt="love emoji" className="emoji" />
          <h1>Thank You</h1>
          <p>
            We will use your feedback to improve our customer support
            performance
          </p>
        </div>
      </div>
    )
  }
}
export default Feedback
