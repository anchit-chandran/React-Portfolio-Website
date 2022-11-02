import React from 'react'

import skillsHead from '../resources/images/skillsHead.svg';
import tick from "../resources/images/tick.svg";
import dataSciIcon from '../resources/images/dataSciIcon.svg';
import frontEndIcon from '../resources/images/frontEndComputer.svg'

export default function Skills(props) {

    const { skills_coding } = props.data;

    return (
        <section id="Skills" className='row align-items-center skillsSection h-100 pt-sm-0 my-sm-0 pt-lg-5 my-lg-5'>
            <div className="col h-100">

                <div className="row align-items-center justify-content-center mb-2">
                    {/* <div className="col-1"> */}
                    <img src={skillsHead} alt="Skills Icon" className='sectionTitleIcon img-fluid' />
                    {/* </div> */}
                </div>
                <div className="row text-center">
                    <h1 className='primary-font mb-1 mb-lg-5'>&lt; Skills /&gt;</h1>
                </div>
                <div className="row justify-content-evenly mt-5 mt-md-0">
                    <div className="col-12 col-md-4 text-center mb-5">
                        <div className="skillItem skillTitle d-flex align-items-center justify-content-evenly">
                            <img src={dataSciIcon} alt="Data Science icon" className='skillsTitleIcon m-3'/>
                            <h3 className='m-0 text-center'>Data Science</h3>
                        </div>
                        {skills_coding.data_science.map(skill => {
                            return (
                                <div key={skill} className="skillItem my-3 d-flex align-items-center">
                                    <img src={tick} className='tickIconSkills m-2' alt='tick icon'/>
                                    <h5 className='text-start m-0' >{skill}</h5>
                                </div>
                            )
                        })}
                    </div>
                    <div className="col-12 col-md-4 text-center mb-5">
                        <div className="skillItem skillTitle d-flex align-items-center justify-content-evenly">
                            <img src={frontEndIcon} alt="Front end web icon" className='skillsTitleIcon m-3'/>
                            <h3 className='m-0 front-end-title-text'>Front-end Web Development</h3>
                        </div>
                        {skills_coding.front_end.map(skill => {
                            return (
                                <div key={skill} className="skillItem my-3 d-flex align-items-center">
                                    <img src={tick} className='tickIconSkills m-2' alt='tick icon'/>
                                    <h5 className='text-start m-0' >{skill}</h5>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}