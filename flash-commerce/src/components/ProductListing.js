import TableView from "./TableView";

export default function ProductListing(){
    return <>
        <TableView heads={headers} rows={data}/>
    </>
}

const headers = [
    {title: 'SKU ID', accessor: 'skuId'},
    {title: 'Program ID', accessor: 'programId'},
    {title: 'Title', accessor: 'title'},
    {title: 'MRP', accessor: 'mrp'},
    {title: 'Merchandised Price', accessor: 'merchPrice'},
    {title: 'Max Sale Quantity', accessor: 'saleQuantity'},
]

const data = [
    {skuId: 'Sku1',programId: '23', title: 'SKU 1', mrp: 100, merchPrice:'80', saleQuantity: 20},
    {skuId: 'Sku1',programId: '23', title: 'SKU 1', mrp: 100, merchPrice:'80', saleQuantity: 20},
    {skuId: 'Sku1',programId: '23', title: 'SKU 1', mrp: 100, merchPrice:'80', saleQuantity: 20},
    {skuId: 'Sku1',programId: '23', title: 'SKU 1', mrp: 100, merchPrice:'80', saleQuantity: 20},
    {skuId: 'Sku1',programId: '23', title: 'SKU 1', mrp: 100, merchPrice:'80', saleQuantity: 20},
    {skuId: 'Sku1',programId: '23', title: 'SKU 1', mrp: 100, merchPrice:'80', saleQuantity: 20}
]