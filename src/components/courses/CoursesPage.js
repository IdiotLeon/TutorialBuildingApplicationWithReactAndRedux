import React from 'react'
import { connect } from 'react-redux'
import * as courseActions from '../../redux/actions/courseActions'
import PropTypes from 'prop-types'

class CoursesPage extends React.Component {
  state = {
    course: {
      title: ''
    }
  }

  handleChange = event => {
    const course = { ...this.state.course, title: event.target.value }
    this.setState({ course })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.createCourse(this.state.course)
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type='text'
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type='submit' value='Save' />
        {this.props.courses.map(course => (
          <div key={course.title}>{course.title}</div> // Keys help React track each array element
        ))}
      </form>
    )
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  createCourse: PropTypes.func.isRequired
}

function mapStateToProps (state) {
  return {
    courses: state.courses // to request only the data your component needs
  }
}

/**
 * This determines what actions are available on props in our component
 * @param {} dispatch
 */
function mapDispathToProps (dispatch) {
  return {
    // Remember: if one doesn't call dispatch, nothing will happen.
    // Action creators must be called by dispatch.
    // Dispatch[function] is the function to notify React about an Action
    createCourse: course => dispatch(courseActions.createCourse(course))
  }
}

/*
 * When mapDispathToProps is omitted,
 * our component gets a dispatch prop injected automatically
 */
export default connect(
  mapStateToProps,
  mapDispathToProps
)(CoursesPage)
