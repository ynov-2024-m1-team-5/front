import bannerImg from "../../assets/images/hero.svg";
import "@/assets/styles/style.scss";
import styles from "./page.module.scss";

export default function RootLayout({ children }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.left__part}>
                <div className={styles.form__wrapper}>{children}</div>
            </div>
            <div className={styles.right__part}>
                <div className={styles.wrapper}>
                    <img src={bannerImg.src} alt="auth" />
                </div>
            </div>
        </div>
    );
}
