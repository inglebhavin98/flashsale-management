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
const CampaignSkuId = styled(Input)`
  margin: 10px;
  width: calc(42% - 10px);
  height: 45px;
`
const CampaignProgrammeId = styled(Input)`
  margin: 10px;
  width: calc(42% - 10px);
  height: 45px;
`

const AddButton = styled(Button)`
  height: 45px;
  width: 10%;
  margin: 10px;
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

  const [programmeId, setProgrammeId] = useState('')
  const handleProgrammeIdChange = (e) => {
    setProgrammeId(e?.target?.value)
  }

  const [products, addProducts] = useState([])
  const handleAddProducts = () => {
    addProducts([...products, { skuID, programmeId }])
    setSkuId('')
    setProgrammeId('')
  }
  return (
    <div>
      <CampaignHeader>Creat Campaign</CampaignHeader>
      <CampaignTitle placeholder="Title" value={title} onChange={(e) => handleTitleChange(e)} />
      {products?.map((product, index) => {
        return (
          <div key={`campaign-products-${index}`}>
            <div style={{ display: 'flex' }}>
              <CampaignSkuId placeholder="SKU ID" value={product?.skuID} />
              <CampaignProgrammeId placeholder="Programme ID" value={product?.programmeId} />
            </div>
          </div>
        )
      })}
      <div style={{ display: 'flex' }}>
        <CampaignSkuId placeholder="SKU ID" value={skuID} onChange={(e) => handleSkuIdChange(e)} />
        <CampaignProgrammeId
          placeholder="Programme ID"
          value={programmeId}
          onChange={(e) => handleProgrammeIdChange(e)}
        />
        <AddButton color="success" outline onClick={handleAddProducts}>
          Add
        </AddButton>
      </div>
      {/* <div>
        <Button color="danger" onClick={function noRefCheck() {}}>
          Click Me
        </Button>
        <Modal toggle={function noRefCheck() {}} isOpen={true}>
          <ModalHeader toggle={function noRefCheck() {}}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={function noRefCheck() {}}>
              Do Something
            </Button>{' '}
            <Button onClick={function noRefCheck() {}}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div> */}

      {console.log(title)}
      {console.log(skuID)}
      {console.log(programmeId)}
      {console.log(products)}
    </div>
  )
}

export default Campaign
