import React, { useCallback, useEffect, useState } from 'react';
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
import { useNavigate, useNavigation } from 'react-router-dom';
import { addToProductWishList } from '../../../store/auth/auth.actions';
import { useDispatch, useSelector } from 'react-redux';
import { getIsAuthenticated, getUserInfo } from '../../../store/auth/auth.selectors';
import { addProductTocart } from '../../../store/cart/cart.actions';
import { getCart } from '../../../store/cart/cart.selectors';


function ProductOne(props) {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userInfo = useSelector(getUserInfo)
    const isAuthenticated = useSelector(getIsAuthenticated)
    const { error, items: cartItems, loading } = useSelector(getCart);
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const [isAdedToWishList, setIsAdedToWishList] = useState(false);
    const { adClass = "", link = "default", product } = props;


    useEffect(() => {
        if (isAuthenticated) {
            const isItemInCart = cartItems.some((item) => item.product.id === product?.id?.toString());
            isItemInCart && setIsAddedToCart(true)

            const isProductInWishlist = userInfo.wish_list.some((wishlistProduct) => wishlistProduct.id === product?.id?.toString());
            isProductInWishlist && setIsAdedToWishList(true)
        }
    }, [product])



    function isSale() {
        return product.is_on_sale ?
            (100 * (product.sale_price - product.price) / product.sale_price).toFixed(0) + '%'
            :
            false;
    }


    function onWishlistClick(e) {
        e.preventDefault();
        if (isAuthenticated) {
            let target = e.currentTarget;
            target.classList.add("load-more-overlay");
            target.classList.add("loading");
            setTimeout(async () => {
                dispatch(addToProductWishList(product.id))
                setIsAdedToWishList(!isAdedToWishList)
                target.classList.remove('load-more-overlay');
                target.classList.remove('loading');
            }, 500);
        } else {
            navigate("/login")
        }
    }

    const onAddCartClick = (e) => {
        e.preventDefault();
        if (isAuthenticated) {
            if (!isAddedToCart) {
                let target = e.currentTarget;
                target.classList.add("load-more-overlay");
                target.classList.add("loading");
                setTimeout(async () => {
                    dispatch(addProductTocart({
                        productId: product.id, quantity: 1
                    }));
                    setIsAddedToCart(true)
                    target.classList.remove('load-more-overlay');
                    target.classList.remove('loading');
                }, 500);
            }
        } else {
            navigate("/login")
        }
    }

    function onQuickViewClick(e) {
        e.preventDefault();
        navigate(`/product/${product.slug}`)
        //props.showQuickView(product.slug);
    }

    return (
        <div className={`product-default media-with-lazy ${adClass}`}>
            <figure>
                <ALink to={`/product/${product.slug}`}>
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
                        product.pictures.length >= 2 ?
                            <LazyLoadImage
                                alt="product"
                                src="https://d-themes.com/react_asset_api/porto/uploads/shop35_product_9_2_6706d0e5a7.jpg"
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

                <div className="btn-icon-group">

                    <ALink onClick={onWishlistClick} className={`btn-icon  ${isAdedToWishList ? 'added-wishlist' : ""} `}><i
                        className="icon-heart"></i></ALink>


                    <ALink onClick={onAddCartClick} className={`btn-icon btn-add-cart  ${isAddedToCart ? 'added-cart' : ''}`} title="Add To Cart" ><i
                        className="icon-shopping-cart"></i></ALink>

                </div>

                {/* {
                    product.until && product.until !== null &&
                    <ProductCountdown date={product.until} />
                } */}

                <a href="#" className="btn-quickview" title={t("product_view_details")} onClick={onQuickViewClick}>{t("product_view_details")}</a>
            </figure>

            <div className="product-details">


                <h3 className="product-title">
                    <ALink href={`/product/default/${product.slug}`}>{i18n.language === 'ar' ? product.ar_name : product.en_name}</ALink>
                </h3>

                <div className="category-wrap">
                    <div className="category-list al-r">
                        {
                            product.categories ?
                                product.categories.map((item, index) => (
                                    <React.Fragment key={item.slug + '-' + index}>
                                        <ALink to={`/shop?category=${item.slug}`}>
                                            {i18n.language === 'ar' ? item.ar_name : item.en_name}
                                        </ALink>
                                        {index < product.categories.length - 1 ? ', ' : ""}
                                    </React.Fragment>
                                )) : ""
                        }
                    </div>

                    {/* <a href="#" className={`btn-icon-wish ${isInWishlist() ? 'added-wishlist' : ''}`} onClick={onWishlistClick} title={`${isInWishlist() === true ? 'Go to Wishlist' : 'Add to Wishlist'}`}><i className="icon-heart"></i></a> */}
                </div>

                {product[`${i18n.language}_subtitle`] && <div className="category-list al-r">
                    <span>{product[`${i18n.language}_subtitle`]}</span>
                </div>

                }
                <div className="ratings-container">
                    <div className="product-ratings">
                        <span className="ratings" style={{ width: 20 * product.average_rating + '%' }}></span>
                        <span className="tooltiptext tooltip-top">{product.average_rating.toFixed(2)}</span>
                    </div>
                </div>

                <div className="price-box">
                    {
                        !product.is_on_sale && product.price !== product.sale_price ?
                            <span className="product-price">{product.price.toFixed(2) + " " + t("sar")}</span>
                            : <>
                                <span className="old-price">{product.price.toFixed(2) + " " + t("sar")}</span>
                                <span className="product-price">{product.sale_price.toFixed(2) + " " + t("sar")}</span>
                            </>
                    }

                    {/* <>
                        <span className="old-price">{product.price[1].toFixed(2) + " " +t("sar") }</span>
                        <span className="product-price">{product.price[0].toFixed(2) + " " +t("sar")}</span>
                    </> */}
                </div>
            </div>
        </div>
    )
}



export default ProductOne;