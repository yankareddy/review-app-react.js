import React, {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeReviewIndex: 0,
    }
  }

  getReview = reviewsList => {
    const {activeReviewIndex} = this.state
    const {imgUrl, username, companyName, description} =
      reviewsList[activeReviewIndex]

    return (
      <div className="profile-container">
        <h1 className="heading">Reviews</h1>
        <img src={imgUrl} alt={username} className="image" />
        <p className="username">{username}</p>
        <p>{companyName}</p>
        <p>{description}</p>
      </div>
    )
  }

  onLeft = () => {
    const {activeReviewIndex} = this.state

    if (activeReviewIndex > 0) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex - 1,
      }))
    }
  }

  onRight = () => {
    const {activeReviewIndex} = this.state
    const {reviewsList} = this.props

    if (activeReviewIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex + 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    return (
      <div className="main-container">
        <button
          className="button"
          onClick={this.onLeft}
          type="button"
          data-testid="leftArrow"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left arrow"
            className="arrow"
          />
        </button>
        {this.getReview(reviewsList)}
        <button
          className="button"
          onClick={this.onRight}
          type="button"
          data-testid="rightArrow"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right arrow"
            className="arrow"
          />
        </button>
      </div>
    )
  }
}

export default ReviewsCarousel
