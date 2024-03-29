import React from 'react';
import styles from './AppointmentForm.module.scss';
import Form from 'react-bootstrap/Form';
import { sendAppointmentForm } from '../../APIService/Services';


function AppointmentForm() {
    return (

        <div id='Appointment' className={`container-fluid ${styles.appointmentContainer}`}>
            <div className='row'>
                <div className='col-12'>
                    <div className={styles.appointmentLabel}>ONLİNE RANDEVU FORMU</div>
                </div>
            </div>
            <div className={`row ${styles.appointmentGenel}`}>
                
                    
                    <div className={`col-12 ${styles.appointmentForm}`}>
                        <Form>
                            <Form.Group className={`mb-3 ${styles.formMsg}`} controlId="exampleForm.ControlInput1">
                                <Form.Control className={`m-0 p-1 ${styles.formCntrl}`} type="email" id='appNameSurname' placeholder="Ad - Soyad" />
                                <Form.Control className={`m-0 p-1 ${styles.formCntrl}`} type="email" id='appPhone' placeholder="Telefon"  />
                            </Form.Group>
                            <Form.Group className={`mb-3 ${styles.formMsg}`}>
                                <Form.Control className={`m-0 p-1 ${styles.formCntrl}`} type="date" id='appDate' placeholder="" />
                                <Form.Control className={`m-0 p-1 ${styles.formCntrl}`} type="time" id='appTime' placeholder="Randevu saati seçiniz" />
                            </Form.Group>
                            
                            <Form.Group className={`mb-3 ${styles.formMsg}`} controlId="exampleForm.ControlTextarea1">
                                <Form.Control placeholder='Şikayetiniz ile ilgili bilgi verebilir misiniz?' id='appTxt' className={`mr-3 ${styles.formCntrl2}`} as="textarea" rows={3}  />
                            </Form.Group>
                            <div className={styles.btnForm}>
                            <button type="button" onClick={sendAppointmentForm} className="btn btn-primary btn-lg ">GÖNDER</button>
                            </div>
                        </Form>
                    </div>
                
            </div>



        </div>

    )
}
export default AppointmentForm;
