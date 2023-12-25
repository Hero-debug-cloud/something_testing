import styles from "./TopApplicationsTable.module.css"
import { IoArrowBack } from "react-icons/io5";
import { LuDot } from "react-icons/lu";
import { Link } from "react-router-dom";

const TopApplicationsTable = () => {
    return(
        <div className={styles.top_container}>
            <div className={styles.left_top_at}>
                <div className={styles.back_arrow}>
                    <Link to="/all" style={{color:"black"}}><IoArrowBack size={32}/></Link>
                </div>
                <div className={styles.job_role_cont}>
                    <h2>Social Media Assistant</h2>
                    <div>
                        <p>Design</p> 
                        <LuDot/>
                        <p>Full-Time</p>
                        <LuDot/>
                        <p>4 / 11 Hired</p>
                   </div>
                </div>
            </div>
            <div className={styles.right_top_at}>
                <select className={styles.action_dropdown} name="More Action" id="action">
                    <option>More Action</option>
                </select>
            </div>
        </div>
    )
}

export default TopApplicationsTable;