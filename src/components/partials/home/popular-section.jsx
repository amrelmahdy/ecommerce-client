import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useTranslation } from 'react-i18next'
// Import Custom Component
import ProductOne from '../../features/products/product-one';
import ALink from '../../common/ALink';
import OwlCarousel from '../../features/owl-carousel';

// Import Settigns
import { infoBoxSlider, categorySlider, productSlider } from '../../../utils/data/slider';
import { fadeInUpShorter, fadeIn } from '../../../utils/data/keyframes'
import categoriesData from './../../../data/categories.json'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../../store/products/products.actions';
import { fetchCategories } from '../../../store/categories/categories.actions';
import { getAllCategories } from '../../../store/categories/categories.selectors';

export default function PopularSection(props) {


    const { data, loading } = useSelector(getAllCategories)


    const { t, i18n } = useTranslation()

    const { products } = props;

    const breakfast = categoryFilter(products, "breakfast");
    const cooking = categoryFilter(products, "cooking");
    const frozen = categoryFilter(products, "frozen-2");
    const fruits = categoryFilter(products, "fruits-2");
    const vegetables = categoryFilter(products, "meat-and-seafood");

    function categoryFilter(products, category) {
        return products && products.filter(product => (
            product.categories.find(item => item.slug == category)
        ))
    }

    return (
        <section className="popular-section">
            {
               !loading && data &&  data.length && <div className="container">
                    <h2 className="section-title">{t("home_shop_by_category_title")}</h2>
                    <p className="section-info font2"></p>

                    <Reveal keyframes={fadeInUpShorter} delay={100} duration={1000} triggerOnce>
                        <section className="categories-section">
                            <OwlCarousel adClass="categories-slider show-nav-hover nav-oute  mb-4" options={categorySlider}>

                                {
                                    data.length && data.map((item, index) => {
                                        const name = i18n.language === 'ar' ? item.ar_name : item.en_name
                                        return <div className="product-category media-with-lazy ">
                                            <ALink to={{ pathname: '/shop', search: "category=" + item.slug }}>
                                                <figure>
                                                    <LazyLoadImage
                                                        alt="category"
                                                        src={item.image?.url}
                                                        width="100%"
                                                        height="auto"
                                                        threshold={500}
                                                        effect="black and white"
                                                    />
                                                </figure>
                                                <div className="category-content">
                                                    <h3 className="font2 ls-n-25 al-r">{name}</h3>
                                                    {/* <span className="font2 rtl ls-n-20">{item.count} {t("popular_department_product")}</span> */}
                                                </div>
                                            </ALink>
                                        </div>

                                    })
                                }



                                {/* 
                        <div className="product-category media-with-lazy bg-white text-white">
                            <ALink href={{ pathname: '/shop', query: { category: 'fruits' } }}>
                                <figure>
                                    <LazyLoadImage
                                        alt="category"
                                        src="https://d-themes.com/react/porto/demo35/images/home/products/cats/cat-2.png"
                                        width="100%"
                                        height="auto"
                                        threshold={500}
                                        effect="black and white"
                                    />
                                </figure>
                                <div className="category-content">
                                    <h3 className="font2 ls-n-25 al-r">Pesticides</h3>
                                    <span className="font2 ls-n-20">10 Products</span>
                                </div>
                            </ALink>
                        </div>

                        <div className="product-category media-with-lazy bg-white text-white">
                            <ALink href={{ pathname: '/shop', query: { category: 'vegetables' } }}>
                                <figure>
                                    <LazyLoadImage
                                        alt="category"
                                        src="https://d-themes.com/react/porto/demo35/images/home/products/cats/cat-3.png"
                                        width="100%"
                                        height="auto"
                                        threshold={500}
                                        effect="black and white"
                                    />
                                </figure>
                                <div className="category-content">
                                    <h3 className="font2 ls-n-25 al-r">Fertilizers</h3>
                                    <span className="font2 ls-n-20">1 Products</span>
                                </div>
                            </ALink>
                        </div>

                        <div className="product-category media-with-lazy bg-white text-white">
                            <ALink href={{ pathname: '/shop', query: { category: 'breakfast' } }}>
                                <figure>
                                    <LazyLoadImage
                                        alt="category"
                                        src="https://d-themes.com/react/porto/demo35/images/home/products/cats/cat-4.png"
                                        width="100%"
                                        height="auto"
                                        threshold={500}
                                        effect="black and white"
                                    />
                                </figure>
                                <div className="category-content">
                                    <h3 className="font2 ls-n-25 al-r">Plants</h3>
                                    <span className="font2 ls-n-20">8 Products</span>
                                </div>
                            </ALink>
                        </div>
                        <div className="product-category media-with-lazy bg-white text-white">
                            <ALink href={{ pathname: '/shop', query: { category: 'cooking' } }}>
                                <figure>
                                    <LazyLoadImage
                                        alt="category"
                                        src="https://d-themes.com/react/porto/demo35/images/home/products/cats/cat-1.png"
                                        width="100%"
                                        height="auto"
                                        threshold={500}
                                        effect="black and white"
                                    />
                                </figure>
                                <div className="category-content">
                                    <h3 className="font2 ls-n-25 al-r">PLANTERS</h3>
                                    <span className="font2 ls-n-20">4 Products</span>
                                </div>
                            </ALink>
                        </div>

                        <div className="product-category media-with-lazy bg-white text-white">
                            <ALink href={{ pathname: '/shop', query: { category: 'cooking' } }}>
                                <figure>
                                    <LazyLoadImage
                                        alt="category"
                                        src="https://d-themes.com/react/porto/demo35/images/home/products/cats/cat-1.png"
                                        width="100%"
                                        height="auto"
                                        threshold={500}
                                        effect="black and white"
                                    />
                                </figure>
                                <div className="category-content">
                                    <h3 className="font2 ls-n-25 al-r">POTS</h3>
                                    <span className="font2 ls-n-20">4 Products</span>
                                </div>
                            </ALink>
                        </div> */}
                            </OwlCarousel>
                        </section>
                    </Reveal>

                    {/* <Reveal keyframes={fadeIn} delay={200} duration={1000} triggerOnce>
                    <h2 className="section-title">Most Popular</h2>
                    <p className="section-info font2">All our new arrivals in a exclusive brand selection</p>

                    <div className="products-container">
                        <Tabs selectedTabClassName="active" selectedTabPanelClassName="show active">
                            <TabList className="nav nav-tabs border-0 px-4 pb-0 m-b-3">
                                <Tab className="nav-item">
                                    <ALink href="#" className="nav-link">View All</ALink>
                                </Tab>

                                <Tab className="nav-item">
                                    <ALink href="#" className="nav-link">Breakfast</ALink>
                                </Tab>


                                <Tab className="nav-item">
                                    <ALink href="#" className="nav-link">Cooking</ALink>
                                </Tab>

                                <Tab className="nav-item">
                                    <ALink href="#" className="nav-link">Frozen</ALink>
                                </Tab>

                                <Tab className="nav-item">
                                    <ALink href="#" className="nav-link">Fruits</ALink>
                                </Tab>

                                <Tab className="nav-item">
                                    <ALink href="#" className="nav-link">Vegetables</ALink>
                                </Tab>
                            </TabList>

                            <div className="tab-content">
                                <TabPanel className="tab-pane fade">
                                    <OwlCarousel adClass="products-slider nav-outer" options={productSlider}>
                                        {
                                            products ?
                                                products.map((item, index) => (
                                                    <ProductOne
                                                        adClass="inner-quickview inner-icon"
                                                        product={item}
                                                        key={"All Products:" + index}
                                                    />
                                                ))

                                                :
                                                [0, 1, 2, 3, 4, 5].map((item, index) =>
                                                    <div className="skel-pro skel-pro-grid" key={"Skeleton:" + index}></div>
                                                )
                                        }
                                    </OwlCarousel>
                                </TabPanel>

                                <TabPanel className="tab-pane fade">
                                    <OwlCarousel adClass="products-slider nav-outer" options={productSlider}>
                                        {
                                            breakfast ?
                                                breakfast.map((item, index) => (
                                                    <ProductOne
                                                        adClass="inner-quickview inner-icon"
                                                        product={item}
                                                        key={"All Products:" + index}
                                                    />
                                                ))
                                                :
                                                [0, 1, 2, 3, 4, 5].map((item, index) =>
                                                    <div className="skel-pro skel-pro-grid" key={"Skeleton:" + index}></div>
                                                )
                                        }
                                    </OwlCarousel>
                                </TabPanel>

                                <TabPanel className="tab-pane fade">
                                    <OwlCarousel adClass="products-slider nav-outer" options={productSlider}>
                                        {
                                            cooking ?
                                                cooking.map((item, index) => (
                                                    <ProductOne
                                                        adClass="inner-quickview inner-icon"
                                                        product={item}
                                                        key={"All Products:" + index}
                                                    />
                                                ))

                                                :
                                                [0, 1, 2, 3, 4, 5].map((item, index) =>
                                                    <div className="skel-pro skel-pro-grid" key={"Skeleton:" + index}></div>
                                                )
                                        }
                                    </OwlCarousel>
                                </TabPanel>

                                <TabPanel className="tab-pane fade">
                                    <OwlCarousel adClass="products-slider nav-outer" options={productSlider}>
                                        {
                                            frozen ?
                                                frozen.map((item, index) => (
                                                    <ProductOne
                                                        adClass="inner-quickview inner-icon"
                                                        product={item}
                                                        key={"All Products:" + index}
                                                    />
                                                ))

                                                :
                                                [0, 1, 2, 3, 4, 5].map((item, index) =>
                                                    <div className="skel-pro skel-pro-grid" key={"Skeleton:" + index}></div>
                                                )
                                        }
                                    </OwlCarousel>
                                </TabPanel>

                                <TabPanel className="tab-pane fade">
                                    <OwlCarousel adClass="products-slider nav-outer" options={productSlider}>
                                        {
                                            fruits ?
                                                fruits.map((item, index) => (
                                                    <ProductOne
                                                        adClass="inner-quickview inner-icon"
                                                        product={item}
                                                        key={"All Products:" + index}
                                                    />
                                                ))

                                                :
                                                [0, 1, 2, 3, 4, 5].map((item, index) =>
                                                    <div className="skel-pro skel-pro-grid" key={"Skeleton:" + index}></div>
                                                )
                                        }
                                    </OwlCarousel>
                                </TabPanel>

                                <TabPanel className="tab-pane fade">
                                    <OwlCarousel adClass="products-slider nav-outer" options={productSlider}>
                                        {
                                            vegetables ?
                                                vegetables.map((item, index) => (
                                                    <ProductOne
                                                        adClass="inner-quickview inner-icon"
                                                        product={item}
                                                        key={"All Products:" + index}
                                                    />
                                                ))

                                                :
                                                [0, 1, 2, 3, 4, 5].map((item, index) =>
                                                    <div className="skel-pro skel-pro-grid" key={"Skeleton:" + index}></div>
                                                )
                                        }
                                    </OwlCarousel>
                                </TabPanel>
                            </div>
                        </Tabs>
                    </div>
                </Reveal>
                */}

                </div>}

        </section>
    );
}