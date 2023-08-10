import React, { useState } from 'react';
import styles from './RoentgenCard.module.scss';
import sendr from '../../Assets/sendr.png';
import Form from 'react-bootstrap/Form';
import { sendRoentgenRecord } from '../../APIService/Services';
import axios from 'axios';

function RoentgenCard() {


  const [selectedFile, setSelectedFile] = useState(null);
  const [nameSurname, setNameSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [textArea, setTextArea] = useState('');

  const handleFileChange = (e) => {
    e.preventDefault();
    setSelectedFile(e.target.files[0]);
  }


  const handleUpload = async () => {
    if (selectedFile && nameSurname && phone && textArea) {
      const formData = new FormData();

      formData.append("roentgenImg", selectedFile,selectedFile.name);
      formData.append('nameSurname', nameSurname);
      formData.append('phone', phone);
      formData.append('textArea', textArea);

      try {
        await axios.post('http://localhost:5141/RoentgenRecord', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        console.log('Data uploaded successfully.');
      } catch (error) {
        console.error('Error uploading data:', error);
      }

    }
  };




  return (
    <div className={`container-fluid ${styles.rbigContainer}`} >
      <div className={`container ${styles.roentgenMain}`}>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <h2 className={`text-center align-items-center`}>RÖNTGEN GÖNDERİN</h2>
        <h5 className='text-center'>Elinizde mevcut ağız-çene görüntülerini bizimle paylaşın, en hızlı ve en ekonomik şekilde tedavinizi planlayalım.</h5>
        <div className={`row ${styles.roentgenContent}`}>
          <div className={`col-12 col-md-6 d-flex justify-content-start ${styles.rPhoto}`}>
            <img src={sendr} alt='...' />
          </div>
          <div className={`col-12 col-md-6`}>
            <div className="mr-3">
              <label for="formFile" className="form-label">Yüklemek İstediğiniz Dosyayı Seçin</label>
              <input className="form-control p-1" type="file" onChange={handleFileChange} id="formFile" />
            </div>
            <div className="input-group mt-3">
              {/* <span className="input-group-text" id="basic-addon1"> Adınız </span> */}
              <input type="text" placeholder='Adınız' id='roentgenNameSurname' onChange={(e) => setNameSurname(e.target.value)} value={nameSurname} className="form-control" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mt-3">
              {/* <span className="input-group-text" id="basic-addon1">Telefon</span> */}
              <input type="text" placeholder='Telefon Numarası' value={phone} onChange={(e) => setPhone(e.target.value)} id='roentgenTel' className="form-control" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <Form.Group className={`mt-3 ${styles.formMsg}`} >
              <Form.Control type='text' value={textArea} onChange={(e) => setTextArea(e.target.value)} placeholder='Bize iletmek istediklerinizi buraya yazabilirsiniz' id='roentgenTxt' className={`mr-3 ${styles.formCntrl2}`} as="textarea" rows={3} />
            </Form.Group>
            <div className={styles.btnForm}>
              <button type="button" onClick={handleUpload} className="btn btn-secondary mt-3 btn-lg ">GÖNDER</button>
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}

export default RoentgenCard;
