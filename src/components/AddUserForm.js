import { useState } from 'react'
import './AddUserForm.css'


const AddUserForm = ({setUsers}) =>{
    const [name, setName] = useState("")
    const [quote, setQuote] = useState("")
    const [image, setImage] = useState("https://i.pravatar.cc/150?u=a042581f4e29026704d")

    const id = crypto.randomUUID();

    const newUser = {
        id,
        name,
        quote,
        image,
    }

    function handleFormSubmit(e){
        e.preventDefault()

        if(!name && !quote) return;

        setUsers(user => [...user, newUser])

        setName("")
        setQuote("")
        setImage("https://i.pravatar.cc/150?u=a042581f4e29026704d")
    }

    return(
        <div className='AddUserForm'>
            <form className='UserForm-Container' onSubmit={handleFormSubmit}>
                <label htmlFor="name">Name</label>
                <input className='input' id='name' type="text" placeholder='Enter your name...' value={name} onChange={e => setName(e.target.value)}/>
                <label htmlFor="quote">Quote</label>
                <textarea className='input' id="quote" cols="20" rows="10" placeholder='Your thoughts...' value={quote} onChange={e => setQuote(e.target.value)}></textarea>
                <label htmlFor='image'>Image URL</label>
                <input className='input' type="text" name='image' placeholder='url...' value={image} onChange={e => setImage(e.target.value)}/>
                <button className='Btn-Add' onClick={handleFormSubmit}>Add</button>      
            </form>

        </div>
    )
}

export default AddUserForm