import { useTranslation } from "react-i18next";
import ALink from "../../components/common/ALink";
import Page from '../../components/page';

export default function PageNotFound() {
    const { t } = useTranslation()
    return (
        <Page>
            <div className="container bg-white">
                <nav aria-label="breadcrumb" className="breadcrumb-nav">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><ALink href="/"><i className="icon-home"></i></ALink></li>
                        <li className="breadcrumb-item active" aria-current="page">404</li>
                    </ol>
                </nav>

                <section className="http-error">
                    <div className="row justify-content-center py-3">
                        <div className="col-md-7 text-center">
                            <div className="http-error-main">
                                <h2>404<i className="fas fa-file ml-3"></i></h2>
                                <p>{t("page_not_found_text")}</p>
                            </div>
                        </div>
                        {/* <div className="col-md-4 mt-4 mt-md-0">
                            <h4 className="text-primary al-r">Here are some useful links</h4>
                            <ul className="nav nav-list">
                                <li className="nav-item al-r"><ALink className="nav-link" href='/'>{t("main_menu_home")}</ALink></li>
                                <li className="nav-item al-r"><ALink className="nav-link" href={'/pages/about-us'}>{t("main_menu_shop")}</ALink></li>
                                <li className="nav-item al-r"><ALink className="nav-link" href="#">{t("main_menu_products")}</ALink></li>
                                <li className="nav-item al-r"><ALink className="nav-link" href="#">{t("main_menu_home")}</ALink></li>
                                <li className="nav-item al-r"><ALink className="nav-link" href='/pages/contact-us'>{t("main_menu_home")}</ALink></li>
                            </ul>
                        </div> */}
                    </div>
                </section>
            </div>
        </Page>
    )
}