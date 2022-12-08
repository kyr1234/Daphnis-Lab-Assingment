import React from 'react'
import LogoDevRoundedIcon from '@mui/icons-material/LogoDevRounded'
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded'
function Header() {
  return (
    <div className="bg-[#800500] w-full flex aitems-center  h-20 text-white">
      <div className="flex justify-center  items-center w-1/5">
        <div className=" mr-4">
          <LogoDevRoundedIcon className="text-xl" />
        </div>
        <div>
          <p className="font-bold text-xl">Medical Darpan</p>
        </div>
      </div>
      <div className="flex justify-around items-center w-3/5">
        <h4>Home</h4>
        <h4>Products</h4>
        <h4>Distributors</h4>
        <h4>Manufacturers</h4>
        <h4>About Us</h4>
        <h4>Blog</h4>
      </div>
      <div className="grid grid-cols-2 w-1/5">
        <div className="col-span-1"></div>
        <div className="flex items-center justify-around">
          <h2 className="">Login</h2>
          <AccountBoxRoundedIcon />
        </div>
      </div>
    </div>
  )
}

export default Header
