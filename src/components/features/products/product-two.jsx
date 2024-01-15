// import { useRouter } from 'next/router';
import React from 'react';
import { connect } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Actions
// import { actions as WishlistAction } from "../../../store/wishlist";
// import { actions as CartAction } from "../../../store/cart";
// import { actions as ModalAction } from "../../../store/modal";

// Import Custom Component
import ALink from '../../common/ALink';
import ProductCountdown from '../product-countdown';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function ProductTwo(props) {
    const location = useLocation();
    const { t, i18n } = useTranslation()
    const { adClass = "", link = "default", product } = props;

    function isSale() {
        return product.is_on_sale ?
            (100 * (product.sale_price - product.price) / product.sale_price).toFixed(0) + '%'
            :
            false;
    }

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
            //router.push( '/pages/wishlist' );
        }
    }

    function onAddCartClick(e) {
        e.preventDefault();
        props.addToCart(product);
    }

    function onQuickViewClick(e) {
        e.preventDefault();
        props.showQuickView(product.slug);
    }

    return (
        <div className={`product-default media-with-lazy left-details mb-2 product-list ${adClass}`}>
            <figure>
                <ALink href={`/product/${link}/${product.slug}`}>
                    <div className="lazy-overlay"></div>

                    <LazyLoadImage
                        alt="product"
                        src={
                            product.images.length > 0
                                ?
                                process.env.REACT_APP_BASE_URL + "/" + product.images[0].url
                                :
                                process.env.REACT_APP_BASE_URL + "/" + "assets/images/placeholder-img-300x300.png"

                        }
                        threshold={500}
                        effect="black and white"
                        width="100%"
                        height="auto"
                    />
                    {/* {
                        product.images.length >= 2 ?
                            <LazyLoadImage
                                alt="product"
                                src="https://d-themes.com/react_asset_api/porto/uploads/shop35_product_5_2_7781d74e60.jpg"
                                threshold={500}
                                effect="black and white"
                                wrapperClassName="product-image-hover"
                            />
                            : ""
                    } */}
                </ALink>

                <div className="label-group">
                    {product[`promotion_${i18n.language}_title`] ? <div className="product-label label-hot">{product[`promotion_${i18n.language}_title`]}</div> : ''}

                    {isSale() ? <div className="product-label label-sale">{isSale()}</div> : ''}
                </div>

                {/* {
                    product.until && product.until !== null &&
                    <ProductCountdown />
                } */}
            </figure>

            <div className="product-details">
               
            <h3 className="product-title">
                    <ALink href={`/product/default/${product.slug}`}>{i18n.language === 'ar' ? product.ar_name : product.en_name}</ALink>
                </h3>

                <div className="category-wrap">
                    <div className="category-list">
                        {
                            product.categories ?
                                product.categories.map((item, index) => (
                                    <React.Fragment key={item.slug + '-' + index}>
                                        <ALink href={{ pathname: '/shop', query: { category: item.slug } }}>
                                            {i18n.language === 'ar' ? item.ar_name : item.en_name}
                                        </ALink>
                                        {index < product.categories.length - 1 ? ', ' : ""}
                                    </React.Fragment>
                                )) : ""
                        }
                    </div>
                </div>

              
                <div className="ratings-container">
                    <div className="product-ratings">
                        <span className="ratings" style={{ width: 20 * product.average_rating + '%' }}></span>
                        <span className="tooltiptext tooltip-top">{product.average_rating.toFixed(2)}</span>
                    </div>
                </div>

                <p className="product-description">
                    {product.short_description}
                </p>

                <div className="price-box">
                    {
                        !product.is_on_sale && product.price !== product.sale_price ?
                            <span className="product-price">{product.sale_price.toFixed(2) + " " + t("sar")}</span>
                            : <>
                                <span className="old-price">{product.sale_price.toFixed(2) + " " + t("sar")}</span>
                                <span className="product-price">{product.price.toFixed(2) + " " + t("sar")}</span>
                            </>
                    }
                </div>

                <div className="product-action">
                    {
                        <>
                            {/* <ALink href={`/product/default/${product.slug}`} className="btn-icon btn-add-cart"><i
                                className="fa fa-arrow-right"></i><span>SELECT OPTIONS</span></ALink> */}
                            <a href="#" className="btn-icon btn-add-cart product-type-simple" title={t("add_to_cart")} onClick={onAddCartClick}><i
                                className="icon-shopping-cart"></i><span>{t("add_to_cart")}</span></a>

                        </>
                    }
                    <a href="#" className={`btn-icon-wish ${isInWishlist() ? 'added-wishlist' : ''}`} onClick={onWishlistClick} title={`${isInWishlist() === true ? 'Go to Wishlist' : 'Add to Wishlist'}`}><i className="icon-heart"></i></a>
                    {/* <a href="#" className="btn-quickview" title="Quick View" onClick={onQuickViewClick}><i
                        className="fas fa-external-link-alt"></i></a> */}
                </div>
            </div>
        </div>
    )
}

export default ProductTwo;