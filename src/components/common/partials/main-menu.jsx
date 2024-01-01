// import { withRouter } from 'next/router';
import React, { useEffect } from 'react'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import _ from 'lodash'
// import withApollo from '../../../server/apollo';
// import { GET_HOME_DATA } from '../../../server/queries';

// Import Custom Component
import ALink from "../ALink";
import ProductCountdown from '../../features/product-countdown';
import OwlCarousel from '../../features/owl-carousel';
import ProductThree from '../../features/products/product-three';
import { useTranslation } from 'react-i18next'
// Import Utils
import { mainMenu } from "../../../utils/data/menu";
import mainMenuData from './../../../data/mainmenu.json'
// import categoriesData from './../../../data/categories.json'

import i18n from '../../../i18n';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories } from '../../../store/categories/categories.selectors';

function MainMenu({ router }) {

    const { data: categoriesData, loading: categoriesLoading } = useSelector(getAllCategories);

    

    const pathname = 'router.pathname';
    const { t } = useTranslation()
    // const { data, loading, error } = useQuery(GET_HOME_DATA, { variables: { productsCount: 10, postsCount: 6 } });

    // const featured = data && data.specialProducts.featured;

    const featured = false;
    const error = false;





    const renderMainMenu = () => {
        let menItems = mainMenuData.menu || []
        var reversed = Object.assign([], menItems)
        if (i18n.language === 'ar') {
            reversed.reverse()
            menItems = reversed
        }
        const renderSubItems = subItems => {
            if (subItems.length) {
                return <ul>
                    {
                        subItems.map((subItem, i) => {
                            return <li key={"menu_item" + i}>
                                <ALink href={`${subItem.path}`}>{t(subItem.name)}</ALink>
                            </li>

                        })
                    }
                </ul>
            }
            return null;
        }
        return menItems.map((item, index) => {
            const subItems = item.sub_items;
            return <li key={"sub_menu_item" + index} className={pathname.indexOf('/pages/blog') !== -1 ? 'active' : ''}>
                <ALink href={item.path}>{t(item.name)}</ALink>
                {renderSubItems(subItems)}
            </li>
        })
    }



    const renderSideMenu = () => {
        let menuItems = categoriesData.filter(item => !item.parent) || []
        // var reversed = Object.assign([], menItems)
        // if (i18n.language === 'ar') {
        //     reversed.reverse()
        //     menItems = reversed
        // }
        const renderSubItems = subItems => {
            if (subItems.length) {
                return <div className="megamenu megamenu-fixed-width megamenu-six text-transform-none">
                    <ul className="submenu bg-transparent">
                        {
                            subItems.map((subItem, i) => {
                                return <li key={"menu_item" + i}>
                                    <ALink href={{ pathname: '/shop', query: { category: 'sports-and-fitness' } }}>{
                                        i18n.language === 'ar' ? subItem.ar_name : subItem.en_name
                                    }</ALink>

                                </li>

                            })
                        }
                    </ul>
                </div>

            }
            return null;
        }
        return menuItems.map((item, index) => {
            const subItems = item.sub_categories;
            const name = i18n.language === 'ar' ? item.ar_name : item.en_name
            return <li>
                <ALink to={{ pathname: '/shop', search: "spcategory=plants" }}><i className={item.icon}></i>{name}</ALink>
                <span className="menu-btn"></span>
                {renderSubItems(subItems)}
            </li>
        })
    }

    if (error) {
        return <div>{error.message}</div>
    }

    function isOtherPage() {
        return mainMenu.other.find(variation => variation.url === pathname);
    }

    return (
        <>
            <nav className={`main-nav d-flex font2 skeleton-body skel-shop-products ${!categoriesLoading ? 'loaded' : ''}`}>
                <div className="menu-depart">
                    <ALink href="/shop"><i className="fa fa-bars align-middle mr-3"></i>{t("main_menu_all_departments")}</ALink>
                    <ul className="menu menu-vertical">

                        {renderSideMenu()}
                        {/* <li>
                            <ALink to={{ pathname: '/shop', search: "spcategory=plants" }}><i className="icon-comida-organica"></i>Plants</ALink>
                            <span className="menu-btn"></span>
                            <div className="megamenu megamenu-fixed-width megamenu-six text-transform-none">
                                <div className="row">
                                    <div className="col-md-12 pt-0">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <ul className="submenu bg-transparent">
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'sports-and-fitness' } }}>Sports &amp; Fitness</ALink>
                                                    </li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'boating-and-sailing' } }}>Boating &amp; Sailing</ALink>
                                                    </li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'clothing' } }}>Clothing</ALink></li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'exercise' } }}>Exercise &amp;
                                                        Fitness</ALink></li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'golf' } }}>Golf</ALink></li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'hunting-and-fishing' } }}>Hunting &amp; Fishing</ALink>
                                                    </li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'leisure-sports' } }}>Leisure Sports</ALink>
                                                    </li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'running' } }}>Running</ALink>
                                                    </li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'swimming' } }}>Swimming</ALink>
                                                    </li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'team-sports' } }}>Team Sports</ALink>
                                                    </li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'tennis' } }}>Tennis</ALink>
                                                    </li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'other-sports' } }}>Other Sports</ALink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <ALink href={{ pathname: '/shop', query: { category: 'sports' } }}><i className="icon-category-electronics"></i>Workshops</ALink>
                            <span className="menu-btn"></span>
                            <div className="megamenu megamenu-fixed-width megamenu-six text-transform-none">
                                <div className="row">
                                    <div className="col-md-12 pt-0">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <ul className="submenu bg-transparent">
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'sports-and-fitness' } }}>Sports &amp; Fitness</ALink>
                                                    </li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'boating-and-sailing' } }}>Boating &amp; Sailing</ALink>
                                                    </li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'clothing' } }}>Clothing</ALink></li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'exercise' } }}>Exercise &amp;
                                                        Fitness</ALink></li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'golf' } }}>Golf</ALink></li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'hunting-and-fishing' } }}>Hunting &amp; Fishing</ALink>
                                                    </li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'leisure-sports' } }}>Leisure Sports</ALink>
                                                    </li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'running' } }}>Running</ALink>
                                                    </li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'swimming' } }}>Swimming</ALink>
                                                    </li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'team-sports' } }}>Team Sports</ALink>
                                                    </li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'tennis' } }}>Tennis</ALink>
                                                    </li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'other-sports' } }}>Other Sports</ALink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <ALink href={{ pathname: '/shop', query: { category: 'sports' } }}><i className="icon-category-gifts"></i>Fertilizers</ALink>
                            <span className="menu-btn"></span>
                            <div className="megamenu megamenu-fixed-width megamenu-six text-transform-none">
                                <div className="row">
                                    <div className="col-md-12 pt-0">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <ul className="submenu bg-transparent">
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'sports-and-fitness' } }}>Sports &amp; Fitness</ALink>
                                                    </li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'boating-and-sailing' } }}>Boating &amp; Sailing</ALink>
                                                    </li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'clothing' } }}>Clothing</ALink></li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'exercise' } }}>Exercise &amp;
                                                        Fitness</ALink></li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'golf' } }}>Golf</ALink></li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'hunting-and-fishing' } }}>Hunting &amp; Fishing</ALink>
                                                    </li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'leisure-sports' } }}>Leisure Sports</ALink>
                                                    </li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'running' } }}>Running</ALink>
                                                    </li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'swimming' } }}>Swimming</ALink>
                                                    </li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'team-sports' } }}>Team Sports</ALink>
                                                    </li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'tennis' } }}>Tennis</ALink>
                                                    </li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'other-sports' } }}>Other Sports</ALink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <ALink href={{ pathname: '/shop', query: { category: 'sports' } }}><i className="icon-category-music"></i>Pesticides</ALink>
                            <span className="menu-btn"></span>
                            <div className="megamenu megamenu-fixed-width megamenu-six text-transform-none">
                                <div className="row">
                                    <div className="col-md-12 pt-0">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <ul className="submenu bg-transparent">
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'sports-and-fitness' } }}>Sports &amp; Fitness</ALink>
                                                    </li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'boating-and-sailing' } }}>Boating &amp; Sailing</ALink>
                                                    </li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'clothing' } }}>Clothing</ALink></li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'exercise' } }}>Exercise &amp;
                                                        Fitness</ALink></li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'golf' } }}>Golf</ALink></li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'hunting-and-fishing' } }}>Hunting &amp; Fishing</ALink>
                                                    </li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'leisure-sports' } }}>Leisure Sports</ALink>
                                                    </li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'running' } }}>Running</ALink>
                                                    </li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'swimming' } }}>Swimming</ALink>
                                                    </li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'team-sports' } }}>Team Sports</ALink>
                                                    </li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'tennis' } }}>Tennis</ALink>
                                                    </li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'other-sports' } }}>Other Sports</ALink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <ALink href={{ pathname: '/shop', query: { category: 'sports' } }}><i className="icon-cat-sport"></i>Garden supplies</ALink>
                            <span className="menu-btn"></span>
                            <div className="megamenu megamenu-fixed-width megamenu-six text-transform-none">
                                <div className="row">
                                    <div className="col-md-12 pt-0">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <ul className="submenu bg-transparent">
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'sports-and-fitness' } }}>Sports &amp; Fitness</ALink>
                                                    </li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'boating-and-sailing' } }}>Boating &amp; Sailing</ALink>
                                                    </li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'clothing' } }}>Clothing</ALink></li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'exercise' } }}>Exercise &amp;
                                                        Fitness</ALink></li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'golf' } }}>Golf</ALink></li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'hunting-and-fishing' } }}>Hunting &amp; Fishing</ALink>
                                                    </li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'leisure-sports' } }}>Leisure Sports</ALink>
                                                    </li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'running' } }}>Running</ALink>
                                                    </li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'swimming' } }}>Swimming</ALink>
                                                    </li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'team-sports' } }}>Team Sports</ALink>
                                                    </li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'tennis' } }}>Tennis</ALink>
                                                    </li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'other-sports' } }}>Other Sports</ALink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <ALink href={{ pathname: '/shop', query: { category: 'sports' } }}><i className="icon-category-garden"></i>Seeds</ALink>
                            <span className="menu-btn"></span>
                            <div className="megamenu megamenu-fixed-width megamenu-six text-transform-none">
                                <div className="row">
                                    <div className="col-md-12 pt-0">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <ul className="submenu bg-transparent">
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'sports-and-fitness' } }}>Sports &amp; Fitness</ALink>
                                                    </li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'boating-and-sailing' } }}>Boating &amp; Sailing</ALink>
                                                    </li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'clothing' } }}>Clothing</ALink></li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'exercise' } }}>Exercise &amp;
                                                        Fitness</ALink></li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'golf' } }}>Golf</ALink></li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'hunting-and-fishing' } }}>Hunting &amp; Fishing</ALink>
                                                    </li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'leisure-sports' } }}>Leisure Sports</ALink>
                                                    </li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'running' } }}>Running</ALink>
                                                    </li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'swimming' } }}>Swimming</ALink>
                                                    </li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'team-sports' } }}>Team Sports</ALink>
                                                    </li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'tennis' } }}>Tennis</ALink>
                                                    </li>
                                                    <li><ALink href={{ pathname: '/shop', query: { category: 'other-sports' } }}>Other Sports</ALink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li> */}

                    </ul>
                </div>
                <ul className="menu sf-js-enabled sf-arrows">
                    {/* <li className={pathname.startsWith('/shop') ? 'active' : ''}>
                        <ALink href="/shop" className="sf-with-ul">Shop</ALink>
                        <div className="megamenu megamenu-fixed-width megamenu-3cols">
                            <div className="row">
                                <div className="col-lg-4">
                                    <ALink href="#" className="nolink">VARIATION 1</ALink>
                                    <ul className="submenu">
                                        {
                                            mainMenu.shop.variation1.map((variations, index) => (
                                                <li key={"menu-item" + index}>
                                                    <ALink href={`${variations.url}`}>{variations.title}</ALink>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>

                                <div className="col-lg-4">
                                    <ALink href="#" className="nolink">VARIATION 2</ALink>
                                    <ul className="submenu">
                                        {
                                            mainMenu.shop.variation2.map((variations, index) => (
                                                <li key={"menu-item" + index}>
                                                    <ALink href={`${variations.url}`}>{variations.title}</ALink>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>

                                <div className="col-lg-4 p-0">
                                    <div className="menu-banner">
                                        <figure>
                                            <img src="/images/menu-banner.jpg" alt="Menu banner" width="300" height="300" />
                                        </figure>
                                        <div className="banner-content">
                                            <h4>
                                                <span className="">UP TO</span><br />
                                                <b className="">50%</b>
                                                <i>OFF</i>
                                            </h4>
                                            <ALink href="/shop" className="btn btn-sm btn-dark text-white">SHOP NOW</ALink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className={pathname.startsWith('/product') ? 'active' : ''}>
                        <ALink href="/product/default/integrali-tusilli" className="sf-with-ul">Products</ALink>
                        <div className="megamenu megamenu-fixed-width">
                            <div className="row">
                                <div className="col-lg-4">
                                    <ALink href="#" className="nolink">PRODUCT PAGES</ALink>
                                    <ul className="submenu">
                                        {
                                            mainMenu.product.pages.map((variations, index) => (
                                                <li key={"menu-item" + index}>
                                                    <ALink href={`${variations.url}`}>{variations.title}</ALink>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>

                                <div className="col-lg-4">
                                    <ALink href="#" className="nolink">PRODUCT LAYOUTS</ALink>
                                    <ul className="submenu">
                                        {
                                            mainMenu.product.layout.map((variations, index) => (
                                                <li key={"menu-item" + index}>
                                                    <ALink href={`${variations.url}`}>{variations.title}</ALink>
                                                </li>
                                            ))
                                        }
                                        <li >
                                            <ALink href="#">BUILD YOUR OWN</ALink>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-lg-4 p-0">
                                    <div className="menu-banner menu-banner-2">
                                        <figure>
                                            <img src="/images/menu-banner-1.jpg" alt="Menu banner" width="380" height="790"
                                                className="product-promo" />
                                        </figure>
                                        <i>OFF</i>
                                        <div className="banner-content">
                                            <h4>
                                                <span className="">UP TO</span><br />
                                                <b className="">50%</b>
                                            </h4>
                                        </div>

                                        <ALink href="/shop" className="btn btn-sm btn-dark text-white">SHOP NOW</ALink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li> */}
                    {renderMainMenu()}
                    {/* <li className={pathname.indexOf('/pages/blog') !== -1 ? 'active' : ''}>
                        <ALink href="/shop">Shop</ALink>
                    </li>
                    <li className={pathname.indexOf('/pages/blog') !== -1 ? 'active' : ''}>
                        <ALink href="/product/integrali-tusilli">Products</ALink>
                    </li>
                    <li className={pathname.indexOf('/pages/blog') !== -1 ? 'active' : ''}>
                        <ALink href="/pages/blog">Help & FAQs</ALink>
                    </li>
                    <li className={isOtherPage() ? 'active' : ''}>
                        <ALink href="#" className="sf-with-ul">Our services</ALink>
                        <ul>
                            {
                                mainMenu.other.map((variations, index) => (
                                    <li key={"menu-item" + index}>
                                        <ALink href={`${variations.url}`}>{variations.title}</ALink>
                                    </li>
                                ))
                            }
                        </ul>
                    </li> */}

                    {/* <li className={pathname === '/pages/about-us' ? 'active' : ''}>
                        <ALink href="/pages/about-us">Our Stores</ALink>
                    </li>

                    <li>
                        <a href="#" target="_blank">Order Tracking</a>
                    </li> */}
                </ul>
            </nav >
        </>
    );
}

export default MainMenu;