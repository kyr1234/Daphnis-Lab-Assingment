import React from 'react'
import TelegramIcon from '@mui/icons-material/Telegram'
function Item() {
  return (
    <div className="max-w-sm border-2  p-2 py-2  rounded-xl border-b-[15px] border-b-[#800500] rounded-b-xl rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWEboqtThRo3GW8ebiW6iEckNfUoHXeodTXA&usqp=CAUU"
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-center text-md mb-2">
          {' '}
          Favupiravir 400mg (Fabiflu) Tablets
        </div>
        <p className="text-red-700 text-center font-bold">
          Rs 1,175<span className="text-gray-400 font-bold">/stripe</span>
        </p>
      </div>
      <div>
        <div className="font-bold text-center text-md mb-2">
          {' '}
          Glenmark Pharmacuetical Limited
        </div>
        <p className="text-gray-500 text-center text-sm font-bold">
          PARVAT PATIYA SURAT, GUJARAT
        </p>
      </div>

      <div className="flex font-bold justify-center items-center border-t-2 p-2 mt-4 border-black">
        <TelegramIcon style={{ color: '#0ABAB5'}}  />
        <div className="text-[#0ABAB5]">Contact Supplier</div>
      </div>
    </div>
  )
}

export default Item
