// Components
import Header from './components/Header';
import UsersList from './components/UsersList'
import AddUserForm from './components/AddUserForm';

// CSS
import './App.css'
import { useState } from 'react';


// DATA
import data from './data/data'

function App() {
  const [showAddUser, setShowAddUser] = useState(false)
  const [users, setUsers] = useState(data)

  function handleShowAddUser(){
    setShowAddUser(show => !show)
  }



  return (
    <div className="App">
      <Header/>
      <UsersList users = {users}/>
      <Button onShowAddUser = {handleShowAddUser}>
        <span>{showAddUser ? 'Close': 'Add User'}</span>
      </Button>
      {showAddUser && <AddUserForm setUsers = {setUsers}/>}
    </div>
  );
}

export function Button({children, onShowAddUser}){
  return(
      <button className='Btn-Add' onClick={onShowAddUser}>
          {children}
      </button>
  )
}

export default App;
