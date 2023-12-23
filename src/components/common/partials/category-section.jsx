import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';
import OwlCarousel from '../../features/owl-carousel';

// Import Settigns
import { categorySlider } from '../../../utils/data/slider';
import { fadeIn } from '../../../utils/data/keyframes';

function CategorySection () {
    return (
        <Reveal keyframes={ fadeIn } delay={ 100 } duration={ 1000 } triggerOnce>
            <section className="categories-section">
                <OwlCarousel adClass="categories-slider show-nav-hover nav-outer" options={ categorySlider }>
                    <div className="product-category media-with-lazy">
                        <ALink href={ { pathname: '/shop', query: { category: 'fashion' } } }>
                            <figure>
                                <LazyLoadImage
                                    alt="category"
                                    src="/images/home/products/categories/category-1.jpg"
                                    width="100%"
                                    height="auto"
                                    threshold={ 500 }
                                    effect="black and white"
                                />
                            </figure>
                            <div className="category-content">
                                <h3>Fashion</h3>
                                <span><mark className="count">7</mark> products</span>
                            </div>
                        </ALink>
                    </div>

                    <div className="product-category media-with-lazy">
                        <ALink href={ { pathname: '/shop', query: { category: 'furniture' } } }>
                            <figure>
                                <LazyLoadImage
                                    alt="category"
                                    src="images/home/products/categories/category-2.jpg"
                                    width="100%"
                                    height="auto"
                                    threshold={ 500 }
                                    effect="black and white"
                                />
                            </figure>
                            <div className="category-content">
                                <h3>Furniture</h3>
                                <span><mark className="count">1</mark> products</span>
                            </div>
                        </ALink>
                    </div>

                    <div className="product-category media-with-lazy">
                        <ALink href={ { pathname: '/shop', query: { category: 'sports' } } }>
                            <figure>
                                <LazyLoadImage
                                    alt="category"
                                    src="images/home/products/categories/category-3.jpg"
                                    width="100%"
                                    height="auto"
                                    threshold={ 500 }
                                    effect="black and white"
                                />
                            </figure>
                            <div className="category-content">
                                <h3>Sports</h3>
                                <span><mark className="count">2</mark> products</span>
                            </div>
                        </ALink>
                    </div>

                    <div className="product-category media-with-lazy">
                        <ALink href={ { pathname: '/shop', query: { category: 'toys' } } }>
                            <figure>
                                <LazyLoadImage
                                    alt="category"
                                    src="images/home/products/categories/category-4.jpg"
                                    width="100%"
                                    height="auto"
                                    threshold={ 500 }
                                    effect="black and white"
                                />
                            </figure>
                            <div className="category-content">
                                <h3>Toys</h3>
                                <span><mark className="count">2</mark> products</span>
                            </div>
                        </ALink>
                    </div>

                    <div className="product-category media-with-lazy">
                        <ALink href={ { pathname: '/shop', query: { category: 'cameras' } } }>
                            <figure>
                                <LazyLoadImage
                                    alt="category"
                                    src="images/home/products/categories/category-5.jpg"
                                    width="100%"
                                    height="auto"
                                    threshold={ 500 }
                                    effect="black and white"
                                />
                            </figure>
                            <div className="category-content">
                                <h3>Cameras</h3>
                                <span><mark className="count">1</mark> products</span>
                            </div>
                        </ALink>
                    </div>

                    <div className="product-category media-with-lazy">
                        <ALink href={ { pathname: '/shop', query: { category: 'gaming' } } }>
                            <figure>
                                <LazyLoadImage
                                    alt="category"
                                    src="images/home/products/categories/category-6.jpg"
                                    width="100%"
                                    height="auto"
                                    threshold={ 500 }
                                    effect="black and white"
                                />
                            </figure>
                            <div className="category-content">
                                <h3>Gaming</h3>
                                <span><mark className="count">1</mark> products</span>
                            </div>
                        </ALink>
                    </div>

                    <div className="product-category media-with-lazy">
                        <ALink href={ { pathname: '/shop', query: { category: 'headphones' } } }>
                            <figure>
                                <LazyLoadImage
                                    alt="category"
                                    src="images/home/products/categories/category-7.jpg"
                                    width="100%"
                                    height="auto"
                                    threshold={ 500 }
                                    effect="black and white"
                                />
                            </figure>
                            <div className="category-content">
                                <h3>Headphones</h3>
                                <span><mark className="count">1</mark> products</span>
                            </div>
                        </ALink>
                    </div>

                    <div className="product-category media-with-lazy">
                        <ALink href={ { pathname: '/shop', query: { category: 'smartphones' } } }>
                            <figure>
                                <LazyLoadImage
                                    alt="category"
                                    src="images/home/products/categories/category-8.jpg"
                                    width="100%"
                                    height="auto"
                                    threshold={ 500 }
                                    effect="black and white"
                                />
                            </figure>
                            <div className="category-content">
                                <h3>Smartphones</h3>
                                <span><mark className="count">1</mark> products</span>
                            </div>
                        </ALink>
                    </div>
                </OwlCarousel>
            </section>
        </Reveal>
    );
}

export default React.memo( CategorySection );