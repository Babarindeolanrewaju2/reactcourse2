import React, { useContext, useState } from "react";
import './App.css';
import { CoursesContext } from './context.js';

const Course = (props) => {
    const {addcoursetoCollection, addcoursetoArchive, addcoursetoWishlist} = useContext(CoursesContext);
    const [active, setActive] = useState(false);
    const toggleClass = () => {
      setActive(!active);
    }
    const{id, title, author,img,progress} = props.course;

    return (
        <>
        <div class="col-lg-4 col-md-6">
        <div class="single-courses">
            <div class="courses-images">
                <a href="courses-details.html"><img src={img} alt="Courses"/></a>
                <div class="courses-option dropdown">
                    <button class="option-toggle" data-bs-toggle="dropdown" aria-expanded="false" onClick={toggleClass}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <ul id="dropdown-men" class={`dropdown-menu ${active ? "show" : null}`}>
                        {/*<li><a onClick={e => {addcoursetoCollection(id); toggleClass();}} href="#"><i class="icofont-share-alt"></i> Share</a></li>*/}
                        <li><a onClick={e => {addcoursetoCollection(id); toggleClass();}} href="#"><i class="icofont-plus"></i> Create Collection</a></li>
                        <li><a onClick={e => {addcoursetoWishlist(id); toggleClass();}} href="#"><i class="icofont-star"></i> Favorite</a></li>
                        <li><a onClick={e => {addcoursetoArchive(id); toggleClass();}}href="#"><i class="icofont-archive"></i> Archive</a></li>
                    </ul>
                </div>
            </div>
            <div class="courses-content">
                <div class="courses-author">
                    <div class="author">
                        <div class="author-thumb">
                            <a href="#"><img src="assets/images/author/author-01.jpg" alt="Author"/></a>
                        </div>
                        <div class="author-name">
                            <a class="name" href="#">{author}</a>
                            <a class="name-2" href="#">Ohula Malsh</a>
                        </div>
                    </div>
                </div>
                <h4 class="title"><a href="courses-details.html">{title}</a></h4>
                <div class="courses-rating">
                    <p>{progress}% Complete</p>

                    <div class="rating-progress-bar">
                        <div class="rating-line" style={{width: progress+"%"}}></div>
                    </div>

                    <div class="rating-meta">
                        <span class="rating-star">
                                <span class="rating-bar" style={{width: "80%"}}></span>
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

export default Course;
