// Components
import Header from './components/Header';
import UsersList from './components/UsersList'
import AddUserForm from './components/AddUserForm';

// CSS
import './App.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <UsersList/>
      <Button>
        <span>Add User</span>
      </Button>
      <AddUserForm button = {<Button/>}/>
    </div>
  );
}

export function Button({children}){
  return(
      <button className='Btn-Add'>
          {children}
      </button>
  )
}

export default App;
