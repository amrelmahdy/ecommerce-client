import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

//Import Custom Component
import ALink from '../../common/ALink';
import ProductOne from '../../features/products/product-one';
import ProductFour from '../../features/products/product-four';
import OwlCarousel from '../../features/owl-carousel';

// Import Settigns
import { fadeIn, fadeInDownShorter, fadeInRightShorter, fadeInUpShorter, fadeInLeftShorter } from '../../../utils/data/keyframes'
import { productSlider } from '../../../utils/data/slider';
import { useTranslation } from 'react-i18next';

function SpecialSection ( { products } ) {
    const {t} = useTranslation()
    return (
        <section className="special-section">
            <div className="container">
                <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
                    <h2 className="section-title">{t("home_shop_recently_arrived_title")}</h2>
                    <p className="section-info font2"></p>

                    <div className="products-container bg-white mb-4 rounded">
                        <div className="row">
                            <OwlCarousel adClass="products-slider nav-outer" options={ productSlider }>
                                {
                                    products ?
                                        products.slice( 8, 15 ).map( ( item, index ) => (
                                            <ProductOne
                                                adClass="inner-quickview inner-icon"
                                                product={ item }
                                                key={ "All Products:" + index }
                                            />
                                        ) )

                                        :
                                        [ 0, 1, 2, 3, 4, 5 ].map( ( item, index ) =>
                                            <div className="skel-pro skel-pro-grid" key={ "Skeleton:" + index }></div>
                                        )
                                }
                            </OwlCarousel>
                        </div>
                    </div>
                </Reveal>

                <div className="row">
                    <div className="col-md-8">
                        <div className="banner banner1 rounded m-b-4" style={ { backgroundColor: '#d9e1e1' } }>
                            <figure>
                                <LazyLoadImage
                                    alt="banner"
                                    src="https://d-themes.com/react/porto/demo35/images/home/banners/banner-1.png"
                                    width="100%"
                                    height={ 235 }
                                    threshold={ 500 }
                                    effect="black and white"
                                />
                            </figure>

                            <div className="banner-layer banner-layer-middle banner-layer-right">
                                <Reveal keyframes={ fadeInDownShorter } delay={ 100 } duration={ 1000 } triggerOnce>
                                    <h4 className="font-weight-normal text-body">{t("banner_title1")}</h4>
                                </Reveal>

                                <Reveal keyframes={ fadeInUpShorter } delay={ 600 } duration={ 1000 } triggerOnce>
                                    <h2 className="m-l-n-1 p-r-5 m-r-2">{t("banner_header1")}</h2>
                                </Reveal>

                                <Reveal keyframes={ fadeInRightShorter } delay={ 1100 } duration={ 1000 } triggerOnce>
                                    <div className="position-relative">
                                        <h3 className="text-uppercase">{t("banner_sub1")}</h3>
                                        <h5 className="rotate-text font-weight-normal text-primary">{t("banner_sub_note1")}</h5>
                                    </div>
                                </Reveal>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="banner banner2 rounded mb-3" style={ { backgroundColor: '#b28475' } }>
                            <figure>
                                <LazyLoadImage
                                    alt="banner"
                                    src="https://d-themes.com/react/porto/demo35/images/home/banners/banner-1.png"
                                    width="100%"
                                    height={ 235 }
                                    threshold={ 500 }
                                    effect="black and white"
                                />
                            </figure>

                            <div className="banner-layer banner-layer-middle banner-layer-right">
                                <Reveal keyframes={ fadeInUpShorter } delay={ 200 } duration={ 1000 } triggerOnce>
                                    <h4 className="font-weight-normal">{t("banner_title2")}</h4>
                                </Reveal>

                                <Reveal keyframes={ fadeInUpShorter } delay={ 400 } duration={ 1000 } triggerOnce>
                                    <h2 className="text-white">{t("banner_header2")}</h2>
                                </Reveal>

                                <Reveal keyframes={ fadeInUpShorter } delay={ 600 } duration={ 1000 } triggerOnce>
                                    <h3 className="text-white text-uppercase mb-2">{t("banner_sub2")}</h3>
                                </Reveal>

                                <Reveal keyframes={ fadeInUpShorter } delay={ 800 } duration={ 1000 } triggerOnce>
                                    <h5 className="font-weight-normal text-white mb-0">{t("banner_sub_note2")}</h5>
                                </Reveal>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 className="section-title">{t("home_shop_top_deals_title")}</h2>
                <p className="section-info font2"></p>

                <div className="row offer-products">
                    <div className="col-lg-4 col-md-5">
                        <Reveal className="h-xl-100" keyframes={ fadeInRightShorter } delay={ 100 } duration={ 1000 } triggerOnce>
                            <div className="count-deal bg-white rounded mb-md-0 h-100">
                                {
                                    products ?
                                        products.slice( 0, 15 ).filter( ( item ) => (
                                            item.until && item.until !== null
                                        ) ).slice( 0, 1 ).map( ( item, index ) => (
                                            <ProductFour
                                                product={ item }
                                                key={ "All Products:" + index }
                                            />
                                        ) )
                                        :
                                        [ 0 ].map( ( item, index ) =>
                                            <div className="skel-pro skel-pro-grid" key={ "Skeleton:" + index }></div>
                                        )
                                }
                            </div>
                        </Reveal>

                    </div>

                    <div className="col-lg-8 col-md-7">
                        <Reveal keyframes={ fadeInLeftShorter } delay={ 300 } duration={ 1000 } triggerOnce>
                            <div className="custom-products bg-white rounded">
                                <div className="row">
                                    {
                                        products ?
                                            products.slice( 1, 9 ).map( ( item, index ) => (
                                                <div className="col-6 col-sm-4 col-xl-3" key={ "All Products:" + index }>
                                                    <ProductOne
                                                        adClass="inner-quickview inner-icon"
                                                        product={ item }
                                                    />
                                                </div>
                                            ) )
                                            :
                                            new Array( 8 ).fill( 1 ).map( ( item, index ) =>
                                                <div className="col-6 col-sm-4 col-xl-3" key={ "All Products:" + index }>
                                                    <div className="skel-pro skel-pro-grid" key={ "Skeleton:" + index }></div>
                                                </div>
                                            )
                                    }
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default React.memo( SpecialSection );