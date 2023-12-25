import styles from "./TableFooter.module.css"
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { useState } from "react";
const TableFooter = () => {
    const [selectedValue, setSelectedValue] = useState('1');
    const handleDropdownChange = (event) => {
        setSelectedValue(event.target.value);
      };
    return (
        <div className={styles.table_footer_container}>
            <div className={styles.left_table_foot}> 
                <p>View</p>
                <select id="dropdown" value={selectedValue} onChange={handleDropdownChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <p>Applicants per page</p>
            </div>
            <div className={styles.right_table_foot}>
                <FaChevronLeft className={styles.foot_grid}/>
                <p className={styles.foot_grid}>1</p>
                <p className={styles.foot_grid}>2</p>
                <FaChevronRight className={styles.foot_grid}/>
            </div>
        </div>
    )
}

export default TableFooter;