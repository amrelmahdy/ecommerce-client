import { useState, useEffect } from 'react';

import ALink from "../../components/common/ALink";
import Qty from '../../components/partials/product/qty';
import { getCartTotal } from '../../utils';
import Page from '../../components/page';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../../store/cart/cart.selectors';
import { addProductTocart, removeProductFromCart } from '../../store/cart/cart.actions';

const Cart = (props) => {
    const [cartList, setCartList] = useState([]);
    const { t, i18n } = useTranslation()
    const { error, items, loading } = useSelector(getCart);
    const dispatch = useDispatch()
    // useEffect( () => {
    //     setCartList( [ ...props.cart ] );
    // }, [ props.cart ] )

    function removeFromCart(item) {
        dispatch(removeProductFromCart({ productId: item.product.id }));
    }

    function onChangeQty(product, qty) {
        console.log(">>>", product, qty)
        dispatch(addProductTocart({
            productId: product.id, quantity: qty
        }))
        // setCartList( cartList.map( ( item, index ) => {
        //     return index === id ? { ...item, qty: qty } : item
        // } ) );
    }

    function updateCart() {
        //props.updateCart( cartList );
    }
    

    return (
        <Page>
            <main className="main">
                <div className="container">
                    <ul rev='true' className="checkout-progress-bar d-flex justify-content-center flex-wrap">
                        <li className="active">
                            <ALink href="/cart">{t("cart")}</ALink>
                        </li>
                        <li>
                            <ALink href="/checkout">{t("checkout")}</ALink>
                        </li>
                        <li className="disabled">
                            <ALink href="#">{t("order_complete")}</ALink>
                        </li>
                    </ul>

                    {
                        items.length === 0 ?
                            <div className="cart-table-container">
                                <div className="table table-cart">
                                    <div className="cart-empty-page text-center">
                                        <i className="icon-bag-2"></i>
                                        <p>{t("cart_no_products")}</p>
                                        <ALink href="/shop" className="btn btn-dark btn-add-cart product-type-simple btn-shop font1">{t("return_to_shop")}</ALink>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="cart-table-container">
                                        <table className="table table-cart">
                                            <thead>
                                                <tr>
                                                    <th className="thumbnail-col"></th>
                                                    <th className="product-col">{t("cart_product")}</th>
                                                    <th className="price-col">{t("cart_price")}</th>
                                                    <th className="qty-col">{t("cart_quantity")}</th>
                                                    <th className="text-right">{t("cart_subtotal")}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    items.map((item, index) => (
                                                        <tr key={"cart-item" + index} className="product-row">
                                                            <td>
                                                                <figure className="product-image-container">
                                                                    <ALink href={`/product/${item.product.slug}`} className="product-image">
                                                                        <img src={
                                                                            item.product.images.length > 0
                                                                                ?
                                                                                process.env.REACT_APP_BASE_URL + "/" + item.product.images[0].url
                                                                                :
                                                                                process.env.REACT_APP_BASE_URL + "/" + "assets/images/placeholder-img-300x300.png"
                                                                        } alt="product" />

                                                                    </ALink>

                                                                    <a href="#" className="btn-remove icon-cancel" title="Remove Product" onClick={(e) => { e.preventDefault(); removeFromCart(item); }}></a>
                                                                </figure>
                                                            </td>
                                                            <td className="product-col">
                                                                <h5 className="product-title">
                                                                    <ALink href={`/product/${item.product.slug}`}>{
                                                                        item.product[`${i18n.language}_name`]
                                                                    }</ALink>
                                                                </h5>
                                                            </td>
                                                            <td>
                                                                <span> {item.product.price.toFixed(2) + " " + t("sar")}</span>
                                                            </td>
                                                            <td>
                                                                <Qty value={item.quantity} max={item.product.max_quantity} product={item.product} onChangeQty={onChangeQty} />
                                                            </td>
                                                            <td className="text-right"><span className="subtotal-price">{(item.product.price * item.quantity).toFixed(2) + " " + t("sar")}</span></td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>


                                            {/* <tfoot>
                                                <tr>
                                                    <td colSpan="5" className="clearfix">
                                                        <div className="float-left">
                                                            <div className="cart-discount">
                                                                <form action="#">
                                                                    <div className="input-group">
                                                                        <input type="text" className="form-control form-control-sm"
                                                                            placeholder="Coupon Code" required />
                                                                        <div className="input-group-append">
                                                                            <button className="btn btn-sm" type="submit">Apply Coupon</button>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>

                                                        <div className="float-right">
                                                            <button type="submit" className="btn btn-shop btn-update-cart" onClick={updateCart}>
                                                                Update Cart
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tfoot> */}
                                        </table>
                                    </div>
                                </div>
                            </div>
                    }
                </div>
            </main>
        </Page>
    )
}



export default Cart;