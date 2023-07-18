import {useState} from 'react'

const Form = ({calcDif}) => {

    const [entry_id, setEntry] = useState(0)
    const [assembly_id, setAssembly] = useState(0)
    const [interface_id, setInterface] = useState(0)

    const submitForm = (e) => {
        e.preventDefault()

        if(entry_id === 0 || assembly_id === 0 || interface_id === 0) {
            alert(`Please fill out all fields`)
            return
        }

        // Send form details to backend to communicate with RCSB API and 
        // calculate ASA difference after interaction
        calcDif(entry_id, assembly_id, interface_id)

        // Reset form details after submission
        setEntry(0)
        setAssembly(0)
        setInterface(0)

    }

    return (
        <form className="form" onSubmit={submitForm}>
             <div className='form-entry'>
                <label>Entry ID</label>
                <input type='number' placeholder='Add entry_id' value = {entry_id} onChange={(e) => setEntry(parseInt(e.target.value))}></input>
            </div>
            <div className='form-entry'>
                <label>Assembly ID</label>
                <input type='number' placeholder='Add assembly_id' value = {assembly_id} onChange={(e) => setAssembly(parseInt(e.target.value))}></input>
            </div>
            <div className='form-entry'>
                <label>Interface ID</label>
                <input type='number' placeholder='Add interface_id'  value = {interface_id} onChange={(e) => setInterface(parseInt(e.target.value))}></input>
            </div>
            <input type='submit'  value='Compute Difference'/>
        </form>
    )
}

export default Form