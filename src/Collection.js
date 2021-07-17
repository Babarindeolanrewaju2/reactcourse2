import React, { useContext } from "react";
import './App.css';
import { CoursesContext } from './context.js';
import {
    Link,
  } from "react-router-dom";
import Collectionlist from './Collectionlist.js';

function Collection() {
  const {collection} = useContext(CoursesContext);
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
                        <Link to="/Collections"><li><a className="active"  href="!#">Collections</a></li></Link>
                        <Link to="/Wishlist"><li><a href="!#">Wishlist</a></li></Link>
                        <Link to="/Archive"><li><a href="!#">Archive</a></li></Link>
                    </ul>
                </div>

                <div className="courses-wrapper-02">
                    <div className="row">
                    {collection && collection?.map((course) => (
                        <>
                        <Collectionlist course={course}/>
                        </>
                        ))}
                        </div>
                </div>
            </div>
        </div>

  );
}

export default Collection;
