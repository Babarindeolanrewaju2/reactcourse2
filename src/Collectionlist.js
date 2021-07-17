import React, { useContext, useState } from "react";
import './App.css';
import { CoursesContext } from './context.js';

const Collectionlist = ({course}) => {
    const { removecoursetoCollection} = useContext(CoursesContext);
    const [active, setActive] = useState(false);
    const toggleclassName = () => {
      setActive(!active);
    }
    return (
        <>
        <div className="col-lg-4 col-md-6">
        <div className="single-courses">
            <div className="courses-images">
                <a href="courses-details.html"><img src={course.img} alt="Courses"/></a>

                <div className="courses-option dropdown">
                    <button className="option-toggle" data-bs-toggle="dropdown" aria-expanded="false" onClick={toggleclassName}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <ul id="dropdown-men" className={`dropdown-menu ${active ? "show" : null}`}>
                         {/*<li><a onClick={e => {removecoursetoCollection(course.id); toggleclassName();}} href="#"><i className="icofont-share-alt"></i> Share</a></li>*/}
                        <li><a onClick={e => {removecoursetoCollection(course.id); toggleclassName();}} href="#"><i className="icofont-delete"></i>Remove Collection</a></li>
                    </ul>
                </div>
            </div>
            <div className="courses-content">
                <div className="courses-author">
                    <div className="author">
                        <div className="author-thumb">
                            <a href="#"><img src="assets/images/author/author-01.jpg" alt="Author"/></a>
                        </div>
                        <div className="author-name">
                            <a className="name" href="#">{course.author}</a>
                            <a className="name-2" href="#">Ohula Malsh</a>
                        </div>
                    </div>
                </div>
                <h4 className="title"><a href="courses-details.html">{course.title}</a></h4>
                <div className="courses-rating">
                    <p>{course.progress}% Complete</p>

                    <div className="rating-progress-bar">
                        <div className="rating-line" style={{width: course.progress+"%"}}></div>
                    </div>
                    <div className="rating-meta">
                        <span className="rating-star">
                                <span className="rating-bar" style={{width: "80%"}}></span>
                        </span>
                        <p>Your rating</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default Collectionlist
