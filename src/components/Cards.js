import React from 'react'
import Card from './Card';
import './Cards.css';
import { useState } from 'react';

const Cards = (props) => {
 let courses=props.courses;
 let category=props.category; // fetch karlia yaha aake 
  const [likedCourses,setLikedCourses]= useState([])
  // returns you a list of all courses received from the api response
    function getCourses(){
      if(category==="All"){  let allCourses=[];
        Object.values(courses).forEach(array=>{
         array.forEach((courseData)=>{
            allCourses.push(courseData);
  
          })
        })
        return allCourses;
      }
    
    
    else{
      return courses[category] // sirf specific category ka data/array pass karunga 
    }}
    





  return (
    <div className='cards'>
    {
    getCourses().map((course )=>{
    return <Card key={course.id} course={course} likedCourses={likedCourses} 
    setLikedCourses={setLikedCourses}></Card>
    })
    }
    </div>
  )
}


export default Cards;