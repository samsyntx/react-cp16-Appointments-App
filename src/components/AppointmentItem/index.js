import './index.css'

const AppointmentItem = () => (
  <div className="appointment-item-complete-container">
    <div className="heading-and-start-icon-container">
      <h1 className="item-heading">Dentist</h1>
      <button className="star-button" type="button" data-testid="star">
        <img
          src="https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png"
          alt="star"
        />
      </button>
    </div>
    <p className="item-paragraph-style">Date: 20 July 2021, Tuesday</p>
  </div>
)

export default AppointmentItem
