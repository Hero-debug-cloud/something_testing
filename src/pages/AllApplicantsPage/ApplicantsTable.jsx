import styles from "./ApplicantsTable.module.css"
import TopApplicationsTable from "../../components/AllApplicantsPage/TopApplicationsTable";
import { FiSearch } from "react-icons/fi";
import Filter from "../../components/AllApplicantsPage/Filter"
import TableFooter from "../../components/AllApplicantsPage/TableFooter"
import ApplicantsRow from "../../components/AllApplicantsPage/ApplicantsRow";
import DashboardHeader from '../../components/Header/DashboardHeader'

const ApplicantsTable = () => {
    return (
        <div className={styles.applicants_table_container}>
            <DashboardHeader/>
            <div className={styles.applicants_table_sub_container}>
                <TopApplicationsTable/>
                <div className={styles.applicants_heading}>
                    <p>Applicants</p>
                    <hr />
                </div>
                <div className={styles.applicants_content}>
                    <h4>Total Applicants : 19</h4>
                    <div className={styles.right_app_cont}>
                        <div className={styles.search_container}>
                            <div className={styles.search_icon}>
                                <FiSearch color="#ccc"/>
                            </div>
                            <input type="text" className={styles.search_box} placeholder="Search Applicants"/>
                        </div>
                        <Filter/>
                    </div>
                </div>
                <ApplicantsRow/>
                <TableFooter/>
            </div>
        </div>
    )
}

export default ApplicantsTable;