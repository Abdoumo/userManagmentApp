import { Input, Select } from 'antd'
import React, { useState } from 'react'
import './rightSide/table.css'
const PAYEDComponent = (props) => {
        let filterOnchange = props.filterOnchange
        const [onChange, setChange ] =  useState(props.value,'')
        const [onChangePayment, setChangePayment ] =  useState( '')
        const handleChange = (event, label) => {
          
          // label['label'] === 'REST : ' ? : filterOnchange(label['label'] )
          // console.log(document.querySelector('#rest'))
          setChangePayment(label['label'])
          console.log(onChange, 'ffff')
          setChange(label['label'])
            if(onChange.includes('REST : ')){

                document.querySelector('#rest').readOnly = false
                setChange(label['label'])
            }else {
                document.querySelector('#rest').readOnly = true
                  filterOnchange(label['label'])
                  setChange(label['label'])
            }
            inputChange(label['label'])

            
        }
        const inputChange = (event) => {
            var value = onChangePayment+ event
            console.log(event, 'event')
            if (!onChange.includes("REST :")){
              document.getElementById('rest').value = '' 
            }else {
              setChange(value)
              filterOnchange(value)
            }
        }
  return (
    <div>
        <span>

      <Select
    showSearch
    id='payed'
    style={{ height:40 , width:200}}
    placeholder="peyée ?"
    optionFilterProp="children"
    filterOption={(input, option) => (option?.label ?? '').includes(input)}
    filterSort={(optionA, optionB) =>
        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
    }
    value = {{"value": onChange.includes("REST :") ? "REST ": onChange}}
    onChange={handleChange}
    options={[
            { "value": "NOT PAYED", "label": "NOT PAYED" },
            { "value": "REST :", "label": "REST :" },
            { "value": "PAYED", "label": "PAYED" }
        
    ]
}
/>
<Input size={'large'} id='rest' value={!onChange.includes("REST :") ? '': onChange.replace("REST :", '')}  style={{width: 200}} readOnly={!onChange.includes("REST :") ? 'readOnly': false}  onChange={ e => inputChange(e.target.value)}  placeholder="rest" />
</span>
    </div>
  )
}

export default PAYEDComponent
