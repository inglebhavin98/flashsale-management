import { useState } from 'react'
import AddProduct from './AddProduct'
import ProductListing from './ProductListing'
import ProductManagementHeader from './ProductManagementHeader'
// import FileUpload from './Upload'

export default function ProductManagement (){
    const [ selectedTab, setSelectedTab ] = useState('list')
    return <>
        <h3>Product Management</h3>
        <ProductManagementHeader tab={selectedTab} onChangeTab={setSelectedTab}/>
        {selectedTab === 'list' && <ProductListing/>}
        {selectedTab === 'add' && <AddProduct/>}
        {selectedTab === 'remove' && <ProductListing checkboxes={true}/>}
        {/* {selectedTab === 'upload' && <FileUpload/>} */}
    </>
}