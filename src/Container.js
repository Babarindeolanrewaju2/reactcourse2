import React, { useEffect,useContext, useState } from "react";
import ReactDOM from 'react-dom'
import './App.css';
import { CoursesContext } from './context.js';
import Course from './Course.js';

function Container() {
  const { clickcollection, clickwishlist, clickallcourses, clickArchive, sortedCourses} = useContext(CoursesContext);
  const [active, setActive] = useState(false);
  const [style, setStyle] = useState({position: 'absolute', inset: '0px auto auto 0px', margin:'0px', transform: 'translate(0px, 37px)'});
  const toggleClass = () => {
    setActive(!active);
  }

  return (
        <div class="section section-padding">
            <div class="container">
                <div class="courses-category-wrapper">
                    <div class="courses-search search-2">
                        <input type="text" placeholder="Search here"/>
                        <button><i class="icofont-search"></i></button>
                    </div>

                    <ul class="category-menu">
                        <li><a onClick={clickallcourses} class="active" href="#">All Courses</a></li>
                        <li><a onClick={clickcollection} href="#">Collections</a></li>
                        <li><a onClick={clickwishlist} href="#">Wishlist</a></li>
                        <li><a onClick={clickArchive} href="#">Archived</a></li>
                    </ul>
                </div>

                <div class="courses-wrapper-02">
                    <div class="row">
                    {sortedCourses && sortedCourses?.map((course) => (
                        <>
                        <Course course={course}/>
                        </>
                        ))}
                        </div>
                </div>

            </div>
        </div>

  );
}

export default Container;
