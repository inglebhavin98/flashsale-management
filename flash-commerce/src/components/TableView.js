import { Table } from 'reactstrap'

export default function TableView ({heads, rows, deleteRow, deleteRowHandler}) {
    return <>
        <Table>
            <thead>
                <tr>
                    {heads.map((head, i) => <th key={`table-head-${i}`}>{head.title}</th>)}
                    {deleteRow && <th key={`table-head-remove`}>Action</th>}
                </tr>
            </thead>
            <tbody>
                {rows.map((row,x) =>(
                    <tr key={`table-row-${x}`}>
                        {heads.map((col,y) => (
                            <td key={`table-row-col-${y}`}>{row[col.accessor]}</td>
                        ))}
                        {deleteRow && <td onClick={()=>deleteRowHandler(x)} key={`table-row-col-remove-${x}`}>X</td>}
                    </tr>
                ))}
            </tbody>
        </Table>
    </>
}