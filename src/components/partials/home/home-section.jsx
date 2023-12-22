import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import OwlCarousel from '../../features/owl-carousel';

// Import Settings
import { HomeSlider } from '../../../utils/data/slider';

// Import Keyframes
import { fadeInUpShorter, fadeInDownShorter, fadeInRightShorter } from '../../../utils/data/keyframes'

function HomeSection () {
    return (
        <section className="intro-section">
            <OwlCarousel adClass="home-slider show-nav-hover mb-4" options={ HomeSlider }>
                <div className="home-slide home-slide-1 banner">
                    <figure className="mb-0">
                        <LazyLoadImage
                            alt="Home Slide"
                            src="https://d-themes.com/react/porto/demo35/images/home/slider/slide-1.jpg"
                            threshold={ 500 }
                            effect="black and white"
                            width="100%"
                            height={ 520 }
                        />
                    </figure>

                    <div className="banner-layer banner-layer-middle banner-layer-left">
                        <Reveal keyframes={ fadeInDownShorter } delay={ 100 } duration={ 1000 }>
                            <h4 className="font-weight-normal text-body m-b-2">Exclusive Product New Arrival</h4>
                        </Reveal>

                        <Reveal keyframes={ fadeInUpShorter } delay={ 600 } duration={ 1000 }>
                            <h2>Organic Coffee</h2>
                        </Reveal>

                        <Reveal keyframes={ fadeInRightShorter } delay={ 1100 } duration={ 1000 }>
                            <div className="position-relative">
                                <h3 className="text-uppercase mb-4">Special Blend</h3>
                                <h5 className="rotate-text font-weight-normal text-primary">Fresh!</h5>
                            </div>
                        </Reveal>

                        <Reveal keyframes={ fadeInRightShorter } delay={ 1400 } duration={ 1000 }>
                            <p className="font2 text-right text-uppercase">Breakfast products on sale</p>
                        </Reveal>

                        <Reveal keyframes={ fadeInRightShorter } delay={ 1800 } duration={ 1000 }>
                            <div className="coupon-sale-text m-b-2">
                                <h6 className="text-uppercase text-right mb-0">
                                    <sup>up to</sup><strong className=" text-white">50%</strong>
                                </h6>
                            </div>
                        </Reveal>
                    </div>
                </div>

                <div className="home-slide home-slide-2 banner">
                    <figure className="mb-0">
                        <LazyLoadImage
                            alt="Home Slide"
                            src="images/home/slider/slide-2.jpg"
                            threshold={ 500 }
                            effect="black and white"
                            width="100%"
                            height={ 520 }
                        />
                    </figure>

                    <div className="banner-layer banner-layer-middle banner-layer-right">
                        <Reveal keyframes={ fadeInDownShorter } delay={ 100 } duration={ 1000 }>
                            <h4 className="font-weight-normal text-body m-b-2">Exclusive Product New
                                Arrival</h4>
                        </Reveal>

                        <Reveal keyframes={ fadeInRightShorter } delay={ 600 } duration={ 1000 }>
                            <h2>Fit Low Carb</h2>
                        </Reveal>

                        <Reveal keyframes={ fadeInRightShorter } delay={ 1100 } duration={ 1000 }>
                            <div className="position-relative">
                                <h3 className="text-uppercase">Candy Bar</h3>
                                <h5 className="rotate-text font-weight-normal text-secondary">Sugar-Free</h5>
                            </div>
                        </Reveal>

                        <Reveal keyframes={ fadeInUpShorter } delay={ 1400 } duration={ 1000 }>
                            <p className="font2 text-right text-uppercase appear-animate"
                                data-animation-name="fadeInUpShorter" data-animation-delay="1400">Breakfast products on
                                sale</p>
                        </Reveal>

                        <Reveal keyframes={ fadeInRightShorter } delay={ 1800 } duration={ 1000 }>
                            <div className="coupon-sale-text pb-0">
                                <h6 className="text-uppercase text-right mb-0">
                                    <sup>up to</sup><strong className=" text-white">70%</strong>
                                </h6>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </OwlCarousel>
        </section>
    );
}

export default React.memo( HomeSection );