import "@/assets/styles/style.scss";
import { DM_Serif_Display, Work_Sans } from "next/font/google";
import styles from "./index.module.scss";
import Sidebar from "../../components/UI/Sidebar/index.js";
import Headash from "../../components/UI/Headash/index.js";

const dm_serif_display = DM_Serif_Display({
    subsets: ["latin"],
    weight: ["400"],
});

const work_sans = Work_Sans({
    subsets: ["latin"],
    weight: ["400", "700", "600", "900"],
});

export default function DashboardLayout({ children }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.menu}>
                <Sidebar />
            </div>
            <div className={styles.content}>
                <div className={styles.right_item_1}>
                    <h1 className={styles.title_admin}>Hello Admin👌</h1>
                    <button className={styles.button}>Add product</button>
                </div>
                <div className={styles.right_item_2}>
                    <Headash />
                </div>
                {children}
            </div>
        </div>
    );
}
