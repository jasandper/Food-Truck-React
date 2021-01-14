import React, { Fragment, useState } from "react";




const Trucks = () => {

    // const [description, setDescription] = useState('hello');
    return (
        <section id="gigs" className="container">
        <h1>All Food Trucks</h1>
    
       
       <div className="gig">
          <h3>Jason's Taco Shack</h3>
          <p>Best Tacos in town</p>
          <ul>
            <li>234 Oak hill Ln Austin TX 78372</li>
            <li><a href="tel: 2343234" className="btn btn-reverse">Call: 23423432 </a></li>
          </ul>
          <div className="tech">
            <small>type: tacos <span></span></small>
          </div>
        </div>
        
    
      </section>
    );
};

export default Trucks;