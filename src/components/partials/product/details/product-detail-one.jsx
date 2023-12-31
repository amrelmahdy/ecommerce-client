import SlideToggle from 'react-slide-toggle';
import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';


// Import Custom Component
import ProductNav from '../product-nav';
import Qty from '../qty';
import ALink from '../../../common/ALink';
import ProductCountdown from '../../../features/product-countdown';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Helmet from "react-helmet";

function ProductDetailOne(props) {
    const { t, i18n } = useTranslation();
    const router = useLocation();
    const { product, adClass = "col-lg-7 col-md-6", prev, next, isNav = true, parent = ".product-single-default", isSticky = false } = props;
    const [attrs, setAttrs] = useState({ sizes: [], colors: [] });
    const [variant, setVariant] = useState(null);
    const [size, setSize] = useState(null);
    const [color, setColor] = useState(null);
    const [qty, setQty] = useState(1);

    useEffect(() => {
        // if (product) {
        //     let attributes = product.variants.reduce((acc, cur) => {
        //         cur.size && !acc.sizes.find(size => size.size === cur.size.size) && acc.sizes.push(cur.size);
        //         cur.color && !acc.colors.find(color => color.name === cur.color.name) && acc.colors.push(cur.color);
        //         return acc;
        //     }, { sizes: [], colors: [] });
        //     setAttrs(attributes);
        //     initState();
        // }
    }, [product])

    useEffect(() => {
        // if (product) {
        //     let priceToggle = document.querySelector(`${parent} .price-toggle`);
        //     let variationToggle = document.querySelector(`${parent} .variation-toggle`);

        //     if (attrs.sizes.length && !size || attrs.colors.length && !color) {
        //         document.querySelector(`${parent} .shopping-cart`) && document.querySelector(`${parent} .shopping-cart`).classList.add('disabled');
        //         document.querySelector(`${parent} .sticky-cart .add-cart`) && document.querySelector(`${parent} .sticky-cart .add-cart`).classList.add('disabled');
        //         priceToggle && (priceToggle.classList.contains('expanded') && priceToggle.click());
        //     } else {
        //         document.querySelector(`${parent} .shopping-cart`) && document.querySelector(`${parent} .shopping-cart`).classList.remove('disabled');
        //         document.querySelector(`${parent} .sticky-cart .add-cart`) && document.querySelector(`${parent} .sticky-cart .add-cart`).classList.remove('disabled');
        //         let index = product.variants.findIndex(item => {
        //             return !(item.size && item.size.size !== size) && !(item.color && item.color.name !== color);
        //         });
        //         setVariant({ ...product.variants[index], id: index });
        //     }

        //     if (size !== null || color !== null) {
        //         variationToggle && variationToggle.classList.contains('collapsed') && variationToggle.click();
        //     } else {
        //         variationToggle && variationToggle.classList.contains('expanded') && variationToggle.click();
        //     }
        // }
    }, [size, color])

    useEffect(() => {
        if (variant && variant.id >= 0) {
            let priceToggle = document.querySelector(`${parent} .price-toggle`);
            priceToggle && (priceToggle.classList.contains('collapsed') && priceToggle.click());
        }
    }, [variant])

    function isInWishlist() {
        //return product && props.wishlist.findIndex( item => item.slug === product.slug ) > -1;
    }

    function onWishlistClick(e) {
        e.preventDefault();
        if (!isInWishlist()) {
            let target = e.currentTarget;
            target.classList.add("load-more-overlay");
            target.classList.add("loading");

            setTimeout(() => {
                target.classList.remove('load-more-overlay');
                target.classList.remove('loading');
                props.addToWishList(product);
            }, 1000);
        } else {
            router.push('/pages/wishlist');
        }
    }

    function onAddCartClick(e) {
        e.preventDefault();

        if (product.stock > 0 && !e.currentTarget.classList.contains('disabled')) {
            if (product.variants.length === 0) {
                props.addToCart(product, qty, -1);
            } else {
                props.addToCart(product, qty, variant.id);
            }
        }
    }

    function changeQty(value) {
        setQty(value);
    }

    function selectColor(name, e) {
        e.preventDefault();
        setColor(color !== name ? name : null);
    }

    function selectSize(name, e) {
        e.preventDefault();
        setSize(size !== name ? name : null);
    }

    function initState() {
        setSize(null);
        setColor(null);
        setQty(1);
    }

    function clearVariation(e) {
        e.preventDefault();
        initState();
    }

    function isDisabled(type, name) {
        if (type === 'color' && size) {
            return !product.variants.find(variant => variant.size.size === size && variant.color.name === name);
        } else if (type === 'size' && color) {
            return !product.variants.find(variant => variant.color.name === color && variant.size.size === name);
        }
        return false;
    }


    return (
        <>
            <div className={`skel-pro skel-detail ${adClass}`}></div>
            {
                product &&
                <div className={`product-single-details ${adClass}`}>
                    <h1 className="product-title">{i18n.language === 'ar' ? product.ar_name : product.en_name}</h1>

                    {/* {
                        isNav ?
                            <ProductNav prev={ prev } next={ next } />
                            : ""
                    } */}

                    <div className="ratings-container">
                        <div className="product-ratings">
                            <span className="ratings" style={{ width: `${20 * product.ratings}%` }}></span>
                            <span className="tooltiptext tooltip-top">{product.average_rating.toFixed(2)}</span>
                        </div>

                        <ALink href="#" className="rating-link">( {product.reviews > 0 ? `${product.reviews} Reviews` : t("product_reviews_link_no_reviews")} )</ALink>
                    </div>

                    <hr className="short-divider" />

                    <div className="price-box">
                        {
                            !product.is_on_sale ?
                                <span className="product-price">{product.price.toFixed(2) + " " + t("sar")}</span>
                                : <>
                                    <span className="old-price">{product.sale_price.toFixed(2) + " " + t("sar")}</span>
                                    <span className="new-price">{product.price.toFixed(2) + " " + t("sar")}</span>
                                </>
                        }
                    </div>

                    {
                        product.until && product.until !== null &&
                        <ProductCountdown type="1" />
                    }

                    <div className="product-desc">
                        <div dangerouslySetInnerHTML={{ __html: i18n.language === 'ar' ? product.ar_description : product.en_description }} />
                    </div>

                    <ul className="single-info-list">
                        {/* {
                            product.sku ?
                                <li>
                                    SKU: <strong>{product.sku}</strong>
                                </li>
                                : ''
                        } */}

                        <li>
                            <strong>{t(`product_details_categories`)} </strong>
                            <span> : </span>
                            {product.categories.map((item, index) =>
                            (
                                <React.Fragment key={`single-cat-${index}`}>
                                    <strong>
                                        <ALink href={{ pathname: '/shop', query: { category: item.slug } }} className="category">{i18n.language === 'ar' ? item.ar_name : item.en_name}</ALink>
                                    </strong>
                                    {index < product.categories.length - 1 ? ', ' : ''}
                                </React.Fragment>
                            ))
                            }
                        </li>

                        {
                            product[`${i18n.language}_tags`] && product[`${i18n.language}_tags`].length > 0 ?
                                <li>
                                    <strong>{t(`product_details_tags`)} </strong>
                                    <span> : </span>

                                    {product[`${i18n.language}_tags`].map((item, index) =>
                                    (
                                        <React.Fragment key={`single-cat-${index}`}>

                                            <ALink href={{ pathname: '/shop', query: { tag: item.slug } }} className="tag">{item.name}</ALink>

                                            {/* {index < product[`${i18n.language}_tags`].length - 1 ? ', ' : ''} */}
                                        </React.Fragment>
                                    ))
                                    }
                                </li>
                                : ''
                        }
                    </ul>

                    {/* {
                        product.variants.length > 0 ?
                            <div className="product-filters-container">
                                {
                                    attrs.colors.length > 0 ?
                                        <div className="product-single-filter d-flex align-items-center"><label>Color:</label>
                                            <ul className="config-size-list config-color-list config-filter-list">
                                                {
                                                    attrs.colors.map((item, index) => (
                                                        <li key={`filter-color-${index}`} className={`${item.name === color ? 'active' : ''} ${isDisabled('color', item.name) ? 'disabled' : ''}`}>
                                                            {
                                                                item.thumb ?
                                                                    <a href="#" className="filter-thumb p-0" onClick={(e) => selectColor(item.name, e)}>
                                                                        <LazyLoadImage
                                                                            src={process.env.NEXT_PUBLIC_ASSET_URI + item.thumb.url}
                                                                            alt='product thumb'
                                                                            width={item.thumb.width}
                                                                            height={item.thumb.height}
                                                                        />
                                                                    </a>
                                                                    :
                                                                    <a href="#" className="filter-color border-0"
                                                                        style={{ backgroundColor: item.color }} onClick={(e) => selectColor(item.name, e)}></a>
                                                            }</li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                        : ''
                                }

                                {
                                    attrs.sizes.length > 0 ?
                                        <div className="product-single-filter d-flex align-items-center">
                                            <label>Size:</label>
                                            <ul className="config-size-list d-inline-block">
                                                {
                                                    attrs.sizes.map((item, index) => (
                                                        <li key={`filter-size-${index}`} className={`${item.size === size ? 'active' : ''} ${isDisabled('size', item.size) ? 'disabled' : ''}`}>
                                                            {
                                                                item.thumb ?
                                                                    <a href="#" className="filter-thumb p-0" onClick={(e) => selectSize(item.size, e)}>
                                                                        <LazyLoadImage
                                                                            src={process.env.NEXT_PUBLIC_ASSET_URI + item.thumb.url}
                                                                            alt='product thumb'
                                                                            width={item.thumb.width}
                                                                            height={item.thumb.height}
                                                                        />
                                                                    </a>
                                                                    :
                                                                    <a href="#" className="d-flex align-items-center justify-content-center" onClick={(e) => selectSize(item.size, e)}>{item.name}</a>
                                                            }
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                        : ''
                                }

                                {
                                    <SlideToggle collapsed={true}>
                                        {({ onToggle, setCollapsibleElement, toggleState }) => (
                                            <>
                                                <button className={`d-none variation-toggle ${toggleState.toLowerCase()}`} onClick={onToggle}></button>
                                                <div className="product-single-filter m-0" ref={setCollapsibleElement}>
                                                    <label></label>
                                                    <a className="font1 text-uppercase clear-btn" href="#" onClick={clearVariation}>Clear</a>
                                                </div>
                                            </>
                                        )}
                                    </SlideToggle>
                                }
                            </div>
                            : ''
                    } */}


                    <div className="product-action">
                        <Qty max={product.stock} value={qty} onChangeQty={changeQty} />
                        <a href="#" className={`btn btn-dark add-cart shopping-cart font1 mr-2 ${attrs.sizes.length > 0 || attrs.colors.length > 0 ? 'disabled' : ''}`} title="Add To Cart" onClick={onAddCartClick}>{t("add_to_cart")}</a>
                    </div>

                    <hr className="divider mb-0 mt-0" />

                    <div className="product-single-share mb-3">
                        <label className="sr-only">Share:</label>

                        <div className="social-icons mr-2">
                            <ALink href="#" className="social-icon social-facebook icon-facebook"
                                title="Facebook"></ALink>
                            <ALink href="#" className="social-icon social-twitter icon-twitter"
                                title="Twitter"></ALink>
                            <ALink href="#" className="social-icon social-linkedin fab fa-linkedin-in"
                                title="Linkedin"></ALink>
                            <ALink href="#" className="social-icon social-mail icon-mail-alt"
                                title="Mail"></ALink>
                        </div>

                        <a href="#" className={`btn-icon-wish add-wishlist ${isInWishlist() ? 'added-wishlist' : ''}`} onClick={onWishlistClick} title={`${isInWishlist() ? 'Go to Wishlist' : 'Add to Wishlist'}`}><i
                            className="icon-wishlist-2"></i>
                            {/* <span>{isInWishlist() ? 'Go to Wishlist' : 'Add to Wishlist'}</span> */}
                        </a>
                    </div>
                </div>
            }
        </>
    )
}


export default ProductDetailOne;