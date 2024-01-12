import SlideToggle from 'react-slide-toggle';
import InputRange from 'react-input-range';
import StickyBox from 'react-sticky-box';
import Tree from 'rc-tree';
import { useState, useEffect, useMemo } from 'react';
// Import Custom Component
import ALink from '../../../common/ALink';
import OwlCarousel from '../../../features/owl-carousel';
import ProductThree from '../../../features/products/product-three';
import { useLocation, useSearchParams, useNavigate } from 'react-router-dom';
import data from './../../../../data/sidebar.json'
// import categoriesData from './../../../../data/categories.json'
import { useTranslation } from 'react-i18next'
// Import Utils
import { widgetFeaturedProductSlider } from '../../../../utils/data/slider';
import { shopBrands, shopSizes } from '../../../../utils/data/shop';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories } from '../../../../store/categories/categories.selectors';
import { fetchVendors } from '../../../../store/vendors/vendors.actions';
import { fetchCategories } from '../../../../store/categories/categories.actions';
import { getAllVendors } from '../../../../store/vendors/vendors.selectors';

const TreeNode = (props) => {
    return (
        <>
            {props.name}
            {/* <span className="products-count">({props.count})</span> */}
        </>
    )
}

function ShopSidebarOne(props) {
    const dispatch = useDispatch()
    const { i18n, t } = useTranslation()
    const { display, adClass = '' } = props;
    const location = useLocation();
    const navigate = useNavigate()
    const { data: categoriesData, loading: categoriesLoading } = useSelector(getAllCategories);
    const { data: vendorsData, loading: vendorsLoading } = useSelector(getAllVendors);

    const [searchParams, setSearchParams] = useSearchParams();
    const error = false;
    // const query = router.query;
    // const { data, loading, error } = useQuery( GET_SHOP_SIDEBAR_DATA, { variables: { featured: true } } );
    const [priceRange, setRange] = useState({ min: 0, max: 1000 });

    const getPageQueryByKey = key => searchParams.get(key)

    const categories = useMemo(() => {
        let cats = categoriesData ? categoriesData : [];
        let stack = [],
            result = [];
        result = cats.reduce((acc, cur) => {
            let newNode = {
                key: cur.slug,
                title: <TreeNode name={i18n.language === 'ar' ? cur.ar_name : cur.en_name} count={5} />,
                children: []
            };
            acc.push(newNode);
            return acc;
        }, []);
        return result;
    }, [data, i18n.language]);

    useEffect(() => {


        dispatch(fetchVendors());
        dispatch(fetchCategories())

        return () => {
            closeSidebar();
        }
    }, [])


    console.log("v", vendorsData)


    useEffect(() => {
    }, [searchParams])

    function filterByCategory(selected) {
        setSearchParams((prevParams) => {
            let updatedParams = ({
                ...Object.fromEntries(prevParams.entries())
            });
            if (selected.length) {
                updatedParams.category = selected[0]
            } else {
                let { category, ...rest } = Object.fromEntries(prevParams.entries());
                updatedParams = rest
            }
            return new URLSearchParams(updatedParams);
        });
        //navigate(location.pathname.replace('[grid]', getPageQueryByKey("grid")) + '?category=' + (selected.length ? selected[0] : ''));
    }

    function containsAttrInUrl(type, value) {
        const currentQueries = getPageQueryByKey(type) ? getPageQueryByKey(type).split(',') : [];
        return currentQueries && currentQueries.includes(value);
    }

    function getUrlForAttrs(type, value) {
        let currentQueries = getPageQueryByKey(type) ? getPageQueryByKey(type).split(',') : [];
        currentQueries = containsAttrInUrl(type, value) ? currentQueries.filter(item => item !== value) : [...currentQueries, value];
        return currentQueries.join(',');
    }



    function closeSidebar() {
        document.querySelector('body').classList.contains('sidebar-opened') && document.querySelector('body').classList.remove('sidebar-opened');
    }

    if (error) {
        return <div>{error.message}</div>
    }

    return (
        <>
            <div className="sidebar-overlay" onClick={closeSidebar}></div>
            <aside className={`sidebar-shop col-lg-3  mobile-sidebar skeleton-body skel-shop-products ${adClass}  ${!categoriesLoading ? 'loaded' : ''} ${display === 'none' ? 'd-lg-none' : ''} ${props.right ? '' : 'order-lg-first'}`}>
                <StickyBox className="sidebar-wrapper" offsetTop={70}>

                    {/* <div className="widget overflow-hidden">

                        {
                            loading ?
                                <div className="skel-widget"></div>
                                :

                                <SlideToggle>
                                    {({ onToggle, setCollapsibleElement, toggleState }) =>
                                    (
                                        <>
                                            <h3 className="widget-title">
                                                <a className={toggleState === 'COLLAPSED' ? 'collapsed' : ''} href="#" role="button" onClick={(e) => {
                                                    e.preventDefault()
                                                    onToggle()
                                                }}>{t("shop_sidebar_price")}</a>
                                            </h3>

                                            <div ref={setCollapsibleElement}>
                                                <div className="widget-body pb-0">
                                                    <form action="#">
                                                        <div className="price-slider-wrapper">
                                                            <InputRange
                                                                maxValue={1000}
                                                                minValue={0}
                                                                step={50}
                                                                value={priceRange}
                                                                onChange={onChangePriceRange} />
                                                        </div>

                                                        <div
                                                            className="filter-price-action d-flex align-items-center justify-content-between flex-wrap">
                                                            <div className="filter-price-text">
                                                                Price: <span id="filter-price-range">${priceRange.min} &mdash; ${priceRange.max}</span>
                                                            </div>

                                                            <button type="submit" className="btn btn-primary font2" onClick={(e) => filterByPrice(e)}>Filter</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </SlideToggle>
                        }
                    </div> */}

                    <div className="widget">
                        {
                            categoriesLoading ?
                                <div className="skel-widget"></div>
                                :
                                <SlideToggle>
                                    {({ onToggle, setCollapsibleElement, toggleState }) => (
                                        <>
                                            <h3 className="widget-title">
                                                <a href="#" onClick={(e) => {
                                                    e.preventDefault()
                                                    onToggle()
                                                }} className={toggleState === 'COLLAPSED' ? 'collapsed' : ''}>{t("shop_sidebar_categories")}</a>
                                            </h3>
                                            <div className="overflow-hidden" ref={setCollapsibleElement}>
                                                <div className="widget-body">
                                                    <Tree
                                                        className="no-icon cat-list border-0"
                                                        selectable={true}
                                                        showIcon={false}
                                                        defaultExpandedKeys={getPageQueryByKey("category") ? [getPageQueryByKey("category")] : []}
                                                        switcherIcon={(props) => {
                                                            return (!props.isLeaf ?
                                                                <span className="toggle"></span>
                                                                : ''
                                                            )
                                                        }}
                                                        selectedKeys={getPageQueryByKey("category") ? [getPageQueryByKey("category")] : []}
                                                        treeData={categories}
                                                        onSelect={filterByCategory}
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </SlideToggle>
                        }
                    </div>

                    {
                        (getPageQueryByKey("category") || getPageQueryByKey("vendor") || getPageQueryByKey("max_price")) && <div className="widget">
                            <ALink href={{ query: { grid: getPageQueryByKey("grid") } }} scroll={false} className="btn btn-primary reset-filter">{t("shop_reset_filter")}</ALink>
                        </div>
                    }


                    <div className="widget widget-brand">
                        {
                            vendorsLoading ?
                                <div className="skel-widget"></div>
                                :
                                <SlideToggle>
                                    {({ onToggle, setCollapsibleElement, toggleState }) => (
                                        <>
                                            <h3 className="widget-title">
                                                <a className={toggleState === 'COLLAPSED' ? 'collapsed' : ''} href="#" onClick={(e) => {
                                                    e.preventDefault()
                                                    onToggle()
                                                }}>{t("shop_sidebar_vendors")}</a>
                                            </h3>
                                            <div className="overflow-hidden" ref={setCollapsibleElement}>
                                                <div className="widget-body">
                                                    <ul className="cat-list">
                                                        {
                                                            vendorsData.map((item, index) => (<li className={containsAttrInUrl('vendor', item.slug) ? 'active' : ''} key={`vendor-${index}`}>
                                                                <ALink
                                                                    onClick={(e) => {
                                                                        e.preventDefault()
                                                                        setSearchParams((prevParams) => {
                                                                            const vendorValue = getUrlForAttrs('vendor', item.slug);
                                                                            let updatedParams = ({
                                                                                ...Object.fromEntries(prevParams.entries()),
                                                                                page: 1,
                                                                                vendor: vendorValue,
                                                                            });
                                                                            if (!vendorValue) {
                                                                                let { vendor, ...rest } = Object.fromEntries(prevParams.entries());
                                                                                updatedParams = rest
                                                                            }
                                                                            return new URLSearchParams(updatedParams);
                                                                        });
                                                                    }}
                                                                    scroll={false}
                                                                >
                                                                    {item[`${i18n.language}_name`]}
                                                                </ALink>
                                                            </li>))
                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </SlideToggle>
                        }
                    </div>

                    {/* <div className="widget widget-size">
                        {
                            loading ?
                                <div className="skel-widget"></div>
                                :
                                <SlideToggle>
                                    {({ onToggle, setCollapsibleElement, toggleState }) => (
                                        <>
                                            <h3 className="widget-title">
                                                <a className={toggleState === 'COLLAPSED' ? 'collapsed' : ''} href="#" onClick={(e) => {
                                                    e.preventDefault()
                                                    onToggle()
                                                }}>Sizes</a>
                                            </h3>
                                            <div className="overflow-hidden" ref={setCollapsibleElement}>
                                                <div className="widget-body">
                                                    <ul className="cat-list">
                                                        {
                                                            shopSizes.map((item, index) => (
                                                                <li className={containsAttrInUrl('sizes', item.size) ? 'active' : ''} key={`size-${index}`}>
                                                                    <ALink
                                                                        onClick={(e) => {
                                                                            e.preventDefault()
                                                                            setSearchParams((prevParams) => {

                                                                                return new URLSearchParams({
                                                                                    ...Object.fromEntries(prevParams.entries()),
                                                                                    page: 1,
                                                                                    brands: getUrlForAttrs('brasizesnds', item.size)
                                                                                });
                                                                            });
                                                                        }}
                                                                        // href={{ query: { ...query, page: 1, sizes: getUrlForAttrs('sizes', item.size) } }}
                                                                        scroll={false}
                                                                    >{item.name}</ALink>
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </SlideToggle>
                        }
                    </div> */}

                    <div className="widget widget-featured pb-0">
                        <h3 className="widget-title">{t("featured_products")}</h3>

                        <div className="widget-body">
                            <OwlCarousel adClass="widget-featured-products" isTheme={false} options={widgetFeaturedProductSlider}>
                                <div className="featured-col">
                                    {
                                        categoriesLoading ?
                                            [0, 1, 2].map((item, index) =>
                                                <div className="skel-product-col skel-pro mb-2" key={"product-one" + index}></div>
                                            )
                                            :
                                            data.shopSidebarData.featured.slice(0, 3).map((item, index) => (
                                                <ProductThree
                                                    product={item}
                                                    key={"product-three" + index}
                                                />
                                            ))
                                    }
                                </div>

                                <div className="featured-col">
                                    {data && data.shopSidebarData.featured.slice(0, 3).map((item, index) => (
                                        <ProductThree product={item} key={`featured-${index}`} />
                                    ))}
                                </div>
                            </OwlCarousel>
                        </div>

                    </div>

                </StickyBox>

            </aside>
        </>
    )
}

export default ShopSidebarOne;