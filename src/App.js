import './App.css';
import Header from './Components/Header';
import AddContact from './Components/AddContact';
import ContactList from './Components/ContactList';
import { useEffect, useState } from 'react';
import uuid4 from 'uuid4';
function App() {
  const localStorageKey="contact"

  const[contact,setContact]=useState(()=>{
    return JSON.parse(localStorage.getItem(localStorageKey))
  ||[]});

  //useEffect to store in local storage
  useEffect(()=>{
    localStorage.setItem(localStorageKey,JSON.stringify(contact))

  },[contact])

  //hum addcontact se data ko le rhe or phir usko contact list ko de rhe 
  const addContact=(data)=>{
    //console.log(data)
    //uuid4() is function by installing uuid4
    setContact([...contact,{id:uuid4(),data}]);
  }
  const removeContact=(id)=>{
    const updatedList=contact.filter((val)=>{
      return val.id!=id

    })

    setContact(updatedList);
  }

  
  return (
    <div className='App'>
    <Header />
    <AddContact addCont={addContact}/>
    <ContactList cont={contact} remcont={removeContact} />
    </div>
  );
}

export default App;
