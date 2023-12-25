import styles from "./ApplicantsTable.module.css"
import TopApplicationsTable from "../../components/AllApplicantsPage/TopApplicationsTable";
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
                <ApplicantsRow/>
                {/* <TableFooter/> */}
            </div>
        </div>
    )
}

export default ApplicantsTable;