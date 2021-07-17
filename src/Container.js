import React, { useEffect,useContext, useState } from "react";
import ReactDOM from 'react-dom'
import './App.css';
import { CoursesContext } from './context.js';
import Course from './Course.js';
import {
    Link,
  } from "react-router-dom";

function Container() {
  const {search, handleSearch, sortedCourses} = useContext(CoursesContext);

  return (
        <div class="section section-padding">
            <div class="container">
                <div class="courses-category-wrapper">
                    <div class="courses-search search-2">
                        <input type="text" placeholder="Search here" value={search} onChange={(e) => handleSearch(e)}/>
                        <button><i class="icofont-search"></i></button>
                    </div>

                    <ul class="category-menu">
                    <Link to="/"><li><a class="active" href="!#">All Courses</a></li></Link>
                    <Link to="/Collections"><li><a href="!#">Collections</a></li></Link>
                    <Link to="/Wishlist"><li><a href="!#">Wishlist</a></li></Link>
                    <Link to="/Archive"><li><a href="!#">Archive</a></li></Link>
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
