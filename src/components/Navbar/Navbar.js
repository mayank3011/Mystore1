import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../ASSETS/logo.png";
import Dropdown from 'react-bootstrap/Dropdown';

const Navbar = () => {
    const[cartquantity,setquantity]=useState(0);
  return (
    <nav>
      <div className="s1">
        <img src={logo} alt="logo" className="logo" />
        <div className="searchbar">
          <input
            type="text"
            placeholder="Search More Books"
            className="search"
          />
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
        <div className="right">
          <div className="cart">
            <span className='qty'>{cartquantity}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </div>
          <div className="user">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
          </div>
        </div>
      </div>
      <div className="s2">
        <Dropdown>
            <Dropdown.Toggle variant="" id="dropdown-basic">Categories</Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#">School Books</Dropdown.Item>
                <Dropdown.Item href="#">Competetion Books</Dropdown.Item>
                <Dropdown.Item href="#">NoteBooks</Dropdown.Item>
                <Dropdown.Item href="#">Stationary</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <a>About us</a>
        <a>Blog</a>
        <Dropdown>
            <Dropdown.Toggle variant="" id="dropdown-basic">Extra</Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#">School Books</Dropdown.Item>
                <Dropdown.Item href="#">Competetion Books</Dropdown.Item>
                <Dropdown.Item href="#">NoteBooks</Dropdown.Item>
                <Dropdown.Item href="#">Stationary</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
  );
};

export default Navbar;
