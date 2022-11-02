import React from 'react'

// import SVGs
import projectsTitleIcon from "../resources/images/projectsTitleIcon.svg"

import algo from '../resources/images/algo.svg';
import dashboard from '../resources/images/dashboard.svg';
import calculator from '../resources/images/calculator.svg';
import book from '../resources/images/book.svg';

import React_icon from '../resources/images/react.svg';
import Python_icon from '../resources/images/py.svg';



export default function Projects(props) {

    const { projects } = props.data;

    return (
        <section id="Projects" className="row d-flex align-items-center justify-content-center text-start h-100 pt-5 my-5">
            <div className="row">
                <div className="col">
                    <div className="row align-items-center justify-content-center mb-2">
                        {/* <div className="col-1"> */}
                        <img src={projectsTitleIcon} alt="projects Icon" className='sectionTitleIcon img-fluid' />
                        {/* </div> */}
                    </div>
                    <div className="row text-center">
                        <h1 className='primary-font mb-3'>&lt; Projects /&gt;</h1>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-10 col-lg-4 d-flex flex-column align-items-center">

                            {projects.slice(0, 2).map(project => {
                                return (
                                    <div class="embed-responsive embed-responsive-1by1 text-center">
                                        <div class="embed-responsive-item position-relative">
                                            <div className="embed-responsive-item proj-circle first position-absolute d-flex align-items-center justify-content-center">

                                                {project.skills[0] === 'Python' ? (<img src={Python_icon} alt="python icon" className='coding_logo' />) : (<img src={React_icon} alt="react icon" />)}

                                            </div>
                                            <div className="">
                                                <img
                                                    src={project.title === "Treatment Response Dashboard" ? dashboard : algo}
                                                    className='proj-img img-fluid'
                                                    alt="project icon" />
                                            </div>
                                            <div className="">
                                                <h6 className='fw-bold'>{project.title}</h6>
                                                {project.skills.map(skill => <p className='mb-0'>{skill}</p>)}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}



                        </div>

                        <div className="col-10 col-lg-4 d-flex flex-column align-items-center">

                            {projects.slice(2, 4).map(project => {
                                return (
                                    <a className="embed-responsive embed-responsive-1by1 text-center tt"
                                        href={project.url ? project.url : "#"}
                                        data-bs-toggle="tooltip" data-bs-placement="top" title="Click to see project!">
                                        {console.log(project.url)}
                                        <div className="embed-responsive-item position-relative active-links">
                                            <div className="embed-responsive-item proj-circle second position-absolute d-flex align-items-center justify-content-center">

                                                {project.skills[0] === 'Python' ? (<img src={Python_icon} alt="python icon" className='coding_logo' />) : (<img src={React_icon} alt="react icon" />)}

                                            </div>
                                            <div className="">
                                                <img
                                                    src={project.title === "Calculator App" ? calculator : book}
                                                    className='proj-img img-fluid'
                                                    alt="project icon" />
                                            </div>
                                            <div className="">
                                                <h6 className='fw-bold'>{project.title}</h6>
                                                {project.skills.map(skill => <p className='mb-0'>{skill}</p>)}
                                            </div>
                                        </div>

                                    </a>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}