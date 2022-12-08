import React from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { Button } from '@mui/material'

function Selected() {
  return (
    <div className="my-4">
      <div className="flex">
        <div className="flex justify-around items-center">
          <p className="text-xl ml-4">Paracetamol</p>
          <span className="ml-4"> (128 Products)</span>
          <Button
            className=""
            endIcon={<CloseIcon />}
            style={{
              backgroundColor: '#0ABAB5',
              marginLeft: '15px',
              color: 'white',
            }}
          >
            Aceclefenac
          </Button>
          <Button
            endIcon={<CloseIcon />}
            style={{
              backgroundColor: '#0ABAB5',
              marginLeft: '15px',
              color: 'white',
            }}
          >
            500mg
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Selected
