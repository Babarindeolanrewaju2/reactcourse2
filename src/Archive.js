import React, { useContext } from "react";
import './App.css';
import { CoursesContext } from './context.js';
import {
    Link,
  } from "react-router-dom";
import Archivelist from './Archivelist.js';

function Archive() {
  const {archive} = useContext(CoursesContext);
  console.log(archive)
  return (
        <div className="section section-padding">
            <div className="container">
                <div className="courses-category-wrapper">
                    <div className="courses-search search-2">
                        <input type="text" placeholder="Search here"/>
                        <button><i className="icofont-search"></i></button>
                    </div>
                    <ul className="category-menu">
                        <Link to="/"><li><a href="!#">All Courses</a></li></Link>
                        <Link to="/Collections"><li><a href="!#">Collections</a></li></Link>
                        <Link to="/Wishlist"><li><a href="!#">Wishlist</a></li></Link>
                        <Link to="/Archive"><li><a className="active"  href="!#">Archive</a></li></Link>
                    </ul>
                </div>

                <div className="courses-wrapper-02">
                    <div className="row">
                    {archive && archive?.map((course) => (
                        <>
                        <Archivelist course={course}/>
                        </>
                        ))}
                        </div>
                </div>
            </div>
        </div>

  );
}

export default Archive;