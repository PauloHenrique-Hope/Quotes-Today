
// CSS
import './UsersList.css'


const UsersList = ({users}) =>{
    
    return(
        <div className="UsersList">
            {users.map(user => (
                <User user = {user} key={user.id}/>
            ))}
            
        </div>
    )
}

function User({user}){
    return(
        <div className='User'>
            <img src={user.image} alt={user.name} />
            <p>{user.name}</p>
            <blockquote className='Quote'>
                <q>{user.quote}</q>
            </blockquote>
        </div>
    )
}



export default UsersList