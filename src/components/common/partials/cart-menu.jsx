import React, { useEffect } from 'react';
// import { connect } from 'react-redux';
// import { useRouter } from 'next/router';

// Import Actions
// import { actions as CartAction } from "../../../store/cart";

// Import Custom Component
import ALink from '../ALink';
import { useTranslation } from 'react-i18next';
// Import Utils
import { getCartTotal } from '../../../utils';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../../../store/cart/cart.selectors';
import { useNavigate } from 'react-router-dom';
import { removeProductFromCart } from '../../../store/cart/cart.actions';

function CartMenu(props) {
    const { t, i18n } = useTranslation();
    const cartItems = [];
    const { error, items, loading } = useSelector(getCart);
    const dispatch = useDispatch()
    console.log("getCartItems", items)
    const Navigate = useNavigate();

    // useEffect( () => {
    //     router.events.on( 'routeChangeStart', cartClose );

    //     return () => {
    //         router.events.off( 'routeChangeStart', cartClose );
    //     }
    // }, [] )

    function toggleCart(e) {
        e.preventDefault();
        document.querySelector('body').classList.toggle('cart-opened');
    }

    function cartClose() {
        document.querySelector('body').classList.contains('cart-opened') && document.querySelector('body').classList.remove('cart-opened');
    }
    
    function getQtyTotal(items) {
        let total = 0;
        if (items) {
            for (let i = 0; i < items.length; i++) {
                total += parseInt(items[i].quantity, 10);
            }
        }
        return total;
    }

    function removeFromCart(e, item) {
        e.preventDefault();
        dispatch(removeProductFromCart({ productId: item.product.id }));

    }

    return (
        <div className="cart-dropdown-wrapper d-flex align-items-center">
            <div className="dropdown cart-dropdown">
                <a href="#" title="Cart" className="dropdown-toggle cart-toggle" onClick={toggleCart}>
                    <i className="icon-cart-thick"></i>
                    <span className="cart-count badge-circle">{getQtyTotal(items)}</span>
                </a>

                <div className="cart-overlay" onClick={cartClose}></div>

                <div className="dropdown-menu mobile-cart">
                    <a href="#" title="Close (Esc)" className="btn-close" onClick={e => { cartClose(); e.preventDefault(); }}>×</a>

                    <div className="dropdownmenu-wrapper">
                        <div className="dropdown-cart-header">{t("cart_menu_title")}</div>

                        {
                            items.length > 0 ?
                                <>
                                    <div className="dropdown-cart-products">
                                        {
                                            items.map((item, index) => (
                                                <div className="product" key={"cartItems" + index}>
                                                    <div className="product-details">
                                                        <h2 className="product-title">
                                                            <ALink href={`/product/default/${item.slug}`}>{item.product[`${i18n.language}_name`]}</ALink>                                                          {
                                                            }
                                                        </h2>

                                                        <span className="cart-product-info">
                                                            <span className="cart-product-qty">{item.quantity}</span> × ${item.product.price.toFixed(2)}
                                                        </span>
                                                    </div>

                                                    <figure className="product-image-container">
                                                        <ALink href={`/product/default/${item.slug}`} className="product-image">
                                                            <img src={

                                                                item.product.images.length > 0
                                                                    ?
                                                                    item.product.images[0].url
                                                                    :
                                                                    "https://res.cloudinary.com/dbe5ygqci/image/upload/v1705965378/products/placeholder-img-300x300_tyujgu.png"

                                                            } width="78" height="78" alt="product" />
                                                        </ALink>
                                                        <a href="#" className="btn-remove icon-cancel" title="Remove Product" onClick={e => { removeFromCart(e, item); }}></a>
                                                    </figure>
                                                </div>
                                            ))
                                        }
                                    </div>

                                    <div className="dropdown-cart-total">
                                        <span>{t("cart_subtotal")} : </span>

                                        <span className="cart-total-price float-right">{getCartTotal(items).toFixed(2)} {t("sar")}</span>
                                    </div>

                                    <div className="dropdown-cart-action">
                                        <ALink onClick={e => {
                                            e.preventDefault();
                                            Navigate("/cart");
                                            cartClose()
                                        }} className="btn btn-gray btn-block view-cart">{t("cart_veiw_cart")}</ALink>
                                        <ALink href="/checkout" className="btn btn-dark btn-block text-white">{t("cart_checkout")}</ALink>
                                    </div>
                                </>
                                :
                                <p className="pt-3 mt-2">{t("cart_no_products")}</p>
                        }
                    </div>
                </div>
            </div >

            <span className="cart-subtotal font2 d-none d-sm-inline">{t("main_menu_cart")}<span className="cart-price d-block font2">{getCartTotal(items).toFixed(2)} {t("sar")}</span></span>
        </div>
    );
}

// function mapStateToProps ( state ) {
//     return {
//         cartItems: state.cartlist.cart ? state.cartlist.cart : []
//     }
// }

export default CartMenu;