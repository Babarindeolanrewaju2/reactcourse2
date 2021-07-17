import React, { useContext } from "react";
import './App.css';
import { CoursesContext } from './context.js';
import {
    Link,
  } from "react-router-dom";
import Wishlistlist from './Wishlistlist.js';

function Wishlist() {
  const {wishlist} = useContext(CoursesContext);
  return (
        <div class="section section-padding">
            <div class="container">
                <div class="courses-category-wrapper">
                    <div class="courses-search search-2">
                        <input type="text" placeholder="Search here"/>
                        <button><i class="icofont-search"></i></button>
                    </div>
                    <ul class="category-menu">
                        <Link to="/"><li><a href="#">All Courses</a></li></Link>
                        <Link to="/Collections"><li><a href="#">Collections</a></li></Link>
                        <Link to="/Wishlist"><li><a className="active"  href="#">Wishlist</a></li></Link>
                        <Link to="/Archive"><li><a href="#">Archive</a></li></Link>
                    </ul>
                </div>

                <div class="courses-wrapper-02">
                    <div class="row">
                    {wishlist && wishlist?.map((course) => (
                        <>
                        <Wishlistlist course={course}/>
                        </>
                        ))}
                        </div>
                </div>
            </div>
        </div>

  );
}

export default Wishlist;
