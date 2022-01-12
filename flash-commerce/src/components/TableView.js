import { Table, Checkbox } from 'reactstrap'

export default function TableView ({heads, rows, deleteRow, deleteRowHandler, checkboxes, selectedRows, setSelectedRows}) {
    const selectrow = (row) => {
        typeof row === 'number' && !selectedRows.includes(row) && selectedRows.push(row) &&
        setSelectedRows([
            ...selectedRows
        ])
    }
    return <>
        <Table>
            <thead>
                <tr>
                    {checkboxes && <th key={`table-head-check`}>Select</th>}
                    {heads.map((head, i) => <th key={`table-head-${i}`}>{head.title}</th>)}
                    {deleteRow && <th key={`table-head-remove`}>Action</th>}
                </tr>
            </thead>
            <tbody>
                {rows.map((row,x) =>(
                    <tr key={`table-row-${x}`}>
                        {checkboxes &&
                            <td onClick={()=>selectrow(x)} key={`table-row-col-check-${x}`}><input
                                type='checkbox'
                                checked={selectedRows.includes(x)}
                                onChange={()=>selectrow(x)}
                                />
                            </td>
                        }
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