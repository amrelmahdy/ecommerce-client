import { useTranslation } from "react-i18next";
import ALink from "../../components/common/ALink";
import Page from "../../components/page";
import { useEffect, useState } from "react";
import { login } from "../../api/auth";
import Cookies from 'universal-cookie';
import { setUserAuthenticated } from "../../store/auth/auth.slice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useNavigation } from "react-router-dom";
import { getIsAuthenticated } from "../../store/auth/auth.selectors";


export default function Login() {
    const isAuthenticated = useSelector(getIsAuthenticated)
    const cookies = new Cookies();
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [error, setError] = useState(null)

    const { t } = useTranslation()

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [validated, setValidated] = useState(false);




    useEffect(() => {

        if (isAuthenticated) navigate("/")
        //   const token =  cookies.get("access_token")
        //   const referesh =  cookies.get("access_token")

        //   console.log(token)

        //cookies.remove('access_token')
    }, [])

    const handleOnChangeUsername = (e) => {
        setError(null)
        setUsername(e.target.value)
    }



    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }


    function validatePassword(password) {
        return password.length >= 6;
    }

    const handleOnChangePassword = (e) => {
        setError(null)
        setPassword(e.target.value)
    }


    const handleLogin = async (e) => {
        e.preventDefault();
        setValidated(true)
        try {
            if (validateEmail(username) && validatePassword(password)) {
                setError(null)
                const res = await login(username, password);
                if (res) {
                    const { access_token, refresh_token, expires_in, expires_at, refresh_expires_at, refresh_expires_in, userInfo } = res;
                    cookies.set('access_token', access_token);
                    cookies.set('refresh_token', refresh_token);
                    cookies.set('expires_in', expires_in);
                    cookies.set('expires_at', expires_at);
                    cookies.set('refresh_expires_in', refresh_expires_in);
                    cookies.set('refresh_expires_at', refresh_expires_at);
                    dispatch(setUserAuthenticated(userInfo))
                    navigate("/")
                    // cookies.set('access_token', access_token, {
                    //     path: '/',
                    //     httpOnly: true,
                    //     secure: true // Set to true if using HTTPS
                    // });
                }
            }
        } catch (error) {
            if(!error.response){
                setError("Whoops something went wrong")
            } else {
                setError("Unable to authenticate user")
            }
            console.log("login error: => ", error.response)
        }
    }


    return (
        <Page>

            <main className="main">
                <div className="page-header">
                    <div className="container d-flex flex-column align-items-center">
                        {/* <nav aria-label="breadcrumb" className="breadcrumb-nav">
                            <div className="container">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><ALink href="/">Home</ALink></li>
                                    <li className="breadcrumb-item"><ALink href="/shop">Shop</ALink></li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        My Account
                                    </li>
                                </ol>
                            </div>
                        </nav> */}

                        <h1>{t("login")}</h1>
                    </div>
                </div>

                {
                    error && <div className="container text-center">
                        <div className="error-alert">
                            <p>{error}</p>
                        </div>
                    </div>
                }

                <div className="container login-container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="row">
                                <div className="col-md-3"></div>
                                <div className="col-md-6">
                                    {/* <div className="heading mb-1">
                                        <h2 className="title">Login</h2>
                                    </div> */}

                                    <form
                                        noValidate
                                        method="post"
                                        enctype="multipart/form-data"
                                        action="#"
                                    >
                                        <label htmlFor="login-email">
                                            {t("username")} <span className="required">*</span>
                                        </label>
                                        <input type="email" className="form-input form-wide" value={username} onChange={handleOnChangeUsername} id="login-email" required />
                                        <span className="helper-text" style={{ visibility: (!validated && username == "") || validateEmail(username) ? 'hidden' : 'visible' }}>البريد الإلكتروني مطلوب</span>
                                        <label htmlFor="login-password">
                                            {t("password")} <span className="required">*</span>
                                        </label>
                                        <input type="password" className="form-input form-wide" value={password} onChange={handleOnChangePassword} id="login-password" required />
                                        <span className="helper-text" style={{ visibility: (!validated && password == "") || validatePassword(password) ? 'hidden' : 'visible' }}>البريد الإلكتروني مطلوب</span>
                                        <div className="form-footer">
                                            {/* <div className="custom-control custom-checkbox mb-0">
                                                <input type="checkbox" className="custom-control-input" id="lost-password" />
                                                <label className="custom-control-label mb-0" htmlFor="lost-password">Remember
                                                    me</label>
                                            </div> */}
                                            <ALink href="/pages/forgot-password"
                                                className="forget-password text-dark ">{t("register")}</ALink>

                                            <ALink href="/pages/forgot-password"
                                                className="forget-password text-dark form-footer-right">{t("forget_password")}</ALink>
                                        </div>
                                        <button type="submit" disabled={
                                            !validateEmail(username) || !validatePassword(password)
                                        } onClick={(e) => handleLogin(e)} className="btn btn-dark btn-md w-100">
                                            {t("login")}
                                        </button>
                                    </form>
                                </div>
                                <div className="col-md-3"></div>
                                {/* <div className="col-md-6">
                                    <div className="heading mb-1">
                                        <h2 className="title">Register</h2>
                                    </div>

                                    <form action="#">
                                        <label htmlFor="register-email">
                                            Email address <span className="required">*</span>
                                        </label>
                                        <input type="email" className="form-input form-wide" id="register-email" required />

                                        <label htmlFor="register-password">
                                            Password <span className="required">*</span>
                                        </label>
                                        <input type="password" className="form-input form-wide" id="register-password"
                                            required />

                                        <div className="form-footer mb-2">
                                            <button type="submit" className="btn btn-dark btn-md w-100 mr-0">
                                                Register
                                            </button>
                                        </div>
                                    </form>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Page>
    )
}