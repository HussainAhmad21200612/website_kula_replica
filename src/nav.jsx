import React from "react";
import  FontAwesomeIcon  from '@fortawesome/react-fontawesome'

// import faCoffee from '@fortawesome/free-solid-svg-icons'

function Nav(){
//     return(<div className="navi">
//     <a href="index.html"><i class="fa-solid fa-robot image"></i></a>
//     <ul className="nav-ele">
//         <li>Product <i className="fa-solid fa-angle-down"></i>
//         <ul></ul></li>
//         <li>Our Story</li>
//         <li>Resources <i className="fa-solid fa-angle-down"></i></li>
//     </ul>
//     <button className="btn">Book a Demo</button>
// </div>)
return (<div className="navi">
<a href="index.html"><i className="fa-solid fa-robot image"></i></a>
<ul className="nav-ele">
    <li>Product <i className="fa-solid fa-angle-down"></i>
    <ul></ul></li>
    <li>Our Story</li>
    <li>Resources <i className="fa-solid fa-angle-down"></i></li>
</ul>
<button className="btn">Book a Demo</button>
</div>)
}
export default Nav;