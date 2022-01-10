import { Breadcrumb, BreadcrumbItem } from 'reactstrap'

export default function ProductManagementHeader ({tab, onChangeTab}) {
    // debugger
    return <>
        <Breadcrumb>
                <BreadcrumbItem onClick={() => onChangeTab('list')} className={tab==='list' ? 'active' : ''}>
                    Products
                </BreadcrumbItem>
                <BreadcrumbItem onClick={() => onChangeTab('add')} className={tab==='add' ? 'active' : ''}>
                    Add SKU
                </BreadcrumbItem>
                <BreadcrumbItem onClick={() => onChangeTab('remove')} className={tab==='remove' ? 'active' : ''}>
                    Remove SKU
                </BreadcrumbItem>
                <BreadcrumbItem onClick={() => onChangeTab('upload')} className={tab==='upload' ? 'active' : ''}>
                    Upload
                </BreadcrumbItem>
            </Breadcrumb>
    </>
}