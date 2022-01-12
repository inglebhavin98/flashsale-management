import { useState } from 'react'
import { Button } from "reactstrap";
import { headers } from "../utils/constant";
import TableView from "./TableView";

export default function ProductListing({deleteRow, checkboxes}){
    const [ selectedRows, setSelectedRows ] = useState([])
    const removeSelectedRow = () => {
        selectedRows.forEach(i => data.splice(i,1))
        setSelectedRows([])

    }
    return <>
        <TableView heads={headers} rows={data} deleteRow={deleteRow} checkboxes={checkboxes} selectedRows={selectedRows} setSelectedRows={setSelectedRows}/>
        <Button onClick={removeSelectedRow}>Remove</Button>
    </>
}

const data = [
    {skuId: 'Sku1',programId: '23', title: 'SKU 1', mrp: 100, merchPrice:'80', saleQuantity: 20},
    {skuId: 'Sku1',programId: '23', title: 'SKU 1', mrp: 100, merchPrice:'80', saleQuantity: 20},
    {skuId: 'Sku1',programId: '23', title: 'SKU 1', mrp: 100, merchPrice:'80', saleQuantity: 20},
    {skuId: 'Sku1',programId: '23', title: 'SKU 1', mrp: 100, merchPrice:'80', saleQuantity: 20},
    {skuId: 'Sku1',programId: '23', title: 'SKU 1', mrp: 100, merchPrice:'80', saleQuantity: 20},
    {skuId: 'Sku1',programId: '23', title: 'SKU 1', mrp: 100, merchPrice:'80', saleQuantity: 20}
]