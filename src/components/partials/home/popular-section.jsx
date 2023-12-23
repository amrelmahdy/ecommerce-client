import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

// Import Custom Component
import ProductOne from '../../features/products/product-one';
import ALink from '../../common/ALink';
import OwlCarousel from '../../features/owl-carousel';

// Import Settigns
import { infoBoxSlider, categorySlider, productSlider } from '../../../utils/data/slider';
import { fadeInUpShorter, fadeIn } from '../../../utils/data/keyframes'

export default function PopularSection(props) {
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
            <div className="container">
                <OwlCarousel adClass="info-boxes-slider" options={infoBoxSlider}>
                    <div className="info-box info-box-icon-left">
                        <i className="icon-shipping text-primary"></i>
                        <div className="info-content">
                            <h4 className="ls-n-25">Free Shipping &amp; Return</h4>
                            <p className="font2 font-weight-light text-body ls-10">Free shipping on all orders over $99.
                            </p>
                        </div>
                    </div>

                    <div className="info-box info-box-icon-left">
                        <i className="icon-money text-primary"></i>
                        <div className="info-content">
                            <h4 className="ls-n-25">Money Back Guarantee</h4>
                            <p className="font2 font-weight-light text-body ls-10">100% money back guarantee</p>
                        </div>
                    </div>

                    <div className="info-box info-box-icon-left">
                        <i className="icon-support text-primary"></i>
                        <div className="info-content">
                            <h4 className="ls-n-25">Online Support 24/7</h4>
                            <p className="font2 font-weight-light text-body ls-10">Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>

                    <div className="info-box info-box-icon-left">
                        <i className="icon-secure-payment text-primary"></i>
                        <div className="info-content">
                            <h4 className="ls-n-25">Secure Payment</h4>
                            <p className="font2 font-weight-light text-body ls-10">Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </OwlCarousel>

                <h2 className="section-title">Popular Departments</h2>
                <p className="section-info font2">Products From These Categories Often Buy</p>

                <Reveal keyframes={fadeInUpShorter} delay={100} duration={1000} triggerOnce>
                    <OwlCarousel adClass="categories-slider  mb-4" options={categorySlider}>
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
                                    <h3 className="font2 ls-n-25">Garden sub</h3>
                                    <span className="font2 ls-n-20">4 Products</span>
                                </div>
                            </ALink>
                        </div>

                       

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
                                    <h3 className="font2 ls-n-25">Pesticides</h3>
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
                                    <h3 className="font2 ls-n-25">Fertilizers</h3>
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
                                    <h3 className="font2 ls-n-25">Plants</h3>
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
                                    <h3 className="font2 ls-n-25">PLANTERS</h3>
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
                                    <h3 className="font2 ls-n-25">POTS</h3>
                                    <span className="font2 ls-n-20">4 Products</span>
                                </div>
                            </ALink>
                        </div>
                    </OwlCarousel>
                </Reveal>

                <Reveal keyframes={fadeIn} delay={200} duration={1000} triggerOnce>
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
            </div>
        </section>
    );
}