import React, { useEffect, useState } from 'react'
import MapContainer from '../mapcontainer'
import styles from "./landingpage.module.css";
import Modal from '../modal/modal';
import Weather from '../weather'
import Modalef from '../modal/modaleffect';

function LandingPage() {
  const [InputText, setInputText] = useState('')
  const [Place, setPlace] = useState('')
  const [modalOpen, setModalOpen] = useState(false);
  const [centerps, setCenterps] = useState("")
  const [endps, setEndps] = useState("")
  const [main, setMain] = useState("")
  const onChange = (e) => {
    setInputText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setPlace(InputText)
    setInputText('')
  }

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const setcenterPosition = (prop) => {
    setCenterps(prop);
  };
  const setendPosition = (prop) => {
    setEndps(prop);
  };
  const setmainWeather = (prop)=> {
    setMain(prop);
    //console.log(main);
  }
  return (
    <>
      <div className={styles.landingPage}>
        <form onSubmit={handleSubmit} className={styles.input}>
          <input placeholder="검색어를 입력하세요" onChange={onChange} value={InputText} />
          <button type="submit">검색</button>
        </form>
        <MapContainer searchPlace={Place} setcenterPosition={setcenterPosition}
        setendPosition={setendPosition} propModal={openModal} className={styles.map}/>
        <Modal open={modalOpen} close={closeModal} header="Modal heading" centerps={centerps} endps={endps}>
          <Weather center={centerps} end={endps} setmainWeather={setmainWeather}/>
          <Modalef main={main}/>
        </Modal >

      </div>
      
    </>
  )
}

export default LandingPage