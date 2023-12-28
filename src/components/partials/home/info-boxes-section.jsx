import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// Import Custom Component
// import ProductOne from '../../features/products/product-one';
import ALink from '../../common/ALink';
import OwlCarousel from '../../features/owl-carousel';
import { useTranslation } from 'react-i18next'

// Import Settigns
import { infoBoxSlider, categorySlider, productSlider } from '../../../utils/data/slider';
// import { fadeInUpShorter, fadeIn } from '../../../utils/data/keyframes'
// import categoriesData from './../../../data/categories.json'

// Import Settigns
// import { fadeInUpShorter } from '../../../utils/data/keyframes';

function InfoBoxesSection() {
    const { t } = useTranslation()
    return (
        <section className="popular-section">
            <div className="container">
                <OwlCarousel adClass="info-boxes-slider rtl" options={infoBoxSlider}>
                    <div className="info-box info-box-icon-left">
                        <i className="icon-shipping text-primary"></i>
                        <div className="info-content">
                            <h4 className="ls-n-25 al-r">{t("popular_section_title1")}</h4>
                            <p className="font2 font-weight-light text-body ls-10">{t("popular_section_desc1")}
                            </p>
                        </div>
                    </div>

                    <div className="info-box info-box-icon-left">
                        <i className="icon-money text-primary"></i>
                        <div className="info-content">
                            <h4 className="ls-n-25 al-r">{t("popular_section_title2")}</h4>
                            <p className="font2 font-weight-light text-body ls-10">{t("popular_section_desc2")}
                            </p>
                        </div>
                    </div>

                    <div className="info-box info-box-icon-left">
                        <i className="icon-support text-primary"></i>
                        <div className="info-content">
                            <h4 className="ls-n-25 al-r">{t("popular_section_title3")}</h4>
                            <p className="font2 font-weight-light text-body ls-10">{t("popular_section_desc3")}
                            </p>
                        </div>
                    </div>

                    <div className="info-box info-box-icon-left">
                        <i className="icon-secure-payment text-primary"></i>
                        <div className="info-content">
                            <h4 className="ls-n-25 al-r">{t("popular_section_title4")}</h4>
                            <p className="font2 font-weight-light text-body ls-10">{t("popular_section_desc4")}
                            </p>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </section>
    );
}

export default React.memo(InfoBoxesSection);

