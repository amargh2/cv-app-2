import React, { useState, useEffect } from 'react';

function Form(props) {
  const [nameInput, nameHandleChange] = useState('')
  const [educationInput, educationHandleChange] = useState('')
  const [experienceInput, experienceHandleChange] = useState('')
  const [emailInput, emailHandleChange] = useState('')
  
  return (
    <div className='py-4 px-4 text-sm font-medium text-gray-500'>
      <div className='px-8 bg-white py-8 rounded-lg shadow-lg bg-white gap-2 flex flex-col justify-center'>
          
        <div className = 'flex gap-2'>
          <label htmlFor="name">Name:</label>
          <input onChange={(event)=>  nameHandleChange(event.target.value)} type="text" name="name" id="name" className='border-4 rounded-md border-blue-200'/>
          <div><button onClick={() => props.setName(nameInput)} className='bg-sky-200 rounded-lg px-2 py-2 hover:bg-white'>submit</button></div>
        </div>
        
        <div className='gap-2 flex'>
          <label htmlFor="name">Email:</label>
          <input onChange={(event)=> emailHandleChange(event.target.value)} type="text" name="name" id="name" className='border-4 border-blue-200'/>
          <div className=''>
            <button onClick={()=> props.setEmail(emailInput)} className='bg-sky-200 rounded-lg px-2 py-2 hover:bg-white'>submit</button></div>
        </div>
        
        <div className = 'flex gap-2'>
          <label htmlFor="name">Education:</label>
          <input onChange={(event)=> educationHandleChange(event.target.value)} type="text" name="name" id="name" className='border-4 border-blue-200'/>
          <div>
            <button onClick={()=> props.setEducation(educationInput)} className='bg-sky-200 rounded-lg px-2 py-2 hover:bg-white'>submit</button>
          </div>
        </div>
        
        <div className = 'flex gap-2'>
          <label htmlFor="name">Experience:</label>
          <textarea onChange={(event)=> experienceHandleChange(event.target.value)} type="text" name="name" id="name" className='border-4 border-blue-200'/>
          <div>
            <button onClick={() => props.setExperience(experienceInput)} className='bg-sky-200 rounded-lg px-2 py-2 hover:bg-white'>submit</button>
          </div>
        </div>
    </div>
  </div>
    )
  }

export default Form