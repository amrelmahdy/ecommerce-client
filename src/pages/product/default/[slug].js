import React, { useEffect } from 'react';
// import { useRouter } from 'next/router';
// import { useQuery } from '@apollo/react-hooks';

// Import Apollo Server and Query
// import withApollo from '../../../server/apollo';
// import { GET_PRODUCT } from '../../../server/queries';
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
// Import Custom Component
import ALink from '../../../components/common/ALink';
import ProductMediaOne from '../../../components/partials/product/media/product-media-one';
// import data from './../../../data/product.json'
import ProductDetailOne from '../../../components/partials/product/details/product-detail-one';
// import ProductWidgetContainer from '../../../components/partials/product/widgets/product-widget-container';
import RelatedProducts from '../../../components/partials/product/widgets/related-products';
import SingleTabOne from '../../../components/partials/product/tabs/single-tab-one';
import Page from '../../../components/page';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductDetails, fetchRelatedProducts } from '../../../store/products/products.actions';
import { getProductDetails } from '../../../store/products/products.selectors';
import { useTranslation } from 'react-i18next';

function ProductDefault() {
    const { t, i18n } = useTranslation()
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { data: product, loading, related, error } = useSelector(getProductDetails)
    const params = useParams()
    const slug = params.slug;
    const [searchParams, setSearchParams] = useSearchParams();
    const getPageQueryByKey = key => searchParams.get(key)


    console.log("product", related)


    useEffect(() => {
        dispatch(fetchProductDetails(slug))
        dispatch(fetchRelatedProducts(slug))
    }, [slug])



    if (!slug) return (
        <div className="loading-overlay">
            <div className="bounce-loader">
                <div className="bounce1"></div>
                <div className="bounce2"></div>
                <div className="bounce3"></div>
            </div>
        </div>
    );




    // const product = data && data.product.data;
    // const related = data && data.product.related;

    if (error) {
        navigate('/pages/404');
    }

    return (
        <Page>
            <main className="main">
                <div className="container">
                    <nav aria-label="breadcrumb" className="breadcrumb-nav">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><ALink href="/"><i className="icon-home"></i></ALink></li>
                            <li className="breadcrumb-item"><ALink href="/shop">Shop</ALink></li>
                            <li className="breadcrumb-item">
                                {
                                    product && product.categories.map((item, index) => (
                                        <React.Fragment key={`category-${index}`}>
                                            <ALink href={{ pathname: "/shop", query: { category: item.slug } }}>{item[`${i18n.language}_name`]}</ALink>
                                            {index < product.categories.length - 1 ? ',' : ''}
                                        </React.Fragment>
                                    ))
                                }
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">{product && product.name}</li>
                        </ol>
                    </nav>
                </div>

                <div className={`container skeleton-body skel-shop-products ${loading ? '' : 'loaded'}`}>
                    <div className="product-single-container product-single-default">
                        <div className="row">
                            {product?.images?.length > 0 && <ProductMediaOne product={product} />}

                            <ProductDetailOne
                                product={product}
                            // prev={product && data.product.prev}
                            // next={product && data.product.next}
                            />
                        </div>
                    </div>

                    {/* <SingleTabOne product={product} />  */}

                    <RelatedProducts products={related} loading={loading} />
                </div>
            </main>
        </Page>
    )
}

export default ProductDefault;