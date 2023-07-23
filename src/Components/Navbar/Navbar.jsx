import React from 'react';
import './Navbar.css';
import pic1 from "/src/assets/pic1.png"
import Slider from '../SlideBar/Slidebar';
import Categores from '../Categores/categores'
import ProductSlider from '../MoreProducts/MoreProduct'
import ProductData from '../ProductData/ProductData';
const Navbar =()=>{
    return(
      <div className=''>
      <div className='row'>
        <div className='col-md-12'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link" href="/"><i className="bi bi-pencil-square"></i>Register </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/"><i className="bi bi-heart"></i>Wishlist(0)</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/"><i className="bi bi-lock"></i>Login</a>
      </li>
    </ul>
  </div>
</nav>
</div>
</div>
<div className='row'>
  <div className='col-md-4' id="Searchbar">
        <div className="input-group">
  <input type="search" className=" rounded" placeholder="Search"/>
  <button type="button" className="btn btn-outline-primary">search</button>
</div>
</div>
<div className='col-md-4'>
      <img className='image' src={pic1}/>
      </div>
<div className='col-md-4'>
<p><i className="bi bi-bag-fill"></i>Shopping Cart()Total Items</p>
</div>
</div>
<div className='row' >
  <div className='col-md-12'>
  <nav className="navbar navbar-expand" id="nav">
  <a className="navbar-brand" href="/">Home</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link " href="/">2 PICE GULAHMED LAWN</a>
      <a className="nav-item nav-link" href="/">3 PICE GULAHMED LAWN</a>
      <a className="nav-item nav-link" href="/">2 PICE GULAHMED CAMRIC</a>
      <a className="nav-item nav-link " href="/">2 PICE GULAHMED B&W</a>
    </div>
  </div>
</nav>
</div>
</div>
<div>
<Slider/>
</div>
<div>
<Categores/>
</div>
<div>
  <ProductData />
</div>
</div>
);
} 
export default Navbar