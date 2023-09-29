import { Input, Select } from 'antd'
import React, { useState } from 'react'
import './rightSide/table.css'
const PAYEDComponent = (props) => {
        let filterOnchange = props.filterOnchange
        const [onChange, setChange ] =  useState('')
        const [onChangePayment, setChangePayment ] =  useState('')
        const handleChange = (event, label) => {
            
            // label['label'] === 'REST : ' ? : filterOnchange(label['label'] )
            // console.log(document.querySelector('#rest'))
            setChangePayment(label['label'])
            if(label['label'] === 'REST : '){

                document.querySelector('#rest').readOnly = false
            }else {
                document.querySelector('#rest').readOnly = true
                  filterOnchange(label['label'])
            }

            
        }
        const inputChange = (event) => {
            var value = onChangePayment+ event
            filterOnchange(value)
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
    
    onChange={handleChange}
    options={[
        { "value": 1, "label": "NOT PAYED" },
        { "value": 2, "label": "REST : " },
        { "value": 3, "label": "PAYED" },
    ]
}
/>
<Input size={'large'} id='rest' style={{width: 200}} readOnly='readOnly'  onChange={ e => inputChange(e.target.value)}  placeholder="rest" />
</span>
    </div>
  )
}

export default PAYEDComponent
