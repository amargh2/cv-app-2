import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Header from './components/Header'
import View from './components/View'
import Display from './components/Display';
import React, { useState, useEffect } from 'react'

function App() {
  const [experienceArray, replaceArray] = useState([])
  const [name, nameSubmit] = useState('')
  const [email, emailSubmit] = useState('')
  const [education, educationSubmit] = useState('')
  
  function addNewExperienceItem(experience) {
    const newArray = experienceArray.map(element => element);
    newArray.push(experience);
    console.log(newArray);
    replaceArray(newArray);
    console.log(experienceArray)
  }

  return (
    <div className="App">
      <Header/>
      <div className = 'sm:flex lg:grid grid-cols-10'>
        <div className = 'col-start-2 col-span-3'>
          <Form
          setName = {nameSubmit}
          setEmail = {emailSubmit}
          setExperience = {addNewExperienceItem}
          setEducation = {educationSubmit}/>
        </div>
        <div className='col-start-5 col-span-4'>
          <Display
          name = {name}
          email = {email}
          experience = {experienceArray}
          education = {education}/>
        </div>
      </div>
    </div>
  );
}

export default App;
