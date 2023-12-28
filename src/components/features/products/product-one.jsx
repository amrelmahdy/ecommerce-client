import React, { useEffect } from 'react';
// import { useRouter } from 'next/router';
// import { connect } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Actions
// import { actions as WishlistAction } from "../../../store/wishlist";
// import { actions as CartAction } from "../../../store/cart";
// import { actions as ModalAction } from "../../../store/modal";
import { useTranslation } from 'react-i18next'
// Import Custom Component
import ALink from '../../common/ALink';
import ProductCountdown from '../product-countdown';


function ProductOne(props) {
    const { t, i18n } = useTranslation();
    // const router = useRouter();
    const { adClass = "", link = "default", product } = props;


    function isSale() {
        return product.price[0] !== product.price[1]  ?
            '-' + (100 * (product.price[1] - product.price[0]) / product.price[1]).toFixed(0) + '%'
            :
            false;
    }

    function isInWishlist() {
        return product && props.wishlist?.findIndex(item => item.slug === product.slug) > -1;
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
        <div className={`product-default media-with-lazy ${adClass}`}>
            <figure>
                <ALink href={`/product/${product.slug}`}>
                    <div className="lazy-overlay"></div>

                    <LazyLoadImage
                        alt="product"
                        src="https://d-themes.com/react_asset_api/porto/uploads/shop35_product_9_1_6ec2446a53.jpg"
                        threshold={500}
                        effect="black and white"
                        width="100%"
                        height="auto"
                    />
                    {
                        product.pictures.length >= 2 ?
                            <LazyLoadImage
                                alt="product"
                                src="https://d-themes.com/react_asset_api/porto/uploads/shop35_product_9_2_6706d0e5a7.jpg"
                                threshold={500}
                                effect="black and white"
                                wrapperClassName="product-image-hover"
                            />
                            : ""
                    }
                </ALink>

                <div className="label-group">
                    {/* {product.is_hot ? <div className="product-label label-hot">شحن مجاني</div> : ''} */}

                    {isSale() ? <div className="product-label label-sale">{isSale()}</div> : ''}
                </div>

                <div className="btn-icon-group">

                    <ALink onClick={onWishlistClick} className="btn-icon btn-add-cart"><i
                                className="icon-heart"></i></ALink>

                                
                    <a href="#" className="btn-icon btn-add-cart product-type-simple" title="Add To Cart" onClick={onAddCartClick}><i
                        className="icon-shopping-cart"></i></a>

                </div>

                {/* {
                    product.until && product.until !== null &&
                    <ProductCountdown date={product.until} />
                } */}

                <a href="#" className="btn-quickview" title={t("product_quick_view")} onClick={onQuickViewClick}>{t("product_quick_view")}</a>
            </figure>

            <div className="product-details">
                <div className="category-wrap">
                    <div className="category-list al-r">
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

                    {/* <a href="#" className={`btn-icon-wish ${isInWishlist() ? 'added-wishlist' : ''}`} onClick={onWishlistClick} title={`${isInWishlist() === true ? 'Go to Wishlist' : 'Add to Wishlist'}`}><i className="icon-heart"></i></a> */}
                </div>

                <h3 className="product-title">
                    <ALink href={`/product/default/${product.slug}`}>{i18n.language === 'ar' ? product.ar_name : product.en_name}</ALink>
                </h3>

                <div className="ratings-container">
                    <div className="product-ratings">
                        <span className="ratings" style={{ width: 20 * product.ratings + '%' }}></span>
                        <span className="tooltiptext tooltip-top">{product.ratings.toFixed(2)}</span>
                    </div>
                </div>

                <div className="price-box">
                    {/* {
                        product.price[0] == product.price[1] ?
                            <span className="product-price">{'$' + product.price[0].toFixed(2)}</span>
                            : product.variants.length > 0 ?
                                <span className="product-price">{'$' + product.price[0].toFixed(2)} &ndash; {'$' + product.price[1].toFixed(2)}</span>
                                : <>
                                    <span className="old-price">{'$' + product.price[1].toFixed(2)}</span>
                                    <span className="product-price">{'$' + product.price[0].toFixed(2)}</span>
                                </>
                    } */}

                    <>
                        <span className="old-price">{product.price[1].toFixed(2) + " " +t("sar") }</span>
                        <span className="product-price">{product.price[0].toFixed(2) + " " +t("sar")}</span>
                    </>
                </div>
            </div>
        </div>
    )
}



export default ProductOne;