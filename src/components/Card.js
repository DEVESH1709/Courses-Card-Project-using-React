import React  from 'react'
import './Card.css'
import {FcLike, FcLikePlaceholder} from 'react-icons/fc'
import { toast } from 'react-toastify';
const Card = (props) => {
  let course =props.course

 let likedCourses =props.likedCourses;
 let setLikedCourses =props.setLikedCourses;



 function clickHandler(){
  //logic
  if(likedCourses.includes(course.id)){
    // pahle se like kia hua pada tha 
    setLikedCourses((prev)=>prev.filter((cid)=>(cid!=course.id)) );
    toast.warning("liked removed")
  }
  else{
    // pahle se like nahi hai ye course
    // insert karna hai ye course liked courses me

    if(likedCourses.length===0){
      setLikedCourses([course.id])
    }
    else{
      // non empty pahle se 
      setLikedCourses((prev)=>[...prev,course.id])
    }
    toast.success("Liked successfully")
  }
 }

  return (// Fecthing the all compnent contais in card
    <div className='card'>
<div className='image'>
<img src={course.image.url} ></img>
<div>
    <button className='heart' onClick={clickHandler}>
       {
        likedCourses.includes((course.id))?( <FcLike fontSize={20} />):( <FcLikePlaceholder fontSize={20} />)
       }
    </button>
</div>            
</div>                                        


<div>
    <p className='para1'>{course.title}</p>
    <p className='para2'>{
      course.description.lenght >140 ?
      (course.description):
      (course.description.substr(0,140)) +"..."
      } </p>
</div>


    </div>
  )
}

export default Card;