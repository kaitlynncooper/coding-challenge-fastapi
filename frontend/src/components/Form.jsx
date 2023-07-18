const Form = () => {
    return (
        <form className="form">
             <div className='form-entry'>
                <label>Entry ID</label>
                <input type='text' placeholder='Add entry_id' ></input>
            </div>
            <div className='form-entry'>
                <label>Assembly ID</label>
                <input type='text' placeholder='Add assembly_id' ></input>
            </div>
            <div className='form-entry'>
                <label>Interface ID</label>
                <input type='text' placeholder='Add interface_id' ></input>
            </div>
            <input type='submit'  value='Compute Difference'/>
        </form>
    )
}

export default Form