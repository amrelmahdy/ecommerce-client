import GoogleMapReact from 'google-map-react';

import ALink from "../../components/common/ALink";

const AnyReactComponent = () => <div></div>;

export default function ContactUs () {
    return (
        <main className="main contact-two">
            <nav aria-label="breadcrumb" className="breadcrumb-nav mb-0">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <ALink href="/"><i className="icon-home"></i></ALink>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            Contact Us
						</li>
                    </ol>
                </div>
            </nav>

            <div id="map">
                <GoogleMapReact
                    bootstrapURLKeys={ { key: 'your-api-key' } }
                    defaultCenter={ { lat: 59.95, lng: 30.33 } }
                    defaultZoom={ 11 }
                >
                    <AnyReactComponent
                        lat={ 59.955413 }
                        lng={ 30.337844 }
                    />
                </GoogleMapReact>
            </div>

            <div className="container mb-4 mb-lg-1">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="font1 font-weight-light ls-n-10"><strong>Contact</strong> Us</h2>

                        <form action="#">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group required-field mb-2">
                                        <label htmlFor="contact-name">Your name</label>
                                        <input type="text" className="form-control" id="contact-name" name="contact-name"
                                            required />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group required-field mb-2">
                                        <label htmlFor="contact-email">Your email address</label>
                                        <input type="email" className="form-control" id="contact-email" name="contact-email"
                                            required />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group mb-2">
                                <label htmlFor="contact-subject">Subject</label>
                                <input type="text" className="form-control" id="contact-subject" name="contact-subject" />
                            </div>

                            <div className="form-group mb-0">
                                <label htmlFor="contact-message">Your Message</label>
                                <textarea cols="30" rows="1" id="contact-message" className="form-control"
                                    name="contact-message" required></textarea>
                            </div>

                            <div className="form-footer mb-0">
                                <button type="submit" className="btn btn-primary font1">Send Message</button>
                            </div>
                        </form>
                    </div>

                    <div className="col-md-6">
                        <h2 className="contact-title font1 ls-n-10 text-primary"><strong>Get in touch</strong></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget leo at velit
                        imperdiet varius. In eu ipsum vitae velit congue iaculis vitae at risus. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit.</p>

                        <hr className="mt-3 mb-0" />

                        <div className="contact-info mb-2">
                            <h2 className="contact-title font1 ls-n-10 text-primary"><strong>The Office</strong></h2>

                            <div className="porto-sicon-box d-flex align-items-center">
                                <div className="porto-icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <h3 className="porto-sicon-title font1 ls-n-10">
                                    <strong>Address:</strong> 1234 Street Name, City Name, United States
                                </h3>
                            </div>
                            <div className="porto-sicon-box d-flex align-items-center">
                                <div className="porto-icon">
                                    <i className="fa fa-phone"></i>
                                </div>
                                <h3 className="porto-sicon-title font1 ls-n-10">
                                    <strong>Phone:</strong> (123) 456-7890</h3>
                            </div>
                            <div className="porto-sicon-box d-flex align-items-center">
                                <div className="porto-icon">
                                    <i className="fa fa-envelope"></i></div>
                                <h3 className="porto-sicon-title font1 ls-n-10">
                                    <strong>Email:</strong> mail@example.com</h3>
                            </div>
                        </div>

                        <hr className="mt-1 mb-0" />

                        <div className="contact-time">
                            <h2 className="contact-title font1 ls-n-10 text-primary"><strong>Business Hours</strong></h2>

                            <div className="porto-sicon-box d-flex align-items-center">
                                <div className="porto-icon">
                                    <i className="far fa-clock"></i>
                                </div>
                                <h3 className="porto-sicon-title font1 ls-n-10">Monday - Friday
                                    9am to 5pm</h3>
                            </div>

                            <div className="porto-sicon-box  d-flex align-items-center">
                                <div className="porto-icon">
                                    <i className="far fa-clock"></i>
                                </div>

                                <h3 className="porto-sicon-title font1 ls-n-10">Saturday - 9am
                                    to 2pm</h3>
                            </div>

                            <div className="porto-sicon-box d-flex align-items-center">
                                <div className="porto-icon"><i className="far fa-clock"></i></div>
                                <h3 className="porto-sicon-title font1 ls-n-10">Sunday - Closed
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-8"></div>
        </main >
    )
}