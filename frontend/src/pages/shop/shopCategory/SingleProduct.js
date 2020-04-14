import React from 'react'

export default function SingleProduct({image,description,realprice,disprice}) {
    return (
	<div class="col-lg-4 col-md-6">
        <div class="single-product">
            <img class="img-fluid" src={image} alt={image}/>
            <div class="product-details">
                <h6>{description}</h6>
                <div class="price">
                    <h6>${disprice}</h6>
                <h6 class="l-through">${realprice}</h6>
                </div>
                <div class="prd-bottom">

                    <a href="" class="social-info">
                        <span class="ti-bag"></span>
                        <p class="hover-text">add to bag</p>
                    </a>
                    <a href="" class="social-info">
                        <span class="lnr lnr-heart"></span>
                        <p class="hover-text">Wishlist</p>
                    </a>
                    <a href="" class="social-info">
                        <span class="lnr lnr-sync"></span>
                        <p class="hover-text">compare</p>
                    </a>
                    <a href="" class="social-info">
                        <span class="lnr lnr-move"></span>
                        <p class="hover-text">view more</p>
                    </a>
                </div>
            </div>
        </div>
    </div>
    );
}
