import { Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import styled from '@emotion/styled'
import React, { useState } from 'react'
const CampaignHeader = styled.h2`
  padding: 12px;

  background-color: #b0b0b0;
  font-size: 22px;
  color: black;
  font-weight: bold;
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    font-size: 32px;
    padding: 20px;
  }
`
const CampaignTitle = styled.textarea`
  margin: 10px;
  height: 90px;
  width: calc(100% - 20px);
`
const InputId = styled(Input)`
  margin: 10px;
  width: calc(100% - 20px);
  height: 45px;
  @media (min-width: 768px) {
    width: calc(42% - 10px);
  }
`
// const InputId = styled(Input)`
//   margin: 10px;
//   width: calc(100% - 20px);
//   height: 45px;
//   @media (min-width: 768px) {
//     width: calc(42% - 10px);
//   }
// `
const CampaignInputWrapper = styled.div`
  display: block;
  @media (min-width: 768px) {
    display: flex;
  }
`
const AddButton = styled(Button)`
  height: 45px;
  width: 100px;
  margin: 10px;
  @media (min-width: 768px) {
    width: 10%;
  }
`
const CenterContent = styled.div`
  display: flex;
  justify-content: center;
`

export const Campaign = () => {
  const [title, setTitle] = useState('')
  const handleTitleChange = (e) => {
    setTitle(e?.target?.value)
  }

  const [skuID, setSkuId] = useState('')
  const handleSkuIdChange = (e) => {
    setSkuId(e?.target?.value)
  }

  const [programmeID, setProgrammeId] = useState('')
  const handleProgrammeIdChange = (e) => {
    setProgrammeId(e?.target?.value)
  }
  const [isAddProductModalOpen, setAddProductModal] = useState(false)
  const [products, addProducts] = useState([])
  const handleAddProduct = () => {
    addProducts([...products, { skuID, programmeID }])
    setSkuId('')
    setProgrammeId('')
    handleAddProductModal()
  }
  const handleDeleteProduct = (productSkuID) => {
    const deletedProductList = products.filter((product) => product?.skuID !== productSkuID)
    addProducts(deletedProductList)
  }
  const handleAddProductModal = () => {
    setAddProductModal((prevModalState) => !prevModalState)
  }
  const handleOnSubmit = () => {}
  return (
    <div>
      <CampaignHeader>Creat Campaign</CampaignHeader>
      <CampaignTitle placeholder="Title" value={title} onChange={(e) => handleTitleChange(e)} />
      {products?.map((product, index) => {
        return (
          <div key={`campaign-products-${index}`}>
            <CampaignInputWrapper>
              <InputId placeholder="SKU ID" value={product?.skuID} />
              <InputId placeholder="Programme ID" value={product?.programmeID} />
              <AddButton color="danger" outline onClick={() => handleDeleteProduct(product?.skuID)}>
                Delete
              </AddButton>
            </CampaignInputWrapper>
          </div>
        )
      })}
      <CampaignInputWrapper>
        <InputId placeholder="SKU ID" value={skuID} onChange={(e) => handleSkuIdChange(e)} />
        <InputId
          placeholder="Programme ID"
          value={programmeID}
          onChange={(e) => handleProgrammeIdChange(e)}
        />
        <AddButton color="success" outline onClick={handleAddProductModal}>
          Add
        </AddButton>
      </CampaignInputWrapper>
      <Modal toggle={handleAddProductModal} isOpen={isAddProductModalOpen}>
        <ModalHeader toggle={handleAddProductModal}>
          Do you really want to add the following items
        </ModalHeader>
        <ModalBody>
          <div>{`SKU ID : ${skuID}`}</div>
          <div> {`Programme ID : ${programmeID}`}</div>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={handleAddProduct}>
            Yes
          </Button>{' '}
          <Button color="danger" onClick={handleAddProductModal}>
            No
          </Button>
        </ModalFooter>
      </Modal>
      <CenterContent>
        <Button color="primary" onClick={handleOnSubmit} style={{ marginTop: '20px' }}>
          Submit
        </Button>
      </CenterContent>
      {/* {console.log(title)}
      {console.log(skuID)}
      {console.log(programmeID)}
      {console.log(products)} */}
    </div>
  )
}

export default Campaign
