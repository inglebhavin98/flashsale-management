import { headers } from "../utils/constant";
import TableView from "./TableView";

export default function ProductListing({deleteRow}){
    return <>
        <TableView heads={headers} rows={data} deleteRow/>
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