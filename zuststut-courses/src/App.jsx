/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css'
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';

function App() {

  return (
    <div className='main-container'>
      <h1>My Zustand Course List</h1>
      <CourseForm />
      <CourseList />
    </div>
  )
}

export default App
