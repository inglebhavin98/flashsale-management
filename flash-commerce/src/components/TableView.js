import { Table } from 'reactstrap'

export default function TableView ({heads, rows}) {
    return <>
        <Table>
            <thead>
                <tr>
                    {heads.map((head, i) => <th key={`table-head-${i}`}>{head.title}</th>)}
                </tr>
            </thead>
            <tbody>
                {rows.map((row,x) =>(
                    <tr key={`table-row-${x}`}>{heads.map((col,y) => (
                        <td key={`table-row-col-${y}`}>{row[col.accessor]}</td>
                    )) }</tr>
                ))}
            </tbody>
        </Table>
    </>
}