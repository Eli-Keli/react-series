/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import useCourseStore from '../store/courseStore'

const CourseForm = () => {


    const addCourse = useCourseStore((state) => state.addCourse)

    const [courseTitle, setCourseTitle] = useState("");
    console.log("Course Form added");


    const handleCourseSubmit = () => {
        if (!courseTitle) return alert("Please enter a title");
        addCourse({
            id: Math.ceil(Math.random() * 1000000),
            title: courseTitle,
            completed: false,
        })
        setCourseTitle("");
    }

    return (
        <div className='form-container'>
            <input
                className='form-input'
                value={courseTitle}
                onChange={(e) => setCourseTitle(e.target.value)}
                placeholder="Enter course title"
            />
            <button
                onClick={() => {
                    handleCourseSubmit()
                }}
                className='form-submit-btn'
            >
                Add Course
            </button>
        </div>
    )
}

export default CourseForm