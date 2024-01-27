import ALink from "../../../components/common/ALink";
import { Tabs, Tab, TabList, div } from 'react-tabs';
import StickyBox from 'react-sticky-box';
import Page from "../../../components/page";
import Cookies from 'universal-cookie';
import { useDispatch, useSelector } from "react-redux";
import { setUserUnAuthenticated } from "../../../store/auth/auth.slice";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCurrentLocation, setDefaultAddress } from "../../../api/account";
import { useTranslation } from "react-i18next";
import { fetchCurrentUserDetails } from "../../../store/auth/auth.actions";
import { getIsFetchingUserInfo, getUserInfo } from "../../../store/auth/auth.selectors";
import { toggleLoading } from "../../../store/app/app.slice";

export default function Addresses() {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const userInfo = useSelector(getUserInfo);
    const isFetchingUserInfo = useSelector(getIsFetchingUserInfo)
    const cookies = new Cookies();

    useEffect(() => {
        dispatch(fetchCurrentUserDetails())
        dispatch(toggleLoading(false));

    }, [])

    const handleOnSetDefaultAddressClick = async (e, addressId) => {
        e.preventDefault();
        dispatch(toggleLoading(true));
        setDefaultAddress(addressId).then(res => {
            dispatch(fetchCurrentUserDetails())
        })
        dispatch(toggleLoading(false));
    }

    const handleOnRemoveAddressClick = async (e) => {
        e.preventDefault();
    }


    const handleOnEditAddressClick = async (e) => {
        e.preventDefault();
    }
    return (
        <Page>
            <main className="main">
                <div className="page-header">
                    <div className="container d-flex flex-column align-items-center">
                        <nav aria-label="breadcrumb" className="breadcrumb-nav">
                            <div className="container">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><ALink href="/account">{t("account")}</ALink></li>
                                    <li className="breadcrumb-item active" aria-current="page">{t("account_shipping_addresses")}</li>
                                </ol>
                            </div>
                        </nav>

                        <h1>{t("account_shipping_addresses")}</h1>
                    </div>
                </div>


                <div className="container account-container custom-account-container dashboard-content">
                    <div className="row">
                        <div className="col-lg-2" />
                        <div className="col-lg-8">
                            <container>
                                <div className="row row-lg">
                                    <div className="col-lg-4">
                                        <div className="feature-box address-box box-add text-center pb-4" onClick={() => {
                                            navigate("add")
                                        }}>
                                            <div className="feature-box-content">
                                                <i className="fa fa-plus align-middle mr-3"></i>
                                                <div className="addresses-content">
                                                    <div className="address text-center">
                                                        <span className="btn btn-default address-action link-to-tab" >{t("account_shipping_address_add")}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        userInfo?.addresses.map((address, index) => {
                                            return <div className="col-lg-4">
                                                <div className="feature-box address-box text-center pb-4">
                                                    <div className="feature-box-content">
                                                        <h5>{address.name}</h5>
                                                        <p>{address.district}</p>
                                                        <p>{`${address.building}`}</p>
                                                        <p>{address.street}</p>
                                                        <p>{address.phone}</p>
                                                        <p>{`${address.city} / ${address.country}`}</p>
                                                        <div className="action">
                                                            <ALink>
                                                                <span>Edit</span>
                                                            </ALink>
                                                            <ALink>
                                                                <span>Remove</span>
                                                            </ALink>
                                                            {!address.is_default && <ALink onClick={(e) => handleOnSetDefaultAddressClick(e, address.id)}>
                                                                <span>Set ad default</span>
                                                            </ALink>}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        })}
                                </div>
                            </container>
                        </div>
                    </div>
                </div>

                <div className="mb-5"></div>
            </main>
        </Page>
    )
}