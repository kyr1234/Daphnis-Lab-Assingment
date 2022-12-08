import React from 'react'
import CloseIcon from '@mui/icons-material/Close'

function SideBox({ list, title }) {
  return (
    <div>
      <div className="text-center bg-gray-300 p-2">{title}</div>
      <div className="p-2">
        {list &&
          list.map((item) => {
            if (item.color) {
              return (
                <div className="bg-[#0ABAB5] flex justify-between rounded-md mb-4  text-white px-2">
                  {item.name}
                  <CloseIcon style={{width:'15px'}} />
                </div>
              )
            } else {
              return <div className="mb-4 px-2 ">{item}</div>
            }
          })}
      </div>
    </div>
  )
}

export default SideBox
