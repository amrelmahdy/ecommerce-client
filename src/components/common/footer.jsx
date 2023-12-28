import React from 'react';

import ALink from "./ALink";
import { useTranslation } from 'react-i18next';

// "link_shipping_and_delivery": "Shipping & Delivery",
// "link_login": "Login",
// "link_our_stores": "Our Stores",
// "link_about_us": "About Us",
// "link_help_and_faq": "Help & FAQs",
// "link_advanced_search": "Advanced Search"
// ,
// "link_payment_methods": "Payment methods",
// "link_vat_registration_certificate": "VAT registration certificate",
// "link_privacy_plicy": "Privacy plicy"

function Footer () {
    const {t}  = useTranslation()
    return (
        <footer className="footer font2 footer-reveal">
            <div className="container">
                <div className="footer-middle">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="widget mb-3">
                                <h4 className="widget-title">{t("footer_title1")}</h4>

                                <ul className="links">
                                    <li><ALink href="#">{t("link_help_and_faq")}</ALink></li>
                                    <li><ALink href="#">{t("link_order_tracking")}</ALink></li>
                                    <li><ALink href="#">{t("link_shipping_and_delivery")}</ALink></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <div className="widget mb-3">
                            <h4 className="widget-title">{t("footer_title2")}</h4>

                                <ul className="links">
                                    <li><ALink href="/pages/about-us">{t("link_about_us")}</ALink></li>
                                    <li><ALink href="#">{t("link_our_stores")}</ALink></li>
                                    <li><ALink href="#">{t("link_our_stores")}</ALink></li>
                                    <li><ALink href="#">{t("link_return_policy")}</ALink></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <div className="widget mb-3">
                            <h4 className="widget-title">{t("footer_title3")}</h4>

                                <ul className="links">
                                    <li><ALink href="#">{t("link_payment_methods")}</ALink></li>
                                    <li><ALink href="#">{t("link_vat_registration_certificate")}</ALink></li>
                                    <li><ALink href="#">{t("link_advanced_search")}</ALink></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <div className="widget mb-3">
                            <h4 className="widget-title">{t("footer_title4")}</h4>

                                <div className="social-icons">
                                    <ALink href="#" className="social-icon social-instagram icon-instagram"></ALink>
                                    <ALink href="#" className="social-icon social-twitter icon-twitter"></ALink>
                                    <ALink href="#" className="social-icon social-facebook icon-facebook"></ALink>
                                </div>
                            </div>

                            <div className="widget mb-3">
                                <h4 className="widget-title">{t("footer_title5")}</h4>

                                <img src="/images/home/payment.png" alt="payment" width="240" height="32" />
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