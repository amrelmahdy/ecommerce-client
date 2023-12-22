import React from 'react';
import Reveal from 'react-awesome-reveal';

// Import Settigns
import { fadeInUpShorter } from '../../../utils/data/keyframes';

function NewsletterSection () {
    return (
        <Reveal keyframes={ fadeInUpShorter } delay={ 200 } duration={ 1000 } triggerOnce>
            <section className="newsletter-section">
                <div className="container">
                    <div className="row no-gutters m-0 align-items-center">
                        <div className="col-lg-6 col-xl-4 mb-2 mb-lg-0">
                            <div className="info-box d-block d-sm-flex text-center text-sm-left">
                                <i className="icon-envolope text-dark mr-4"></i>
                                <div className="widget-newsletter-info">
                                    <h4 className="font-weight-bold line-height-1">Subscribe To Our Newsletter
                                    </h4>
                                    <p className="font2">Get all the latest information on Events, Sales and
                                        Offers.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-8">
                            <form action="#" className="mb-0">
                                <div className="footer-submit-wrapper d-flex">
                                    <input type="email" className="form-control rounded mb-0"
                                        placeholder="Your E-mail Address" size="40" required />
                                    <button type="submit" className="btn btn-primary">Subscribe Now!</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Reveal>
    );
}

export default React.memo( NewsletterSection );