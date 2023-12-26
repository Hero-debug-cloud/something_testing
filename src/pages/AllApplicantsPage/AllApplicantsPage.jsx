import styles from "./AllApplicantsPage.module.css"
import Filter from "../../components/AllApplicantsPage/Filter";
import { FaCalendarDay } from "react-icons/fa6";
import TableFooter from "../../components/AllApplicantsPage/TableFooter";
import JobRow from "../../components/AllApplicantsPage/JobRow";
import DashboardHeader from '../../components/Header/DashboardHeader'

const AllApplicantsPage = () => {
  return (
    <div className={styles.job_listing_container}>
      <DashboardHeader/>
      <div className={styles.job_listing_sub_container}>
        <div className={styles.top_container}>
          <div className={styles.heading_container}>
            <h2>Job Listing</h2>
            <p>Here is your jobs listing status from .</p>
          </div>
          <div className={styles.date_container}>
            <p></p>
            <FaCalendarDay color="#4640DE"/>
          </div>
        </div>
        <div className={styles.body_container}>
          <div className={styles.head_table}>
            <p>Job List</p>
            <Filter/>
          </div>
          <div className={styles.table_container}>
            <JobRow/>
          </div>
          {/* <div className={styles.foot_table}>
            <TableFooter/>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default AllApplicantsPage