import { Category } from '@material-ui/icons'
import React from 'react'
import SideBox from './SideBox/SideBox'
function SideBar() {
  const Box1 = [
    'Paracetamol Tablets',
    'Paracetamol Syrup',
    'Paracetamol Powder',
    { name: 'Aceclofenac', color: true },
    'Mafaladrate Simethicone Oral Suspension',
    'Mefenamic Paracetamol Syrup',
  ]
  const Box2 = [
    'Cipmol Paracetamol',
    'Pandal Paracetamol Rablets',
    'Combiflam',
    'Crocin Tablets',
    'Calpol Paracetamol Tablets',
    'Sump Tablet',
  ]
  const Box3 = ['Wholesaler', 'Manufacturer', 'Retailer', 'Exporter']
  const Box4 = [{ name: '500mg', color: true }, '650mg']
  const Box5 = ['Instas Pharmaceutical Ltd', 'Alkem Laboratories Ltd']
  const Box6 = ['Instas Pharmaceutical Ltd', 'Alkem Laboratories Ltd']

  return (
    <div className="grid grid-cols-1 ">
      <SideBox list={Box1} title="Related Category" />
      <SideBox list={Box2} title="Related Brands" />
      <SideBox list={Box3} title="Businsess Type" />
      <SideBox list={Box4} title="Strength" />
      <SideBox list={Box5} title="Manufacturer" />
      <SideBox list={Box6} title="Prescription/Non Prescription" />
    </div>
  )
}

export default SideBar
