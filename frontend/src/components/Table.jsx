const Table = ({data}) => {
    return (
        <div>
            {data.map((partner, key) => {
                    return (
                        <>
                        <h4 className="table-label">Entity ID: {partner.interface_partner_identifier.entity_id} Asym ID: {partner.interface_partner_identifier.asym_id}</h4>
            <table className="table">
                <tr className="tr">
                    <th className="th">Residue Position</th>
                    <th className="th">Unbound ASA</th>
                    <th className="th">Bound ASA</th>
                    <th className="th">Change in ASA</th>
                </tr>

                        {partner.table_data.map((val) => {
                        return (
                        <tr key={key}>
                            <td>{val[0]}</td>
                            <td>{val[1]}</td>
                            <td>{val[2]}</td>
                            <td>{val[3]}</td>
                        </tr>)
                    })}

            </table>
            </> )} )}
        </div>
    )
}

export default Table