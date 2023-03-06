import {Component} from 'react'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  render() {
    return (
      <div className="complete-bg-main-container">
        <div className="white-bg-content-container">
          <section className="top-section-container">
            <h1 className="add-appointment-form-heading">Add Appointment</h1>
            <div className="top-image-and-form-section">
              <form className="complete-form-section">
                <label className="label-element-style" htmlFor="titleInput">
                  Title
                </label>
                <input
                  className="input-element-style"
                  type="text"
                  id="titleInput"
                  placeholder="Title"
                />
                <label className="label-element-style" htmlFor="dateInput">
                  Date
                </label>
                <input
                  className="input-element-style"
                  type="date"
                  id="dateInput"
                />
                <button className="add-event-button" type="submit">
                  Add
                </button>
              </form>
              <img
                className="form-image"
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
              />
            </div>
          </section>
          <hr />
          <section className="bottom-section-list">
            <div className="appointments-starts-head">
              <h1 className="appointment-heading">Appointments</h1>
              <button className="show-started-button" type="button">
                Started
              </button>
            </div>
            <ul className="unorder-appointment-list">
              <AppointmentItem />
            </ul>
          </section>
        </div>
      </div>
    )
  }
}
export default Appointments
