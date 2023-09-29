import React, { useContext, useEffect } from 'react'
import TableComponent from '../../table'

const Vfs = ({data}) => {
  useEffect(() => {
    
  }, [data])
  return (
    <div>
      {
      data['VFS'] && (
          <TableComponent country='VFS' />
        )
      }
      vfs
    </div>
  )
}

export default Vfs
