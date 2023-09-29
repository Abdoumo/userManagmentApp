import { Select } from 'antd'
import React, { useState } from 'react';


const SelectWillaya = (props) => {
  let filterOnchange = props.filterOnchange
  const [onChange, setChange ] =  useState('')
  const handleChange = (event, label) => {
    filterOnchange(label['label'] )

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

    onChange={handleChange}
    options={[
      { "value": 1, "label": "Adrar" },
      { "value": 2, "label": "Chlef" },
      { "value": 3, "label": "Laghouat" },
      { "value": 4, "label": "Oum El Bouaghi" },
      { "value": 5, "label": "Batna" },
      { "value": 6, "label": "Béjaïa" },
      { "value": 7, "label": "Biskra" },
      { "value": 8, "label": "Béchar" },
      { "value": 9, "label": "Blida" },
      { "value": 10, "label": "Bouira" },
      { "value": 11, "label": "Tamanrasset" },
      { "value": 12, "label": "Tébessa" },
      { "value": 13, "label": "Tlemcen" },
      { "value": 14, "label": "Tiaret" },
      { "value": 15, "label": "Tizi Ouzou" },
      { "value": 16, "label": "Alger (Algiers)" },
      { "value": 17, "label": "Djelfa" },
      { "value": 18, "label": "Jijel" },
      { "value": 19, "label": "Sétif" },
      { "value": 20, "label": "Saïda" },
      { "value": 21, "label": "Skikda" },
      { "value": 22, "label": "Sidi Bel Abbès" },
      { "value": 23, "label": "Annaba" },
      { "value": 24, "label": "Guelma" },
      { "value": 25, "label": "Constantine" },
      { "value": 26, "label": "Médéa" },
      { "value": 27, "label": "Mostaganem" },
      { "value": 28, "label": "M'Sila" },
      { "value": 29, "label": "Mascara" },
      { "value": 30, "label": "Ouargla" },
      { "value": 31, "label": "Oran" },
      { "value": 32, "label": "El Bayadh" },
      { "value": 33, "label": "Illizi" },
      { "value": 34, "label": "Bordj Bou Arréridj" },
      { "value": 35, "label": "Boumerdès" },
      { "value": 36, "label": "El Tarf" },
      { "value": 37, "label": "Tindouf" },
      { "value": 38, "label": "Tissemsilt" },
      { "value": 39, "label": "El Oued" },
      { "value": 40, "label": "Khenchela" },
      { "value": 41, "label": "Souk Ahras" },
      { "value": 42, "label": "Tipaza" },
      { "value": 43, "label": "Mila" },
      { "value": 44, "label": "Aïn Defla" },
      { "value": 45, "label": "Naama" },
      { "value": 46, "label": "Aïn Témouchent" },
      { "value": 47, "label": "Ghardaïa" },
      { "value": 48, "label": "Relizane" }
  ]
  }
  />
    </div>
  )
}

export default SelectWillaya
