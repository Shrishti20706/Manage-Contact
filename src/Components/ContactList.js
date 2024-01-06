import React from 'react'
import '../App.css'
import DeleteIcon from '@mui/icons-material/Delete';
export default function ContactList(props) {
    const {cont,remcont}=props;
    //console.log(cont,"from list")
    const contactList=cont.map((val)=>{
        return(
            <div className='contacts'>
                <div>{val.data.name}</div>
                <div>{val.data.email}</div>
                <div>{val.data.phone}</div>
                <span onClick={()=>remcont(val.id)}><DeleteIcon></DeleteIcon></span>
                
            </div>

        )
    })
  return (
    <>
      <div className='contactHeader'>Contact List</div>
      <div>{contactList}</div>
      
    </>
  )
}
