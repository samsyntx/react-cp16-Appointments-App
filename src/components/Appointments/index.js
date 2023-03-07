import {Component} from 'react'
import {format} from 'date-fns'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {appointmentsList: []}

  clickToAddEventButton = event => {
    event.preventDefault()

    const titleInputEl = document.getElementById('titleInput').value
    const dateInput = document.getElementById('dateInput').value
    const dateFormatting = format(new Date(dateInput), 'dd MMMM yyyy, EEEE')

    const newAppointmentObj = {
      id: uuidv4(),
      title: titleInputEl,
      formattedDate: dateFormatting,
      isFavorite: false,
    }
    const {appointmentsList} = this.state
    const newList = [...appointmentsList, newAppointmentObj]
    this.setState({appointmentsList: newList})
    document.getElementById('titleInput').value = ''
    document.getElementById('dateInput').value = ''
  }

  starParticularItem = uniqueId => {
    const {appointmentsList} = this.state
    const changeIsFavStatus = appointmentsList.map(eachAppoint => {
      if (eachAppoint.id === uniqueId) {
        return {...eachAppoint, isFavorite: !eachAppoint.isFavorite}
      }
      return {...eachAppoint}
    })
    this.setState({appointmentsList: changeIsFavStatus})
  }

  showOnlyStartAppointments = () => {
    const {appointmentsList} = this.state
    const filteredListWithStars = appointmentsList.filter(
      eachItem => eachItem.isFavorite === true,
    )
    this.setState({appointmentsList: filteredListWithStars})
  }

  render() {
    const {appointmentsList} = this.state
    console.log(appointmentsList)

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
                <button
                  onClick={this.clickToAddEventButton}
                  className="add-event-button"
                  type="submit"
                >
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
              <button
                className="show-started-button"
                type="button"
                onClick={this.showOnlyStartAppointments}
              >
                Starred
              </button>
            </div>
            <ul className="unordered-appointment-list">
              {appointmentsList.map(eachAppoint => (
                <AppointmentItem
                  key={eachAppoint.id}
                  appointmentDetail={eachAppoint}
                  starParticularItem={this.starParticularItem}
                />
              ))}
            </ul>
          </section>
        </div>
      </div>
    )
  }
}
export default Appointments
