import React, {useState} from 'react'
import './Filter.css'

const Filter = (props) => {
  let filterData= props.filterData
  let category=props.category;
  let setCategory =props.setCategory;

  function filterHandler(title){
    setCategory(title);

  }
  return (// using map function for mappining button for each filterData
    <div className='filter'> 
     
     {filterData.map((data)=>{
      return  <button key={data.id} onClick={()=>filterHandler(data.title)} >
            {data.title}
        </button>
     })}


    </div>
  )
}


export default Filter;