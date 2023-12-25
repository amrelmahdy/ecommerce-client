import { connect } from 'react-redux';
// import { useRouter } from 'next/router';

// Import Actions
// import { actions as WishlistAction } from "../../store/wishlist";

// Import Custom Component
import ALink from "./ALink";
import CartMenu from "./partials/cart-menu";
import MainMenu from "./partials/main-menu";
import SearchForm from "./partials/search-form";
import i18n from './../../i18n';

function Header({ adClass = '', wishlist }) {
    function openMobileMenu(e) {
        e.preventDefault();
        document.querySelector("body").classList.toggle("mmenu-active");
        e.currentTarget.classList.toggle("active");
    }

    return (
        <header className={`header ${adClass}`}>
            <div className="header-top">
                <div className="container">
                    <div className="header-left d-none d-xl-block">
                        <div className="info-box info-box-icon-left p-0">
                            <i className="icon-shipping text-primary"></i>

                            <div className="info-box-content0">
                                <h4 className="mb-0">FREE Express Shipping On Orders $99+</h4>
                            </div>
                        </div>
                    </div>

                    <div className="header-right header-dropdowns">
                        <div className="header-dropdown font2">
                            <ALink href="#">USD</ALink>
                            <div className="header-menu">
                                <ul>
                                    <li><ALink href="#">EUR</ALink></li>
                                    <li><ALink href="#">USD</ALink></li>
                                </ul>
                            </div>
                        </div>

                        <div className="header-dropdown mr-4 pl-2 font2">
                            <ALink href="#"><i className="flag-sa flag"></i>العربية</ALink>
                            <div className="header-menu">
                                <ul>
                                    <li> <ALink to="#" onClick={() => i18n.changeLanguage('ar')}><i className="flag-sa flag"></i>العربية</ALink>
                                    </li>
                                    <li><ALink to="#" onClick={() => i18n.changeLanguage('en')}><i className="flag-us flag"></i>ENG</ALink></li>
                                </ul>
                            </div>
                        </div>

                        <div className="separator d-none d-xl-inline"></div>

                        <div className="header-dropdown dropdown-expanded d-none d-lg-block ml-auto ml-xl-0">
                            <ALink href="#">Links</ALink>
                            <div className="header-menu">
                                <ul>
                                    <li>
                                        <ALink href="#">
                                            <i className="icon-pin"></i>
                                            Our Stores
                                        </ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">
                                            <i className="icon-shipping-truck"></i>
                                            Track Your Order
                                        </ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">
                                            <i className="icon-help-circle"></i>
                                            Help
                                        </ALink>
                                    </li>
                                    <li>
                                        <ALink href="/pages/wishlist">
                                            <i className="icon-wishlist-2"></i>
                                            Wishlist
                                        </ALink>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <span className="separator d-none d-xl-inline"></span>

                        <div className="social-icons">
                            <ALink href="#" className="social-icon social-instagram icon-instagram"></ALink>
                            <ALink href="#" className="social-icon social-twitter icon-twitter"></ALink>
                            <ALink href="#" className="social-icon social-facebook icon-facebook"></ALink>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header-middle sticky-header mobile-sticky">
                <div className="container">
                    <div className="header-left w-lg-max">
                        <button className="mobile-menu-toggler mr-2" type="button" onClick={openMobileMenu}>
                            <i className="fa fa-bars"></i>
                        </button>

                        <ALink href="/" className="logo block">
                            {/* <img src="/images/logo-black.png" className="w-100" width="111" height="44" alt="Porto Logo" /> */}
                            <img src="/images/logo.png" className="w-100" width="111" height="44" alt="Porto Logo" />
                        </ALink>

                        <SearchForm />
                    </div>

                    <div className="header-right">
                        <ALink href="/pages/wishlist" className="header-icon position-relative d-lg-none mr-2" title="wishlist">
                            <i className="icon-wishlist-2"></i>
                            <span className="badge-circle">{5}</span>
                        </ALink>

                        <div className="header-user d-lg-flex align-items-center">
                            <ALink href="/pages/login" className="header-icon mr-0" title="login">
                                <i className="icon-user-2 mr-2"></i>
                            </ALink>

                            <h6 className="font1 d-none d-xl-block mb-0">
                                <span className="d-block text-body">Welcome</span>
                                <ALink href="/pages/login" className="font-weight-bold">Sign In / Register</ALink>
                            </h6>
                        </div>

                        <CartMenu />
                    </div>
                </div>
            </div>

            {/* <div className={ `header-bottom sticky-header desktop-sticky d-none d-lg-flex ${useRouter().pathname !== '/' ? 'border-bottom' : ''}` }> */}
            <div className={`header-bottom sticky-header desktop-sticky d-none d-lg-flex ${1 == 5 !== '/' ? 'border-bottom' : ''}`}>

                <div className="container">
                    <div className="header-center w-100 ml-0">
                        <MainMenu />

                        <div className="info-boxes font2 align-items-center ml-auto">
                            <div className="info-item">
                                <ALink href="#"><i className="icon-percent-shape"></i>Special Offers</ALink>
                            </div>
                            <div className="info-item">
                                <ALink href="#"><i className="icon-business-book"></i>Recipes</ALink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header >
    )
}

const mapStateToProps = (state) => {
    return {
        wishlist: state.wishlist.list ? state.wishlist.list : []
    }
}

export default Header;