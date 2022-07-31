import React from 'react';

function View(props){
  function createList() {
    const list = props.experience.map(element => (<li>{element}</li>))
    return list
  }
  
  return (
      <div className='px-4 py-4'>
        <div className="view px-8 py-8 bg-white rounded-lg justify-center flex-col">
          <div className="flex border-b-2 border-black justify-evenly">
            <div className=''>
              <h3 className="font-bold text-lg">Name:</h3>
              {props.name}
            </div>
            <div className=''>
              <h3 className='font-bold text-lg'>Email:</h3> {props.email}
            </div>
          </div>
          <div className='flex flex-col justify-center py-8 border-b-2 border-black'>
            <div className='flex border-t-2'>
              <h1 className='text-xl font-bold'>Experience</h1>
              <div className="flex flex-col border-t-2">
                {createList()}
              </div>
            </div>
            
          </div>
          <div className='flex justify-center py-10 border-b-2 border-black'>
            <h3 className='text-xl font-bold'>Education</h3> <ul>{props.education}</ul>
          </div>
        </div>
      </div>
    )
}

export default View