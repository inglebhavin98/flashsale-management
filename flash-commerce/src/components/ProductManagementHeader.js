import { Breadcrumb, BreadcrumbItem } from 'reactstrap'

export default function ProductManagementHeader () {
    return <>
        <Breadcrumb>
                <BreadcrumbItem>
                    Upload
                </BreadcrumbItem>
                <BreadcrumbItem className="active">
                    Add SKU
                </BreadcrumbItem>
                <BreadcrumbItem>
                    Remove SKU
                </BreadcrumbItem>
            </Breadcrumb>
    </>
}