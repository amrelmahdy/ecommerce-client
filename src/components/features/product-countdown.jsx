import Countdown, { zeroPad } from 'react-countdown';
import { useTranslation } from 'react-i18next'

export default function ProductCountdown(props) {
    const { t, i18n } = useTranslation()
    const { date = "2021-08-20", type = '' } = props;

    const renderer = ({ days, hours, minutes, seconds }) => {
        return (
            type === "1" ?
                <div className="product-countdown-container rtl deal-countdown position-static">
                    <span className="product-countdown-title">{t("product_countdown_text")}</span>
                    <div className="product-countdown countdown-compact">
                        <span className="countdown-section days">
                            <span className="countdown-amount">{zeroPad(days)}</span>
                            <span className="countdown-period">DAYS</span>
                        </span>

                        <span className="countdown-section hours">
                            <span className="countdown-amount">{zeroPad(hours)}</span>
                            <span className="countdown-period">HOURS</span>
                        </span>

                        <span className="countdown-section minutes">
                            <span className="countdown-amount">{zeroPad(minutes)}</span>
                            <span className="countdown-period">MINUTES</span>
                        </span>
                        <span className="countdown-section seconds">
                            <span className="countdown-amount">{zeroPad(seconds)}</span>
                            <span className="countdown-period">SECONDS</span>
                        </span>
                    </div>
                </div>
                :
                <div className="product-countdown-container rtl">
                    <span className="product-countdown-title">{t("product_countdown_text")}</span>

                    <div className="product-countdown countdown-compact">
                        <span className="countdown-section days">
                            <span className="countdown-amount mr-1">{zeroPad(days)}</span>
                            <span className={i18n.language === 'ar' ? "countdown-period ml-1" : "countdown-period mr-1"}> {t("product_countdown_days")} </span>
                        </span>

                        <span className="countdown-section hours">
                            <span className="countdown-amount">{zeroPad(hours)}<span className="mr-1 ml-1">:</span></span>
                        </span>

                        <span className="countdown-section minutes">
                            <span className="countdown-amount">{zeroPad(minutes)}<span className="mr-1 ml-1">:</span></span>
                        </span>

                        <span className="countdown-section seconds">
                            <span className="countdown-amount">{zeroPad(seconds)}</span>
                        </span>
                    </div>
                </div>
        );
    };

    return (
        <Countdown
            date={new Date(date)}
            renderer={renderer} >
        </Countdown>
    );
}