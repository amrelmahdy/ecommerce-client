import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import ALink from '../../components/common/ALink';
import ShopSidebarOne from '../../components/partials/shop/sidebar/shop-sidebar-one';
import Pagination from '../../components/features/pagination';
import ProductsGrid from '../../components/partials/products-collection/product-grid';
import Page from '../../components/page';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/shop/shop.actions';
import { getAllProducts } from '../../store/shop/shop.selectors';
import { useTranslation } from 'react-i18next';

function Shop() {
    const { t } = useTranslation()
    const dispatch = useDispatch();
    const { data: products, categoryFamily, loading } = useSelector(getAllProducts);
    console.log("useSelector(getAllProducts)", products)
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get('search')
    const pageQuery = searchParams.get('page')



    const getPageQueryByKey = key => searchParams.get(key)

    // const myParam = new URLSearchParams(location.search);
    // const query = router.query;
    // const [ getProducts, { data, loading, error } ] = useLazyQuery( GET_PRODUCTS );
    const [perPage, setPerPage] = useState(12);
    const [sortBy, setSortBy] = useState(getPageQueryByKey('sortBy') ? getPageQueryByKey('sortBy') : 'default');


    const totalPage = products ? parseInt(products.length / perPage) + (products.length % perPage ? 1 : 0) : 1;



    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    const getProducts = () => {
        return []
    }


    useEffect(() => {
        let offset = document.querySelector('.main-content').getBoundingClientRect().top + window.scrollY - 58;
        setTimeout(() => {
            window.scrollTo({ top: offset, behavior: 'smooth' });
        }, 200);

        let page = getPageQueryByKey('page') ? getPageQueryByKey('page') : 1;

        getProducts({
            variables: {
                search: getPageQueryByKey('search'),
                sizes: getPageQueryByKey('sizes') ? getPageQueryByKey('sizes').split(',') : [],
                brands: getPageQueryByKey('brands') ? getPageQueryByKey('brands').split(',') : [],
                min_price: parseInt(getPageQueryByKey('min_price')),
                max_price: parseInt(getPageQueryByKey('max_price')),
                category: getPageQueryByKey('category'),
                tag: getPageQueryByKey('tag'),
                sortBy: sortBy,
                from: perPage * (page - 1),
                to: perPage * page
            }
        });
    }, [searchParams, perPage, sortBy])


    function onPerPageChange(e) {
        setPerPage(e.target.value);
        // router.push( {
        //     pathname: router.pathname,
        //     query: {
        //         ...query,
        //         page: 1
        //     }
        // } );
    }

    function onSortByChange(e) {
        // router.push( {
        //     pathname: router.pathname,
        //     query: {
        //         ...query,
        //         sortBy: e.target.value,
        //         page: 1
        //     }
        // } )
        //setSortBy( e.target.value );
    }

    function sidebarToggle(e) {
        //     let body = document.querySelector( 'body' );
        //     e.preventDefault();
        //     if ( body.classList.contains( 'sidebar-opened' ) ) {
        //         body.classList.remove( 'sidebar-opened' );
        //     } else {
        //         body.classList.add( 'sidebar-opened' );
        //     }
        // }

        // if ( error ) {
        //     return <div>{ error.message }</div>
    }


    return (
        <Page>
            <main className="main rtl">
                <div className="container">
                    <nav aria-label="breadcrumb" className="breadcrumb-nav">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><ALink href="/"><i className="icon-home"></i></ALink></li>
                            {
                                getPageQueryByKey('category') ?
                                    <>
                                        <li className="breadcrumb-item"><ALink href={{ pathname: location.pathname, query: {} }} scroll={false}>{t("breadcrumb_item_shop")}</ALink></li>
                                        {
                                            categoryFamily.map((item, index) => (
                                                <li className="breadcrumb-item" key={`category-family-${index}`}><ALink href={{ query: { category: item.slug } }} scroll={false}>{item.name}</ALink></li>
                                            ))
                                        }
                                        <li className="breadcrumb-item active">
                                            {
                                                getPageQueryByKey("search") ?
                                                    <>
                                                        Search - <ALink href={{ query: { category: getPageQueryByKey("category") } }} scroll={false}>{getPageQueryByKey("category")}</ALink> / {getPageQueryByKey("search")}
                                                    </>
                                                    : getPageQueryByKey("category")
                                            }
                                        </li>
                                    </>
                                    : getPageQueryByKey('search') ?
                                        <>
                                            <li className="breadcrumb-item"><ALink href={{ pathname: location.pathname, query: {} }} scroll={false}>shop</ALink></li>
                                            <li className="breadcrumb-item active" aria-current="page">{`Search - ${getPageQueryByKey("search")}`}</li>
                                        </>
                                        : getPageQueryByKey("tag") ?
                                            <>
                                                <li className="breadcrumb-item"><ALink href={{ pathname: location.pathname, query: {} }} scroll={false}>shop</ALink></li>
                                                <li className="breadcrumb-item active" aria-current="page">{`Product Tag - ${getPageQueryByKey("tag")}`}</li>
                                            </>
                                            : <li className="breadcrumb-item active" aria-current="page">{t("breadcrumb_item_shop")}</li>
                            }
                        </ol>
                    </nav>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 main-content">

                            <nav className="toolbox sticky-header mobile-sticky">
                                <div className="toolbox-left">
                                    <a href="#" className="sidebar-toggle" onClick={e => sidebarToggle(e)}>
                                        <svg data-name="Layer 3" id="Layer_3" viewBox="0 0 32 32"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <line x1="15" x2="26" y1="9" y2="9" className="cls-1"></line>
                                            <line x1="6" x2="9" y1="9" y2="9" className="cls-1"></line>
                                            <line x1="23" x2="26" y1="16" y2="16" className="cls-1"></line>
                                            <line x1="6" x2="17" y1="16" y2="16" className="cls-1"></line>
                                            <line x1="17" x2="26" y1="23" y2="23" className="cls-1"></line>
                                            <line x1="6" x2="11" y1="23" y2="23" className="cls-1"></line>
                                            <path
                                                d="M14.5,8.92A2.6,2.6,0,0,1,12,11.5,2.6,2.6,0,0,1,9.5,8.92a2.5,2.5,0,0,1,5,0Z"
                                                className="cls-2"></path>
                                            <path d="M22.5,15.92a2.5,2.5,0,1,1-5,0,2.5,2.5,0,0,1,5,0Z" className="cls-2"></path>
                                            <path d="M21,16a1,1,0,1,1-2,0,1,1,0,0,1,2,0Z" className="cls-3"></path>
                                            <path
                                                d="M16.5,22.92A2.6,2.6,0,0,1,14,25.5a2.6,2.6,0,0,1-2.5-2.58,2.5,2.5,0,0,1,5,0Z"
                                                className="cls-2"></path>
                                        </svg>
                                        <span>Filter</span>
                                    </a>

                                    <div className="toolbox-item toolbox-sort">
                                        <label>{t("shop_toolbar_sort_by")}</label>
                                        <div className="select-custom">
                                            <select name="orderby" className="form-control" value={sortBy} onChange={e => onSortByChange(e)}>

          

                                                <option value="default">{t("shop_toolbar_sort_by_default")}</option>
                                                <option value="price">{t("shop_toolbar_sort_by_price")}</option>
                                                <option value="price">{t("shop_toolbar_sort_by_date-desc")}</option>
                                                <option value="date">{t("shop_toolbar_sort_by_date")}</option>
                                                <option value="rating">{t("shop_toolbar_sort_by_rating")}</option>

                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="toolbox-right">
                                    <div className="toolbox-item toolbox-show">
                                        <label>{t("shop_toolbar_shows")}</label>
                                        <div className="select-custom">
                                            <select name="count" className="form-control" value={perPage} onChange={(e) => onPerPageChange(e)}>
                                                <option value="12">12</option>
                                                <option value="24">24</option>
                                                <option value="36">36</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="toolbox-item layout-modes">
                                        <ALink href={{ pathname: location.pathname, query: location.search }} className="layout-btn btn-grid active" title="Grid">
                                            <i className="icon-mode-grid"></i>
                                        </ALink>
                                        <ALink href={{ pathname: '/shop/list', query: location.search }}  className="layout-btn btn-list" title="List">
                                            <i className="icon-mode-list"></i>
                                        </ALink>
                                    </div>
                                </div>
                            </nav>



                            <ProductsGrid products={products} loading={loading} perPage={perPage} />

                            {loading || (products && products.length) ?
                                <nav className="toolbox toolbox-pagination">
                                    <div className="toolbox-item toolbox-show">
                                        <label>{t("shop_toolbar_shows")}</label>

                                        <div className="select-custom">
                                            <select name="count" className="form-control" value={perPage} onChange={e => onPerPageChange(e)}>
                                                <option value="12">12</option>
                                                <option value="24">24</option>
                                                <option value="36">36</option>
                                            </select>
                                        </div>
                                    </div>
                                    <Pagination totalPage={totalPage} />
                                </nav>
                                : ''
                            }

                        </div>

                        <ShopSidebarOne />
                    </div>
                </div>
            </main>
        </Page>
    )
}

export default Shop;