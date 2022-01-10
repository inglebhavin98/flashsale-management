import React from 'react'
// import { Button } from "reactstrap";
import Header from './components/Header'
import Campaign from './components/Campaign'
import ProductManagement from "./components/ProductManagement";
export const Homepage = () => {
  return (
    <>
      <Header />
      <Campaign />
      <hr/>
      <ProductManagement/>
    </>
  )
}
