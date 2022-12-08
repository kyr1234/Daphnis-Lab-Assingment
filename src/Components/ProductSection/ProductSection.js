import React from 'react'
import SideBar from '../SideBar/SideBar'

import Products from '../Products/Products'
function ProductSection() {
  return (
    <div className=" grid grid-cols-6 ">
      <div className="col-span-1 ">
        <SideBar />
      </div>
      <div className="col-span-5 px-4">
        <Products />
      </div>
    </div>
  )
}

export default ProductSection
