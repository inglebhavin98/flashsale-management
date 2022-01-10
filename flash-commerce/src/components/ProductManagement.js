import { useState } from 'react'
import AddProduct from './AddProduct'
import ProductListing from './ProductListing'
import ProductManagementHeader from './ProductManagementHeader'

export default function ProductManagement (){
    // const [ selectedTab, setSelectedTab ] = useState('products')
    return <>
        <ProductManagementHeader/>
        <ProductListing/>
        <AddProduct/>
    </>
}