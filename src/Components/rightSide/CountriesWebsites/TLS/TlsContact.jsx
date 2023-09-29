import React, { useContext, useEffect } from 'react'
import TableComponent from '../../table'

const TlsContact = ({data}) => {
  console.log(data, 'datab')
  useEffect(() => {
    
  }, [data])
  return (
    <div>
      {
        data['TLS'] && (
          <TableComponent country='TLS' />
        )
      }
      tls
    </div>
  )
}

export default TlsContact
