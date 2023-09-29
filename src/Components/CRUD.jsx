import React, { useState } from 'react'
import { Button, Input, Modal } from 'antd';
import { onValue, ref, set } from "firebase/database";
import { db } from '../firebase';
import { UserOutlined,PhoneOutlined, MailOutlined} from '@ant-design/icons';
import { DatePicker } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import SelectWillaya from './SelectWillaya';
import PAYEDComponent from './PAYED';

const CreateUser = (para) => {
    const location = useLocation()
    const navigate = useNavigate()
    let WebsiteUserCreate = location.state.country
    console.log(WebsiteUserCreate, 'test')
    const { RangePicker } = DatePicker;
    const [ name, SetName ] = useState('')
    const [ size, SetSize ] = useState('large')
    const [ lastName, SetLastName ] = useState('')
    const [ phoneNumber, SetPhoneNumber ] = useState('')
    const [ email, SetEmail ] = useState('')
    const [ DOT, SETDOT ] = useState('')
    const [ passportSt, SETpassportSt ] = useState('')
    const [ PAYED, SETPAYED ] = useState('')
    const [ NPassport, SETNPassport ] = useState('')
    const [ NRPassport, SETNRPassport ] = useState('')
    const [ VILLE, SETVILLE ] = useState('')
    const [ ADRESS, SETADRESS ] = useState('')
    const [ willaya, setWillaya ] = useState('')
    const [ etatCivile, setEtatCivile ] = useState('')
    const [modal, contextHolder] = Modal.useModal();

    function writeUserData() {
        set(ref(db, `${WebsiteUserCreate.toUpperCase()}/` + `${name} ${lastName}`), {
          name: name,
          lastName: lastName,
          mail : email,
          DOT :DOT,
          NPassport : NPassport,
          passportSt :passportSt,
          mail :email,
          phone :phoneNumber,
          PAYED :PAYED,
          willaya :willaya,
          etatCivile :etatCivile,

        }).then(alert('submitted')).catch(err => alert(err))
        countDown()

      }
      const countDown = () => {
        let secondsToGo = 5;
        const instance = modal.success({
          title: 'This is a notification message',
          content: `This modal will be destroyed after ${secondsToGo} second.`,
        });
        const timer = setInterval(() => {
          secondsToGo -= 1;
          instance.update({
            content: `This modal will be destroyed after ${secondsToGo} second.`,
          });
        }, 1000);
        setTimeout(() => {
          clearInterval(timer);
          instance.destroy();
        }, secondsToGo * 1000);
        navigate(`/${WebsiteUserCreate}`)
      };
      
    return(
    <div id='CreateUser'>
        <div className="form">
            <Input size={size} value={name} onChange={ele => SetName(ele.target.value)} prefix={<UserOutlined />} placeholder="Prénom" />
            <Input size={size} value={lastName} onChange={ele => SetLastName(ele.target.value)} prefix={<UserOutlined />} placeholder="Nom" />
            <Input size={size} value={phoneNumber} onChange={ele => SetPhoneNumber(ele.target.value)} prefix={<PhoneOutlined />} placeholder="Numero téléphone" />
            <Input size={size} type='email' value={email} onChange={ele => SetEmail(ele.target.value)} prefix={<MailOutlined />} placeholder="Email" />
            <DatePicker  onChange={ele => SETDOT(new Date(ele.$d).toLocaleDateString())} placeholder='Date de naissance' />
            {/* Passport */}
            <Input size={size} value={NPassport} onChange={ele => SETNPassport(ele.target.value)} prefix={<MailOutlined />} placeholder="Numero de passport" />
            <Input size={size} value={NRPassport} onChange={ele => SETNRPassport(ele.target.value)} prefix={<MailOutlined />} placeholder="Numero de ref passport" />
            <Input size={size} value={VILLE} onChange={ele => SETVILLE(ele.target.value)} prefix={<MailOutlined />} placeholder="Ville" />
            <Input size={size} value={ADRESS} onChange={ele => SETADRESS(ele.target.value)} prefix={<MailOutlined />} placeholder="ADRESS" />
            <RangePicker placeholder='passport status' onChange={(ele) => SETpassportSt(`${new Date(ele[0].$d).toLocaleDateString()} - ${new Date(ele[1].$d).toLocaleDateString()}`)}  showTime />
            <SelectWillaya filterOnchange = {(event) => setWillaya(event)} />
            <PAYEDComponent filterOnchange={e => SETPAYED(e)} />
            <Input size={size} value={etatCivile} onChange={ele => setEtatCivile(ele.target.value)} prefix={<MailOutlined />} placeholder="EtatCivile" />
            <Button type="primary" onClick={writeUserData} style={{margin: '25px'}} size={'large'}> Ajouter un utulisateur </Button>
            {contextHolder}
        </div>
    </div>
   )
}

const ReadData = () => {
    

}

const EditUser = () => {}
const UpdateUser = () => { 
    return(
        <div>gggggggggggggggggggggggggggg</div>
    )
 }

export { CreateUser, EditUser,  UpdateUser, ReadData }