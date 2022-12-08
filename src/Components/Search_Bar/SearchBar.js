import React from 'react'
import { TextField, Button } from '@material-ui/core'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
function SearchBar() {
  return (
    <div className="flex mt-4">
      <div className="ml-4">
        <TextField
          id="outlined-basic"
          style={{ width: 500 }}
          label={
            <div className="flex items-center ">
              <SearchOutlinedIcon />
            </div>
          }
          defaultValue="Paracetamol"
          variant="outlined"
        />
      </div>

      <button className="text-white bg-[#0ABAB5] rounded-sm px-6">Search</button>
    </div>
  )
}
export default SearchBar
