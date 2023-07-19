import Header from './components/Header'
import Form from './components/Form'
import Table from './components/Table'
import {useState} from 'react'

function App() {

  const [tableData, setTable] = useState([])

  // Sends post request to fastAPI backend with user-entered data from form
  const fetchDif = async (entry_id, assembly_id, interface_id) => {
    const res = await fetch(`http://localhost:8000/asa-change?entry_id=${entry_id}&assembly_id=${assembly_id}&interface_id=${interface_id} `, {
      method: 'POST',
    })
    const data = await res.json()

    let differences = computeDif(data)

    setTable(differences)

  }

  const computeDif = (data) => {
    let partners = data.rcsb_interface_partner

    let result = partners.map((partner) => {
      // Extract bound and unbound feature positions from current partner
      let bound_positions = partner.interface_partner_feature[0].feature_positions[0]
      let unbound_positions = partner.interface_partner_feature[1].feature_positions[0]

      // Iterate over bound list and compile result of the form:
      // [residue_position, unbound_asa, bound_asa, asa_diference]
      return {
        "interface_partner_identifier": partner.interface_partner_identifier,
        "table_data": 
          bound_positions.values.map((value, i) => {
          let bound_asa = value
          let unbound_asa = unbound_positions.values[i]
          return [i, unbound_asa, bound_asa, unbound_asa - bound_asa]
          })
      }
    })
    return result
  }
  

  return (
    <div className="app">
      <Header title="Solvent ASA Difference Calculator"/>
      <Form calcDif={fetchDif}/>
      <Table data={tableData}/>
    </div>
  );
}

export default App;
