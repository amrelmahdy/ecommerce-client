import React from 'react';
import Reveal from 'react-awesome-reveal';

// Import Cusom Component
import OwlCarousel from '../../features/owl-carousel';

// Import Settigns
import { brandSlider } from '../../../utils/data/slider';
import { fadeInUpShorter } from '../../../utils/data/keyframes'

function BrandSection () {
    return (
        <div className="brands-section">
            <div className="container">
                <Reveal keyframes={ fadeInUpShorter } delay={ 100 } duration={ 1000 } triggerOnce>
                    <div>
                        <h2 className="section-title">Featured Brands</h2>
                        <p className="section-info font2">All our new arrivals in a exclusive brand selection</p>
                    </div>
                </Reveal>

                <Reveal keyframes={ fadeInUpShorter } delay={ 300 } duration={ 500 } triggerOnce>
                    <div className="slider-wrapper bg-white rounded">
                        <OwlCarousel adClass="brands-slider nav-outer" options={ brandSlider }>
                            <div className="d-inline-block">
                                <img src="images/brands/small/brand1.png" width="140" height="60" alt="brand" />
                            </div>

                            <div className="d-inline-block">
                                <img src="images/brands/small/brand1.png" width="140" height="60" alt="brand" />
                            </div>

                            <div className="d-inline-block">
                                <img src="images/brands/small/brand6.png" width="140" height="60" alt="brand" />
                            </div>

                            <div className="d-inline-block">
                                <img src="images/brands/small/brand3.png" width="140" height="60" alt="brand" />
                            </div>

                            <div className="d-inline-block">
                                <img src="images/brands/small/brand3.png" width="140" height="60" alt="brand" />
                            </div>

                            <div className="d-inline-block">
                                <img src="images/brands/small/brand2.png" width="140" height="60" alt="brand" />
                            </div>

                            <div className="d-inline-block">
                                <img src="images/brands/small/brand3.png" width="140" height="60" alt="brand" />
                            </div>

                            <div className="d-inline-block">
                                <img src="images/brands/small/brand5.png" width="140" height="60" alt="brand" />
                            </div>

                            <div className="d-inline-block">
                                <img src="images/brands/small/brand6.png" width="140" height="60" alt="brand" />
                            </div>
                        </OwlCarousel >
                    </div>
                </Reveal>
            </div>
            
        </div >
    );
}

export default React.memo( BrandSection );