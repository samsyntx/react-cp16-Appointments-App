import './index.css'

const AppointmentItem = props => {
  const {appointmentDetail, starParticularItem} = props
  const {id, title, formattedDate, isFavorite} = appointmentDetail

  const starButtonClicked = () => {
    starParticularItem(id)
  }
  const applyFavStar = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="appointment-item-complete-container">
      <div className="heading-and-start-icon-container">
        <h1 className="item-heading">{title}</h1>
        <button
          className="star-button"
          type="button"
          data-testid="star"
          onClick={starButtonClicked}
        >
          <img src={applyFavStar} alt="star" />
        </button>
      </div>
      <p className="item-paragraph-style">{formattedDate}</p>
    </li>
  )
}

export default AppointmentItem
