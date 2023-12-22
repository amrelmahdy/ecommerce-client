import React from 'react';

import ALink from "./ALink";

function Footer () {
    return (
        <footer className="footer font2 footer-reveal">
            <div className="container">
                <div className="footer-middle">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="widget mb-3">
                                <h4 className="widget-title">Customer Service</h4>

                                <ul className="links">
                                    <li><ALink href="#">Help &amp; FAQs</ALink></li>
                                    <li><ALink href="#">Order Tracking</ALink></li>
                                    <li><ALink href="#">Shipping &amp; Delivery</ALink></li>
                                    <li><ALink href="#">Orders History</ALink></li>
                                    <li><ALink href="#">Advanced Search</ALink></li>
                                    <li><ALink href="/pages/login">Login</ALink></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <div className="widget mb-3">
                                <h4 className="widget-title">About Us</h4>

                                <ul className="links">
                                    <li><ALink href="/pages/about-us">About Us</ALink></li>
                                    <li><ALink href="#">Careers</ALink></li>
                                    <li><ALink href="#">Our Stores</ALink></li>
                                    <li><ALink href="#">Corporate Sales</ALink></li>
                                    <li><ALink href="#">Careers</ALink></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <div className="widget mb-3">
                                <h4 className="widget-title">More Information</h4>

                                <ul className="links">
                                    <li><ALink href="#">Affiliates</ALink></li>
                                    <li><ALink href="#">Refer a Friend</ALink></li>
                                    <li><ALink href="#">Student Beans Offers</ALink></li>
                                    <li><ALink href="#">Gift Vouchers</ALink></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <div className="widget mb-3">
                                <h4 className="widget-title">Social Media</h4>

                                <div className="social-icons">
                                    <ALink href="#" className="social-icon social-instagram icon-instagram"></ALink>
                                    <ALink href="#" className="social-icon social-twitter icon-twitter"></ALink>
                                    <ALink href="#" className="social-icon social-facebook icon-facebook"></ALink>
                                </div>
                            </div>

                            <div className="widget mb-3">
                                <h4 className="widget-title">Payment Methods</h4>

                                <img src="images/home/payment.png" alt="payment" width="240" height="32" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copyright text-lg-center ls-n-25 mb-0">Shaheen
                    eCommerce.&nbsp;&copy;&nbsp;&nbsp;2021.&nbsp;&nbsp;All Rights
                    Hasela.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default React.memo( Footer );