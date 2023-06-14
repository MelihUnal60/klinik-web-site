import React from 'react'
import styles from './AppointmentForm.module.scss'
import Form from 'react-bootstrap/Form';
import appointmentimg from '../../Assets/main2.jpg'

function AppointmentForm() {
    return (

        <div className='container mt-5 mb-5'>
            <div className='row'>
                <div className='col-12'>
                    <div className={styles.appointmentLabel}>ONLİNE RANDEVU FORMU</div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <img className='img-fluid' src={appointmentimg}></img>
                    </div>
                    <div className='col-12 col-md-6'>
                        <Form>
                            <Form.Group className="mb-3 d-flex mt-5" controlId="exampleForm.ControlInput1">
                                <Form.Control className='mr-3' type="email" placeholder="Ad - Soyad" style={{ borderRadius: ' 15px' }} />
                                <Form.Control type="email" placeholder="Telefon" style={{ borderRadius: ' 15px' }} />
                            </Form.Group>
                            <Form.Group className="mb-3 d-flex">
                                <Form.Control className='mr-3' type="date" placeholder="" style={{ borderRadius: ' 15px' }} />
                                <Form.Control type="time" placeholder="Randevu saati seçiniz" style={{ borderRadius: ' 15px' }} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label style={{ marginLeft: '10px' }}>Bize İletmek İstediğiniz Mesajınız;</Form.Label>
                                <Form.Control as="textarea" rows={3} style={{ borderRadius: ' 15px' }} />
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            </div>



        </div>

    )
}
export default AppointmentForm;
