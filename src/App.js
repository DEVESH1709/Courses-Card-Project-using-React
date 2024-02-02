
import './App.css';
import { apiUrl, filterData } from './data'
import Cards from './components/Cards';
import Filter from './components/Filter';
import { toast } from 'react-toastify';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import { Spinner } from './components/Spinner';
// import Card from './components/Card';
function App() {


const[courses,setCourses]= useState(null)
const [loading,setLoading]= useState(true)
const[category,setCategory]= useState(filterData[0].title) // fecting first object ki title wali value 
  
    async function fetchData(){
      setLoading(true)
      try{
        const response = await fetch(apiUrl);
        const output = await response.json();
        // save data into a variable 
        console.log(output)

        setCourses(output.data)
       
      }
     catch(error){
      toast.error("Something went wrong");



     }
     setLoading(false)
    }
    useEffect(()=>{
    fetchData();
   },[]);



  return (// Using UseEffect Hook for API calling

    <div className="App">
   <div><Navbar></Navbar> </div>


<div className='container'>  <div><Filter filterData={filterData} category={category} setCategory={setCategory}></Filter></div>
  

  <div  >{
     loading ? (<Spinner></Spinner>):(<Cards courses={courses} category={category}></Cards>)
   }</div>
   
  </div>
 
  </div>
  );
};

export default App;
