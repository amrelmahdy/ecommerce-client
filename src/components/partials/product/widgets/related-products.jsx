//Import Custom Component
import OwlCarousel from '../../../features/owl-carousel';
import ProductOne from '../../../features/products/product-one';

//Import Settings
import { relatedProductSlider } from '../../../../utils/data/slider';
import { useTranslation } from 'react-i18next';

function RelatedProducts(props) {
    const { t } = useTranslation();
    const { adClass = "", products = [], loading, isContainer = false } = props;

    return (
        !loading && !products.length ?
            ''
            :
            <section className={`products-section pt-0 ${adClass}`}>
                <div className={isContainer ? 'container' : ''}>
                    <h2 className="section-title font1 font-weight-bold mb-2">{t("product_related_products")}</h2>
                    {
                        !loading && !products.length ?
                            <div className="info-box with-icon"><p>No products were found matching your selection.</p></div>
                            :
                            <OwlCarousel adClass="products-slider dots-top dots-small" options={relatedProductSlider}>
                                {
                                    loading ?
                                        [0, 1, 2, 3].map((item, index) =>
                                            <div className="skel-pro skel-pro-grid" key={"product-skel" + index}></div>
                                        )
                                        :
                                        products.map((item, index) => (
                                            <ProductOne
                                                adClass="inner-quickview inner-icon"
                                                product={item}
                                                key={"product-one" + index}
                                            />
                                        ))
                                }
                            </OwlCarousel>
                    }
                </div>
            </section>
    )
}

export default RelatedProducts;