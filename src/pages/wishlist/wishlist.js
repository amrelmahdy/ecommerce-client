import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from "../../components/common/ALink";
import Page from '../../components/page';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo } from '../../store/auth/auth.selectors';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { addProductToWishList } from '../../store/auth/auth.actions';


function Wishlist(props) {
    const userInfo = useSelector(getUserInfo);
    const { i18n, t } = useTranslation()
    const { addToCart, removeFromWishlist, showQuickView } = props;
    const [flag, setFlag] = useState(0);
    const navigate = useNavigate()
    const dispatch = useDispatch();
    
  

    const removeProduct = async (e, item) => {
       console.log("dhdhdhdhhd",e,  item)
        //setFlag(1);
        e.preventDefault();
        dispatch(addProductToWishList(item.id))
    }

    const onQuickViewClick = (e, product) => {
        e.preventDefault();
        showQuickView(product.slug);
    }

    return (
        <Page>
            <main className="main">
                <div className="page-header">
                    <div className="container d-flex flex-column align-items-center">
                        <nav aria-label="breadcrumb" className="breadcrumb-nav">
                            <div className="container">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><ALink href="/">{ t("home") }</ALink></li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        {t("wishlist")}
                                    </li>
                                </ol>
                            </div>
                        </nav>

                        <h1>{t("wishlist")}</h1>
                    </div>
                </div>

                <div className="container">
                    <div className="success-alert">
                        {
                            flag === 1 ? <p>Product successfully removed.</p> : ''
                        }
                        {
                            flag === 2 ? <p>Product added to cart successfully.</p> : ''
                        }
                    </div>
                    {/* <div className="wishlist-title">
                        <h2>My wishlist on Porto Shop 35</h2>
                    </div> */}
                    {
                        userInfo?.wish_list.length === 0 ?
                            <div className="wishlist-table-container">
                                <div className="table table-wishlist mb-0">
                                    <div className="wishlist-empty-page text-center">
                                        <i className="far fa-heart"></i>
                                        <p>{t("wishlist_no_products")}</p>
                                        <ALink href="/shop" className="btn btn-dark btn-add-cart product-type-simple btn-shop font1 w-auto">
                                            {t("wishlist_go_shop")} </ALink>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className="wishlist-table-container">
                                <table className="table table-wishlist mb-0">
                                    <thead>
                                        <tr>
                                            <th className="thumbnail-col"></th>
                                            <th className="product-col">{t("wishlist_product")}</th>
                                            <th className="price-col">{t("wishlist_price")}</th>
                                            <th className="status-col">{t("wishlist_stock_status")}</th>
                                            <th className="action-col">{t("wishlist_actions")}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            userInfo?.wish_list.map((item, index) => (
                                                <tr key={"wishlist-item" + index} className="product-row">
                                                    <td className="media-with-lazy">
                                                        <figure className="product-image-container">
                                                            <ALink href={`/product/default/${item.slug}`} className="product-image">
                                                                <LazyLoadImage
                                                                    alt="product"
                                                                    src={
                                                                        item.images.length > 0
                                                                            ?
                                                                             item.images[0].url
                                                                            :
                                                                            process.env.REACT_APP_BASE_URL + "/" + "assets/images/placeholder-img-300x300.png"

                                                                    }
                                                                    threshold={500}
                                                                    width="80"
                                                                    height="80"
                                                                />
                                                            </ALink>
                                                            <a href="#" className="btn-remove icon-cancel" title="Remove Product" onClick={(e) => removeProduct(e, item)}></a>
                                                        </figure>
                                                    </td>
                                                    <td>
                                                        <h5 className="product-title">
                                                            <ALink href={`/product/${item.slug}`}>{item[`${i18n.language}_name`]}</ALink>
                                                        </h5>
                                                    </td>
                                                    <td>
                                                        <div className="price-box">
                                                            {
                                                                !item.is_on_sale && item.price !== item.sale_price ?
                                                                    <span className="product-price">{item.price.toFixed(2) + " " + t("sar")}</span>
                                                                    : <>
                                                                        <span className="old-price">{item.price.toFixed(2) + " " + t("sar")}</span>
                                                                        <span className="product-price">{item.sale_price.toFixed(2) + " " + t("sar")}</span>
                                                                    </>
                                                            }

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <span className="stock-status">{item.is_out_of_stock ? t("product_out_of_stock") : t("product_in_stock")}</span>
                                                    </td>
                                                    <td className="action">
                                                        <a href={"/product/" + item.slug} className="btn btn-quickview mt-1 mt-md-0"
                                                            title="Quick View" onClick={(e) => { navigate("/product/" + item.slug) }}>{t("product_view_details")}</a>
                                                        {/* {
                                                            item.variants.length > 0 ?
                                                                <ALink className="btn btn-dark btn-add-cart product-type-simple btn-shop" href={`/product/default/${item.slug}`}>select options</ALink>
                                                                : <button className="btn btn-dark btn-add-cart product-type-simple btn-shop" onClick={(e) => { onMoveFromToWishlit(e, item) }}>
                                                                    ADD TO CART
                                                                </button>
                                                        } */}
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                    }
                </div>
            </main>
        </Page>
    )
}



export default Wishlist