import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '../../common/ALink';
import { useTranslation } from 'react-i18next';

function CartPopup(props) {
    const { product } = props;
    const { t } = useTranslation()
    return (
        <div className="minipopup-area">
            <div className="minipopup-box" style={{ top: "0" }}>
                <div className="product media-with-lazy">
                    <figure className="product-media w-100">
                        <ALink href={`/product/default/${product.slug}`} >
                            <LazyLoadImage
                                alt="product"
                                src={
                                    product.images.length > 0
                                        ?
                                         product.images[0].url
                                        :
                                        "https://res.cloudinary.com/dbe5ygqci/image/upload/v1705965378/products/placeholder-img-300x300_tyujgu.png"}
                                threshold={500}
                                effect="black and white"
                                width="100%"
                                height="auto"
                            />
                        </ALink>
                    </figure>
                    <div className="product-detail">
                        {/* {
                            product.index > -1 ?
                                !product.variants[ product.index ].color ?
                                    <ALink className="product-name" href={ `/product/default/${ product.slug }` }>{ product.name + ' - ' + product.variants[ product.index ].size.name }</ALink>
                                    :
                                    !product.variants[ product.index ].size ?
                                        <ALink className="product-name" href={ `/product/default/${ product.slug }` }>{ product.name + ' - ' + product.variants[ product.index ].color.name }</ALink>
                                        :
                                        <ALink className="product-name" href={ `/product/default/${ product.slug }` }>{ product.name + ' - ' + product.variants[ product.index ].color.name + ', ' + product.variants[ product.index ].size.name }</ALink>
                                :
                                <ALink className="product-name" href={ `/product/default/${ product.slug }` }>{ product.name }</ALink>
                        } */}

                        <p>{t("added_to_cart")}</p>
                    </div>
                </div>
                <div className="product-action">
                    <ALink to="/cart" className="btn viewcart">{t("cart_veiw_cart")}</ALink>
                    <ALink to="/checkout" className="btn btn-dark checkout">{t("checkout")}</ALink>
                </div>
                <button className="mfp-close"></button>
            </div>
        </div>
    )
}

export default React.memo(CartPopup);