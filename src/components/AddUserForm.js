import './AddUserForm.css'


const AddUserForm = () =>{
    return(
        <div className='AddUserForm'>
            <form className='UserForm-Container'>
                <label htmlFor="name">Name</label>
                <input className='input' type="text" placeholder='Enter your name...'/>
                <label htmlFor="quote">Quote</label>
                <textarea className='input' name="quote" cols="30" rows="10" placeholder='Your thoughts...'></textarea>
                <label htmlFor='image'>Image URL</label>
                <input className='input' type="text" name='image' placeholder='url...'/>
                <button className='Btn-Add'>Add</button>      
            </form>

        </div>
    )
}

export default AddUserForm