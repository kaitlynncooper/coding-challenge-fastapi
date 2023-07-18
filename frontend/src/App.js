import Header from './components/Header'
import Form from './components/Form'
import {useState} from 'react'

function App() {

  // Sends post request to fastAPI backend with user-entered data from form
  const calculateDif = async (entry_id, assembly_id, interface_id) => {
    const res = await fetch(`http://localhost:8000/asa-change?entry_id=${entry_id}&assembly_id=${assembly_id}&interface_id=${interface_id} `, {
      method: 'POST',
    })
    const data = await res.json()
  }

  return (
    <div className="app">
      <Header title="Solvent ASA Difference Calculator"/>
      <Form calcDif={calculateDif}/>
    </div>
  );
}

export default App;
