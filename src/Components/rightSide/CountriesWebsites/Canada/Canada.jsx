import React, { useContext, useEffect } from 'react'
import TableComponent from '../../table'

const Canada = ({data}) => {
  console.log(data, 'datab')
  useEffect(() => {
    
  }, [data])
  return (
    <div>
      {
      data['CANADA'] && (
          <TableComponent country='CANADA' />
        )
      }
      canada
    </div>
  )
}

export default Canada
