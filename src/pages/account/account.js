import ALink from "../../components/common/ALink";
import { Tabs, Tab, TabList, div } from 'react-tabs';
import StickyBox from 'react-sticky-box';
import Page from "../../components/page";
import Cookies from 'universal-cookie';
import { useDispatch } from "react-redux";
import { setUserUnAuthenticated } from "../../store/auth/auth.slice";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCurrentLocation } from "../../api/account";
import { useTranslation } from "react-i18next";

export default function Account() {
    const cookies = new Cookies();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { t } = useTranslation()

    const [country, setCountry] = useState(null);
    const [city, setCity] = useState(null);
    const [building, setBuilding] = useState(null);
    const [district, setDistrict] = useState(null);
    const [street, setStreet] = useState(null);
    const [postalCode, setPostalCode] = useState(null);
    const [landmark, setLandmark] = useState(null);
    const [addressDescription, setAddressDescription] = useState(null);

    function controlDisplay() {
        document.querySelector('.show-content').classList.remove('show');
        document.querySelector('.hide-content').classList.add('show');
    }

    function addressHandler(e) {
        if (e.currentTarget.closest('.nav-item').classList.contains('active')) {
            document.querySelector('.show-content').classList.add('show');
            document.querySelector('.hide-content').classList.remove('show');
        }
    }

    const handleLogout = (e) => {
        e.preventDefault();
        cookies.remove("access_token")
        cookies.remove("refresh_token")
        cookies.remove("expires_at")
        cookies.remove("expires_in")
        cookies.remove("refresh_expires_at")
        cookies.remove("refresh_expires_in")
        dispatch(setUserUnAuthenticated())
        navigate("/login")
    }

    return (
        <Page>
            <main className="main">
                <div className="page-header">
                    <div className="container d-flex flex-column align-items-center">
                        <nav aria-label="breadcrumb" className="breadcrumb-nav">
                            <div className="container">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><ALink href="/">{t("home")}</ALink></li>
                                    {/* <li className="breadcrumb-item"><ALink href="/shop">{t("shop")}</ALink></li> */}
                                    <li className="breadcrumb-item active" aria-current="page">{t("account")}</li>
                                </ol>
                            </div>
                        </nav>

                        <h1>{t("account")}</h1>
                    </div>
                </div>

                <div className="container account-container custom-account-container">
                    {/* <Tabs selectedTabClassName="active" selecteddivClassName="active show" defaultIndex={0} className="tab"> */}
                    <div className="row">
                        <div className="col-lg-2" />

                        <div className="col-lg-8 order-lg-last order-1 ">
                            <div className="tab-pane " id="dashboard">
                                <div className="dashboard-content">
                                    {/* <p>
                                            Hello <strong className="text-dark">Editor</strong> (not <strong className="text-dark">Editor</strong>? <ALink href="/pages/login" className="btn btn-link ">Log out</ALink>)
                                        </p>

                                        <p>
                                            From your account dashboard you can view your <span className="btn btn-link link-to-tab" onClick={() => document.getElementById('link-order').click()}>recent orders</span>, manage your
                                            <span className="btn btn-link link-to-tab" onClick={() => document.getElementById('link-address').click()}> shipping and billing addresses</span>, and <span className="btn btn-link link-to-tab" onClick={() => document.getElementById('link-account').click()}>edit your password and account
                                                details.</span>
                                        </p> */}

                                    <div className="mb-4"></div>

                                    <div className="row row-lg">
                                        <div className="col-6 col-md-4">
                                            <div className="feature-box text-center pb-4" onClick={() => document.getElementById('link-order').click()}>
                                                <span className="link-to-tab"><i
                                                    className="sicon-social-dropbox"></i></span>
                                                <div className="feature-box-content">
                                                    <h3>{t("account_orders")}</h3>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="col-6 col-md-4">
                                            <div className="feature-box text-center pb-4" onClick={() => {
                                                navigate("addresses")
                                            }}>
                                                <span className="link-to-tab"><i className="sicon-location-pin"></i></span>
                                                <div className="feature-box-content">
                                                    <h3>{t("account_shipping_addresses")}</h3>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-6 col-md-4">
                                            <div className="feature-box text-center pb-4" onClick={() => document.getElementById('link-account').click()}>
                                                <span className="link-to-tab"><i className="icon-user-2"></i></span>
                                                <div className="feature-box-content p-0">
                                                    <h3>{t("account_account_details")}</h3>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-6 col-md-4">
                                            <div className="feature-box text-center pb-4">
                                                <ALink href="/pages/wishlist"><i className="sicon-heart"></i></ALink>
                                                <div className="feature-box-content">
                                                    <h3>{t("account_wishlist")}</h3>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-6 col-md-4">
                                            <div className="feature-box text-center pb-4" onClick={handleLogout}>
                                                <ALink onClick={handleLogout}><i className="sicon-logout"></i></ALink>
                                                <div className="feature-box-content">
                                                    <h3>{t("account_logout")}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* </Tabs> */}
                </div>

                <div className="mb-5"></div>
            </main>
        </Page>
    )
}