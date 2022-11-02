import React from 'react'
import Typical from 'react-typical';

import { ReactComponent as Computer } from '../resources/images/computer.svg';
import { ReactComponent as Doctor } from '../resources/images/doctor.svg';
// import { ReactComponent as headBrain } from '../resources/images/Head_brain.svg';
import { ReactComponent as Headbrain } from '../resources/images/Head_brain.svg';

export default function Header() {

    // set up for typing animation

    const typing_speed = 1500;

    const typing_text = (

        <Typical className=""
            loop={Infinity}
            wrapper='b'
            steps={[
                'coding 💻', typing_speed,
                'writing ✏', typing_speed,
                'paediatrics 👶', typing_speed,
                'mental health 🧠', typing_speed,
            ]}
        />)

    const size_icons = 150

    return (
            <section id='Header' className="row d-flex align-items-center justify-content-center h-100 p-md-5">
                <div className="col d-flex flex-column justify-content-center mt-5">
                    <div className="row">
                        <div className="col">
                            <h1 className="mb-5 text-center hi-text-anchit py-5 mt-3 mt-md-0">Hi, I'm Anchit 👋</h1>
                        </div>
                    </div>
                    <div className="row pb-5">
                        <div className="col">
                            <h1 className="text-center hi-text p-4">I'm a medical student who likes <span><h1 className='typingAnimation hi-text'>{typing_text}</h1></span></h1>
                        </div>
                    </div>

                    <div className="row p-5 pb-0">
                        <div className="col pb-5 px-0 d-flex justify-content-evenly align-items-center">
                            <Doctor width={size_icons} height={size_icons} className='px-2 ' />
                            <Computer width={size_icons} height={size_icons} className='px-2 ' />
                            <Headbrain width={size_icons} height={size_icons} className='px-2 ' />
                        </div>
                    </div>
                </div>
            </section>
    )
}