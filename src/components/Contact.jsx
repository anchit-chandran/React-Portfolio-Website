import React from 'react'
import contactIcon from '../resources/images/contactIcon.svg'

import { PopupButton } from '@typeform/embed-react'

export default function Contact() {
    return (
        <section id="Contact" className='row align-items-center skillsSection h-100 pt-5 my-5'>
            <div className="col h-100">
                <div className="row align-items-center justify-content-center mb-2">
                    <img src={contactIcon} alt="Contact Icon" className='sectionTitleIcon img-fluid' />
                </div>
                <div className="row align-items-center justify-content-center mb-2">
                    <PopupButton id="af79vtDN" style={{ fontSize: 20 }} className="contact-button">
                        Get in touch!
                    </PopupButton>
                </div>
            </div>
        </section>

    )
}