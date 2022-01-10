import { useState } from 'react'
import { Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter, Col } from 'reactstrap'
import { headers } from '../utils/constant'
import TableView from './TableView'

export default function AddProduct () {
    const [ openSku, setOpenSku] = useState(false)
    const [ skuList, setSkuList] = useState([])
    const [ sku, setSku ] = useState({
        skuId:'',
        programId:''
    })
    const [ skuDetails, setSkuDetails ] = useState({
        skuId:'',
        programId:'',
        title:'',
        mrp:'',
        currentPrice:'',
        merchPrice:'',
        saleQuantity:''
    })

    const onChangeSkuInput = (e, field) => {
        setSku({
            ...sku,
            [field]: e.target.value
        })
    }

    const onChangeSkuDetailsInput = (e, field) => {
        setSkuDetails({
            ...skuDetails,
            [field]: e.target.value
        })
    }

    const openSkuDetails = () => {
        //dummy sku details
        var dummySkuDetails = {
            title:'SKU 1',
            mrp:'100',
            currentPrice:'80',
            merchPrice:'',
            saleQuantity:''
        }
        setSkuDetails(
            {
                ...skuDetails,
                ...dummySkuDetails,
                ...sku
            }
        )
        setOpenSku(true)
    }

    const closeSkuDetails = () => {
        setOpenSku(false)
    }

    const addSkuToList = (sku) => {
        setSku({
            skuId:'',
            programId:''
        })
        setSkuList([...skuList,sku])
        setSkuDetails({
            skuId:'',
            programId:'',
            title:'',
            mrp:'',
            currentPrice:'',
            merchPrice:'',
            saleQuantity:''
        })
        setOpenSku(false)
    }

    const deleteRow = (i) => {
        skuList.splice(i,1)
        setSkuList([...skuList])
    }

    return <>
        <TableView heads={headers} rows={skuList} deleteRow={true} deleteRowHandler={deleteRow}/>
        <Form>
            <FormGroup>
                <Label
                for="skuid"
                hidden
                >
                SKU ID
                </Label>
                <Input
                id="skuid"
                name="skuid"
                value={sku?.skuId}
                placeholder="SKU ID"
                type="text"
                onChange={e => onChangeSkuInput(e,'skuId')}
                />
            </FormGroup>
            {' '}
            <FormGroup>
                <Label
                for="programid"
                hidden
                >
                Program ID
                </Label>
                <Input
                id="programid"
                name="programid"
                value={sku?.programId}
                placeholder="Programe ID"
                type="text"
                onChange={e => onChangeSkuInput(e,'programId')}
                />
            </FormGroup>
            {' '}
            <Button onClick={openSkuDetails}>
                Check Product
            </Button>
        </Form>
        <Modal isOpen={openSku}>
            <ModalHeader>
            Modal title
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup row>
                        <Label
                            for="merchPrice"
                            sm={4}
                            >
                            SKU ID
                        </Label>
                        <Col sm={8}>
                            <div>{skuDetails?.skuId}</div>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label
                            for="merchPrice"
                            sm={4}
                            >
                            Program ID
                        </Label>
                        <Col sm={8}>
                            <div>{skuDetails?.programId}</div>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label
                            for="merchPrice"
                            sm={4}
                            >
                            SKU Title
                        </Label>
                        <Col sm={8}>
                            <div>{skuDetails?.title}</div>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label
                            for="merchPrice"
                            sm={4}
                            >
                            MRP
                        </Label>
                        <Col sm={8}>
                            <div>{skuDetails?.mrp}</div>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label
                            for="merchPrice"
                            sm={4}
                            >
                            Current Price
                        </Label>
                        <Col sm={8}>
                            <div>{skuDetails?.currentPrice}</div>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label
                            for="merchPrice"
                            sm={4}
                            >
                            Merchandised Price
                        </Label>
                        <Col sm={8}>
                            <Input
                                id="merchPrice"
                                name="merchPrice"
                                placeholder="Merchandised Price"
                                type="text"
                                value={skuDetails?.merchPrice}
                                onChange={e => onChangeSkuDetailsInput(e,'merchPrice')}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label
                            for="saleQuantity"
                            sm={4}
                            >
                            Sale Quantity
                        </Label>
                        <Col sm={8}>
                            <Input
                                id="saleQuantity"
                                name="saleQuantity"
                                placeholder="Sale Quantity"
                                type="text"
                                value={skuDetails?.saleQuantity}
                                onChange={e => onChangeSkuDetailsInput(e,'saleQuantity')}
                            />
                        </Col>
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button
                    color="primary"
                    onClick={()=>addSkuToList(skuDetails)}
                >
                    Add Product
                </Button>
                {' '}
                <Button onClick={closeSkuDetails}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    </>
}