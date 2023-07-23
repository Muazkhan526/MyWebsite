import React from 'react';
import './Footer.css';


const Footer=()=>{
return(
<div>
<div className="row" >
<div className="col-md-12"  >
<hr />
<div id='Icons'>
<a className='Icon'  href="/"><i class="bi bi-facebook"></i></a>
<a className='Icon' href="/"><i class="bi bi-twitter"></i></a>
<a className='Icon' href=""><i class="bi bi-google"></i></a>
<a className='Icon' href="/"><i class="bi bi-youtube"></i></a>
</div>
<hr />
</div>
</div>
<div className='row' id='Footer'>
<div className='col-md-3'>
<h6>MY ACCOUNT</h6>
<ul>
    <li><i class="bi bi-chevron-double-left"></i>My Account</li>
    <li><i class="bi bi-chevron-double-left"></i> Orders</li>
    <li><i class="bi bi-chevron-double-left"></i>Addresses</li>
    <li><i class="bi bi-chevron-double-left"></i>Shopping Cart</li>
    <li><i class="bi bi-chevron-double-left"></i>Wishlist</li>
</ul>
</div>
<div className='col-md-3'>
<h6>CUSTOMER SERVICE</h6>
<ul>
    <li><i class="bi bi-chevron-double-left"></i>Sitemap</li>
    <li><i class="bi bi-chevron-double-left"></i>Contact Us</li>
    </ul>
</div>
<div className='col-md-3'>
<h6>INFORMATION</h6>
<ul>
    <li><i class="bi bi-chevron-double-left"></i>Shipping & Returns</li>
    <li><i class="bi bi-chevron-double-left"></i>Privacy Notice</li>
    <li><i class="bi bi-chevron-double-left"></i>Conditions Of Use</li>
    <li><i class="bi bi-chevron-double-left"></i>About Us</li>
    <li><i class="bi bi-chevron-double-left"></i>Apply For Vendor Account</li>
</ul>
</div>
<div className='col-md-3'>
<h6>OUR OFFERS</h6>
<ul>
    <li><i class="bi bi-chevron-double-left"></i>Search</li>
    <li><i class="bi bi-chevron-double-left"></i>Recently Viewed Products</li>
    <li><i class="bi bi-chevron-double-left"></i>Compare Products List</li>
    <li><i class="bi bi-chevron-double-left"></i>New Products</li>
</ul>
</div>
</div>
</div>

);
}
export default Footer