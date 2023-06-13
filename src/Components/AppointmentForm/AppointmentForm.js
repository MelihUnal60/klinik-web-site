import React from 'react'
import styles from './AppointmentForm.module.scss'
import Form from 'react-bootstrap/Form';

function AppointmentForm() {
    return (
        <div className=''>
            <div className='container mt-5 mb-5'>

                <div className={styles.appointmentLabel}>ONLİNE RANDEVU FORMU</div>

                <div className={styles.appointmentBox}>
                    
                        <h1 className='mr-5'>ÇALIŞKAN <br></br>DENT</h1>
                    
                    
                        <Form>
                            <Form.Group className="mb-3 d-flex mt-5" controlId="exampleForm.ControlInput1">
                                <Form.Control className='mr-3' type="email" placeholder="Ad - Soyad" style={{borderRadius:' 15px'}} />
                                <Form.Control type="email" placeholder="Telefon" style={{borderRadius:' 15px'}}/>
                            </Form.Group>
                            <Form.Group className="mb-3 d-flex">
                                <Form.Control className='mr-3' type="email" placeholder="" style={{borderRadius:' 15px'}}/>
                                <Form.Control type="email" placeholder="name@example.com" style={{borderRadius:' 15px'}}/>
                            </Form.Group>
                            <Form.Group className="mb-3 d-flex">
                                <Form.Control className='mr-3' type="email" placeholder="name@example.com" style={{borderRadius:' 15px'}}/>
                                <Form.Control type="email" placeholder="name@example.com" style={{borderRadius:' 15px'}}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Bize İletmek İstediğiniz ;</Form.Label>
                                <Form.Control as="textarea" rows={3} style={{borderRadius:' 15px'}}/>
                            </Form.Group>
                        </Form>
                    

                </div>


            </div>
        </div>
    )
}
export default AppointmentForm;
