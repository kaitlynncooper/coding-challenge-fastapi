import {useState} from 'react'

const Form = ({calcDif}) => {

    const [entry_id, setEntry] = useState('')
    const [assembly_id, setAssembly] = useState(NaN)
    const [interface_id, setInterface] = useState(NaN)

    const submitForm = (e) => {
        e.preventDefault()

        if(entry_id === '' || assembly_id === 0 || interface_id === 0) {
            alert(`Please fill out all fields`)
            return
        }

        // Send form details to backend to communicate with RCSB API and 
        // calculate ASA difference after interaction
        calcDif(entry_id, assembly_id, interface_id)

        // Reset form details after submission
        setEntry('')
        setAssembly(NaN)
        setInterface(NaN)

    }

    return (
        <form className="form" onSubmit={submitForm}>
             <div className='form-entry'>
                <label className='form-label'>Entry ID </label>
                <input type='text' placeholder='Add entry_id' value = {entry_id} onChange={(e) => setEntry(e.target.value)}></input>
            </div>
            <div className='form-entry'>
                <label className='form-label'>Assembly ID </label>
                <input type='number' placeholder='Add assembly_id' value = {assembly_id} onChange={(e) => setAssembly(parseInt(e.target.value))}></input>
            </div>
            <div className='form-entry'>
                <label className='form-label'>Interface ID </label>
                <input type='number' placeholder='Add interface_id'  value = {interface_id} onChange={(e) => setInterface(parseInt(e.target.value))}></input>
            </div>
            <input type='submit'  value='Compute Difference'/>
        </form>
    )
}

export default Form