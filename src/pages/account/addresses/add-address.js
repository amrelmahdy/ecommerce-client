import ALink from "../../../components/common/ALink";
import { Tabs, Tab, TabList, div } from 'react-tabs';
import StickyBox from 'react-sticky-box';
import Page from "../../../components/page";
import Cookies from 'universal-cookie';
import { useDispatch, useSelector } from "react-redux";
import { setUserUnAuthenticated } from "../../../store/auth/auth.slice";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { addShippingAddress, getCurrentLocation } from "../../../api/account";
import { useTranslation } from "react-i18next";
import Input from "../../../components/validation/input";
import validator from 'validator';
import { getUserInfo } from "../../../store/auth/auth.selectors";

export default function AddAddress() {
    const cookies = new Cookies();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { t } = useTranslation();
    const userInfo = useSelector(getUserInfo)
    const [validated, setValidated] = useState(false);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("SA");
    const [city, setCity] = useState("");
    const [building, setBuilding] = useState("");
    const [district, setDistrict] = useState("");
    const [street, setStreet] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [landmark, setLandmark] = useState("");
    const [addressDescription, setAddressDescription] = useState("");
    const [isDefault, setIsDefault] = useState(true);



    const handleOnSubmit = async (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
        setValidated(true);

        if (
            !validator.isEmpty(city)
            &&
            !validator.isEmpty(building)
            &&
            !validator.isEmpty(district)
            &&
            !validator.isEmpty(street)
            &&
            !validator.isEmpty(postalCode)
            &&
            !validator.isEmpty(landmark)
            &&
            !validator.isEmpty(addressDescription)
        ) {

            const address = {
                user: userInfo._id,
                name,
                phone,
                country,
                city,
                district,
                street,
                building,
                postal_code: postalCode,
                landmark,
                address_description: addressDescription,
                is_default: isDefault
            }
            try {
                await addShippingAddress(address);
                navigate("/account/addresses");
            } catch (err) {

            }
        }
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
                                    <li className="breadcrumb-item"><ALink href="/account/addresses">{t("account_shipping_addresses")}</ALink></li>
                                    <li className="breadcrumb-item active" aria-current="page">{t("account_shipping_address_add")}</li>
                                </ol>
                            </div>
                        </nav>
                        <h1>{t("account_shipping_address_add")}</h1>
                    </div>
                </div>

                <div className="container account-container custom-account-container">
                    <div className="row">
                        <div className="col-lg-3" />
                        <div className="col-lg-6 order-lg-last order-1 ">
                            <div className="tab-pane " id="address-panel">
                                <div className="address account-content hide-content  mt-0 pt-2">
                                    <form className="mb-2" noValidate onSubmit={handleOnSubmit} action="#">

                                        <div className="address-auto-complete">
                                            <p>{t("account_shipping_address_autocomplete")}</p>
                                            <ALink onClick={() => {
                                                navigator.geolocation.getCurrentPosition(async pos => {
                                                    const currrentAddress = await getCurrentLocation(pos.coords.latitude, pos.coords.longitude);
                                                    if (currrentAddress.address) {
                                                        setCity(currrentAddress.address.city)
                                                        setDistrict(currrentAddress.address.state + " / " + currrentAddress.address.neighbourhood)
                                                        setStreet(currrentAddress.address.road)
                                                        setAddressDescription(currrentAddress.display_name)
                                                        setBuilding(currrentAddress.address.house_number)

                                                    }
                                                })
                                            }}>{t("account_shipping_address_autocomplete_btn")}</ALink>
                                        </div>


                                        <Input
                                            validated={validated}
                                            value={name} setValue={e => setName(e.target.value)}
                                            validations={[validator.isEmpty]}
                                            label="account_address_name"
                                            placeholder="account_address_name"
                                        />

                                        <Input
                                            validated={validated}
                                            value={phone} setValue={e => setPhone(e.target.value)}
                                            validations={[validator.isEmpty]}
                                            label="account_address_phone"
                                            placeholder="account_address_phone"
                                        />

                                        <div className="select-custom">
                                            <label>{t("account_address_country")}<span className="required"> *</span></label>
                                            <select value={country} onChange={value => setCountry(value)} className="form-control">
                                                <option value="SA">{t("account_address_country_sa")}</option>
                                            </select>
                                        </div>



                                        <Input
                                            validated={validated}
                                            value={city} setValue={e => setCity(e.target.value)}
                                            validations={[validator.isEmpty]}
                                            label="account_address_city"
                                            placeholder="account_address_city"
                                        />

                                        <Input
                                            validated={validated}
                                            value={district} setValue={e => setDistrict(e.target.value)}
                                            validations={[validator.isEmpty]}
                                            placeholder="account_address_district"
                                            label="account_address_district"
                                        />

                                        <Input
                                            validated={validated}
                                            value={street} setValue={e => setStreet(e.target.value)}
                                            validations={[validator.isEmpty]}
                                            placeholder="account_address_street"
                                            label="account_address_street"
                                        />

                                        <Input
                                            validated={validated}
                                            value={building} setValue={e => setBuilding(e.target.value)}
                                            validations={[validator.isEmpty]}
                                            placeholder="account_address_building"
                                            label="account_address_building"
                                        />

                                        <Input
                                            validated={validated}
                                            value={postalCode} setValue={e => setPostalCode(e.target.value)}
                                            validations={[validator.isEmpty]}
                                            placeholder="account_address_postal"
                                            label="account_address_postal"
                                        />

                                        <Input
                                            validated={validated}
                                            value={landmark} setValue={e => setLandmark(e.target.value)}
                                            validations={[validator.isEmpty]}
                                            placeholder="account_address_landmark"
                                            label="account_address_landmark"
                                        />


                                        <div className="form-group">
                                            <label>{t("account_address_desc")}</label>
                                            <textarea cols="30" rows="1" onChange={e => setAddressDescription(e.target.value)} placeholder={t("account_address_desc")} value={addressDescription} id="contact-message" className="form-control"
                                                name="contact-message" required></textarea>
                                        </div>

                                        <div className="select-custom">
                                            <label>{t("account_address_country")}<span className="required"> *</span></label>
                                            <select value={isDefault} onChange={value => setIsDefault(value)} className="form-control">
                                                <option value={false}>{t("no")}</option>
                                                <option value={true}>{t("yes")}</option>
                                            </select>
                                        </div>


                                        <div className="form-footer mb-0">
                                            <div className="form-footer-right">
                                                <button type="submit" className="btn btn-dark py-4">
                                                    {t("account_address_save_address")}
                                                </button>
                                            </div>
                                        </div>
                                    </form>
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