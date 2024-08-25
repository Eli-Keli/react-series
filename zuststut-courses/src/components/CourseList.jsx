/* eslint-disable no-unused-vars */
import React from 'react'
import useCourseStore from '../store/courseStore'

const CourseList = () => {

    const { courses, removeCourse, toggleCouseStatus } = useCourseStore(
        (state) => ({
            courses: state.courses,
            removeCourse: state.removeCourse,
            toggleCouseStatus: state.toggleCouseStatus
        })
    )

  return (
    <>
        <ul>
            {
                courses.map((course,index) => (
                    <div key={index}>
                        <li
                        className='course-item'
                        style={{
                            textDecoration: course.completed? 'line-through' : 'none',
                            backgroundColor: course.completed ? '#00FF0044' : 'gray'
                        }}
                        >
                            <span className='course-item-col-1'>
                                <input
                                type="checkbox"
                                checked={course.completed}
                                onChange={(e) => {
                                    toggleCouseStatus(course.id)
                                }}
                                />
                            </span>
                            <span>{course?.title}</span>
                            <span>
                                <button
                                onClick={() =>
                                    removeCourse(course.id)}
                                className='delete-btn'
                                >
                                    Delete
                                </button>
                            </span>
                        </li>
                    </div>
                ))
            }
        </ul>
    </>
  )
}

export default CourseList