import React from 'react'
import '../App.css'
import { useState } from 'react';
export default function AddContact({addCont}) {
    const[contactData,setContactData]=useState({name:"",email:"",phone:""});
  
    const handlechange=(e)=>{
        if(e.target.name=="name")
        {
            //iska mtlb ha ki jo sb contactdata(...contactdata ase) me ha asit is rehne do bs name(jo ki name attibute me diya usko change krdo as per input
            setContactData({...contactData,name:e.target.value})
        }
        else if(e.target.name=="Email"){
            setContactData({...contactData,email:e.target.value})


        }
        else{
          setContactData({...contactData,phone:e.target.value})

        }
        
    }
    const handleAdd=()=>{
        if(contactData.name==="" ||contactData.email==="" ||contactData.phone==="")
        {
            alert("please fill all details");
        }
        //console.log(contactData);
        addCont(contactData);
        setContactData({name:"",email:"",phone:""});
    }
    return (
    < div className='adddiv'>
      <div className='addheading'>Add Contact</div>
      
      <form>
        <label>User Name:</label>
        <input type='text' placeholder='Enter Name' name='name' value={contactData.name} onChange={handlechange}/>
        <br></br>

        <label>Email Add:</label>
        <input type='email' placeholder='Enter Email' name='Email' value={contactData.email} onChange={handlechange}/>

        <br></br>
        
        <label>Phone No:</label>
        <input type='tel' placeholder='Enter Phone Number' name='Phone' value={contactData.phone} onChange={handlechange}/>

      </form>
      <button className='addbtn' onClick={handleAdd}>Add Contact</button>
      
      
    </div>
  )
}
