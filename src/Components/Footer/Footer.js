import React from 'react';
import styles from './Footer.module.scss';
import { BsTelephoneInboundFill } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { RiInstagramFill } from 'react-icons/ri';
import AccordionItem from '../Accordion/AccordionItem';


function Footer() {
    return (
        <div className={styles.footer}>

            <div className='container d-flex'>
                <div className='col-3 border-right-2px'>
                    <h4 className='mt-5 mb-3'>BİZE ULAŞIN</h4>
                    <button class="btn btn-outline-secondary w-100 mb-3" type="button"><BsTelephoneInboundFill />0212 503 00 05</button>
                    <button class="btn btn-outline-secondary w-100 mb-3" type="button">Online Randevu</button>
                    <button class="btn btn-outline-secondary w-100 mb-3" type="button">caliskandent@gmail.com</button>
                    <button class="btn btn-outline-secondary w-100 mb-3" type="button">
                        <BsFacebook />
                        <RiInstagramFill />
                    </button>
                </div>
                <div className='col-3'>
                    <h4 className='mt-5'>NASIL GİDİLİR?</h4>
                     <AccordionItem />   
                </div>
                <div className='col-3'>
                    <h4 className='mt-5'>LOKASYONUMUZ</h4>
                </div>
                <div className='col-3'>
                    <h4 className='mt-5'>SİZİ ARAYALIM</h4>
                </div>
            </div>

        </div>
    )
}
export default Footer;