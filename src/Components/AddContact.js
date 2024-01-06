import React from 'react'
import '../App.css'
import { useState } from 'react';
export default function AddContact({addCont}) {
    const[contactData,setContactData]=useState({name:"",email:""});
  
    const handlechange=(e)=>{
        if(e.target.name=="name")
        {
            //iska mtlb ha ki jo sb contactdata(...contactdata ase) me ha asit is rehne do bs name(jo ki name attibute me diya usko change krdo as per input
            setContactData({...contactData,name:e.target.value})
        }
        else{
            setContactData({...contactData,email:e.target.value})


        }
        
    }
    const handleAdd=()=>{
        if(contactData.name==="" ||contactData.email==="")
        {
            alert("please fill all details");
        }
        //console.log(contactData);
        addCont(contactData);
        setContactData({name:"",email:""});
    }
    return (
    < div className='adddiv'>
      <div className='addheading'>Add Contact</div>
      
      <form>
        <label>Name:</label>
        <input type='text' placeholder='Enter Name' name='name' value={contactData.name} onChange={handlechange}/>
        <br></br>
        <label>Email:</label>
        <input type='email' placeholder='Enter Email' name='Email' value={contactData.email} onChange={handlechange}/>

      </form>
      <button className='addbtn' onClick={handleAdd}>Add Contact</button>
      
      
    </div>
  )
}
