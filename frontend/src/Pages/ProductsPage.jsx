import React from 'react'
import ProductDetails from '../Containers/Products/ProductDetails'
import ProductInformationTabs from '../Containers/Products/ProductInformationTabs'
import PeopleAlsoBought from '../Containers/Products/PeopleAlsoBought'
import RecentlyViewed from '../Containers/Products/RecentlyViewed'

const ProductsPage = () => {
  return (
    <div>
      <ProductDetails/>
      <ProductInformationTabs/>
      <PeopleAlsoBought/>
      <RecentlyViewed/>     
    </div>
  )
}

export default ProductsPage
