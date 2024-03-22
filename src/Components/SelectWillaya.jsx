import { Select } from 'antd'
import React, { useState } from 'react';


const SelectWillaya = (props) => {
  let filterOnchange = props.filterOnchange
  let value=props.value
  const [onChange, setChange ] =  useState(value)
  const handleChange = (event, label) => {
    filterOnchange(label['label'] )
    setChange(label['label'])

}
  return (
    <div>
      <Select
    showSearch
    style={{ width: '100%' }}
    placeholder="Willaya"
    optionFilterProp="children"
    filterOption={(input, option) => (option?.label ?? '').includes(input)}
    filterSort={(optionA, optionB) =>
      (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
    }
    value={{"value": onChange}}
    onChange={handleChange}
    options={ [
      { "value": "Adrar", "label": "Adrar" },
      { "value": "Chlef", "label": "Chlef" },
      { "value": "Laghouat", "label": "Laghouat" },
      { "value": "Oum El Bouaghi", "label": "Oum El Bouaghi" },
      { "value": "Batna", "label": "Batna" },
      { "value": "Béjaïa", "label": "Béjaïa" },
      { "value": "Biskra", "label": "Biskra" },
      { "value": "Béchar", "label": "Béchar" },
      { "value": "Blida", "label": "Blida" },
      { "value": "Bouira", "label": "Bouira" },
      { "value": "Tamanrasset", "label": "Tamanrasset" },
      { "value": "Tébessa", "label": "Tébessa" },
      { "value": "Tlemcen", "label": "Tlemcen" },
      { "value": "Tiaret", "label": "Tiaret" },
      { "value": "Tizi Ouzou", "label": "Tizi Ouzou" },
      { "value": "Alger (Algiers)", "label": "Alger (Algiers)" },
      { "value": "Djelfa", "label": "Djelfa" },
      { "value": "Jijel", "label": "Jijel" },
      { "value": "Sétif", "label": "Sétif" },
      { "value": "Saïda", "label": "Saïda" },
      { "value": "Skikda", "label": "Skikda" },
      { "value": "Sidi Bel Abbès", "label": "Sidi Bel Abbès" },
      { "value": "Annaba", "label": "Annaba" },
      { "value": "Guelma", "label": "Guelma" },
      { "value": "Constantine", "label": "Constantine" },
      { "value": "Médéa", "label": "Médéa" },
      { "value": "Mostaganem", "label": "Mostaganem" },
      { "value": "M'Sila", "label": "M'Sila" },
      { "value": "Mascara", "label": "Mascara" },
      { "value": "Ouargla", "label": "Ouargla" },
      { "value": "Oran", "label": "Oran" },
      { "value": "El Bayadh", "label": "El Bayadh" },
      { "value": "Illizi", "label": "Illizi" },
      { "value": "Bordj Bou Arréridj", "label": "Bordj Bou Arréridj" },
      { "value": "Boumerdès", "label": "Boumerdès" },
      { "value": "El Tarf", "label": "El Tarf" },
      { "value": "Tindouf", "label": "Tindouf" },
      { "value": "Tissemsilt", "label": "Tissemsilt" },
      { "value": "El Oued", "label": "El Oued" },
      { "value": "Khenchela", "label": "Khenchela" },
      { "value": "Souk Ahras", "label": "Souk Ahras" },
      { "value": "Tipaza", "label": "Tipaza" },
      { "value": "Mila", "label": "Mila" },
      { "value": "Aïn Defla", "label": "Aïn Defla" },
      { "value": "Naama", "label": "Naama" },
      { "value": "Aïn Témouchent", "label": "Aïn Témouchent" },
      { "value": "Ghardaïa", "label": "Ghardaïa" },
      { "value": "Relizane", "label": "Relizane" }
  ]
  
  }
  />
    </div>
  )
}

export default SelectWillaya
