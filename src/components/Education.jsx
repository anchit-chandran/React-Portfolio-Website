import React from 'react'

import booksEd from '../resources/images/booksEd.svg'
import certificateEd from '../resources/images/certificateEd.svg'

export default function Education(props) {

    const { education } = props.data
    console.log(education)
    return (
        <section id="Education" className='row align-items-center skillsSection h-100 pt-sm-0 my-sm-0 pt-lg-5 my-lg-5'>
            <div className="col h-100">
                <div className="row align-items-center justify-content-center mb-2">
                    {/* <div className="col-1"> */}
                    <img src={booksEd} alt="Skills Icon" className='sectionTitleIcon img-fluid' />
                    {/* </div> */}
                </div>
                <div className="row text-center">
                    <h1 className='primary-font mb-5'>&lt; Education /&gt;</h1>
                </div>
                <div className="row align-items-center justify-content-center">
                    <div className="col-10 col-lg-6">
                        {
                            education.map(place => {
                                return (
                                    <div className="skillItem skillTitle d-flex align-items-center justify-content-evenly my-3 row p-3 pb-0">
                                        <div className="row">
                                            <h3 className=''>{place.place} <em>{place.degree}</em> </h3>
                                        </div>
                                        <div className="row align-items-between justify-content-center">
                                            <div className="col d-flex flex-column justify-content-center">
                                                <h5>({place.time})</h5>
                                            </div>
                                            <div className="col d-flex flex-column align-items-end justify-content-center">
                                                <img src={certificateEd} alt="certificate" className='certificate img-fluid'/>
                                            </div>
                                        </div>

                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
            </div>
        </section>
    )
}