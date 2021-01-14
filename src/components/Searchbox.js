import React, { Fragment, useState } from "react";
import "./Searchbox.css";


const SearchBox = () => {

    // const [description, setDescription] = useState('hello');
    return (
        <section id="search" className="search-wrap">
        <form action="trucks/search" className="search-form">
          <i className="fas fa-search"></i>
          <input type="search" name="term" placeholder="bbq, vegan, desserts, tacos etc..." />
          <input type="submit" value="Search" />
        </form>
      </section>
    );
};

export default SearchBox;