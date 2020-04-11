import React from 'react'
import Counter from './Counter.js'
export default function ExclusiveDealArea () {
  return(
    <section className="exclusive-deal-area">
        <div className="container-fluid">
            <div className="row justify-content-center align-items-center">
                <div className="col-lg-6 no-padding exclusive-left">
                    <div className="row clock_sec clockdiv" id="clockdiv">
                        <div className="col-lg-12">
                            <h1>Exclusive Hot Deal Ends Soon!</h1>
                            <p>Who are in extremely love with eco friendly system.</p>
                        </div>
                        <div className="col-lg-12">
                            <Counter />
                        </div>
                    </div>
                    <a href="" className="primary-btn">Shop Now</a>
                </div>
                <div className="col-lg-6 no-padding exclusive-right">
                    <div className="active-exclusive-product-slider">
                        <div className="single-exclusive-slider">
                            <img className="img-fluid" src="img/product/e-p1.png" alt="" />
                            <div className="product-details">
                                <div className="price">
                                    <h6>$150.00</h6>
                                    <h6 className="l-through">$210.00</h6>
                                </div>
                                <h4>addidas New Hammer sole for Sports person</h4>
                                <div className="add-bag d-flex align-items-center justify-content-center">
                                    <a className="add-btn" href=""><span className="ti-bag"></span></a>
                                    <span className="add-text text-uppercase">Add to Bag</span>
                                </div>
                            </div>
                        </div>
                        <div className="single-exclusive-slider">
                            <img className="img-fluid" src="img/product/e-p1.png" alt="" />
                            <div className="product-details">
                                <div className="price">
                                    <h6>$150.00</h6>
                                    <h6 className="l-through">$210.00</h6>
                                </div>
                                <h4>addidas New Hammer sole for Sports person</h4>
                                <div className="add-bag d-flex align-items-center justify-content-center">
                                    <a className="add-btn" href=""><span className="ti-bag"></span></a>
                                    <span className="add-text text-uppercase">Add to Bag</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
