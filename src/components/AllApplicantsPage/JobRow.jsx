import styles from "./JobRow.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdMoreHoriz } from "react-icons/md";
import axios from "axios";

import host from "../../../host";

const JobRow = () => {
    const [jobs, setJobs] = useState([]);
    // const URL = import.meta.env.VITE_BASE_URL;
    const TOKEN = localStorage.getItem("Recruiter_token");
    useEffect(() => {
        const headers = {   
            'Authorization': `Bearer ${TOKEN}`
        }
        const fetchJobs =  async () => {
            const response = await axios.get(`${host}/api/job-recruiter/jobs`, {headers})
            setJobs(response.data.items?.jobs);
        }
        fetchJobs();
    },[TOKEN])

    const handleClick = (jobId) => {
        localStorage.setItem('clickedJobId', jobId);
    }

    return(
        <div className={styles.table_container}>
            <table className={styles.table}> 
            <thead className={styles.table_header}>
              <tr>
                  <th>Roles</th>
                  <th>Status</th>
                  <th>Date Posted</th>
                  <th>Due Date</th>
                  <th>Job Type</th>
                  <th>Applicants</th>
                  <th>Needs</th>
                  <th></th>
              </tr>
            </thead>
            <tbody className={styles.table_body}>  
                {jobs?.map((job, index) => (
                    <Link className={styles.link} to="/applicants" onClick={()=> handleClick(job._id)} key={index}>
                    <tr style={index%2==0? {}: {backgroundColor:'#F8F8F8'}} className={styles.row_hover}>
                        <td>{job.titleOfJob}</td>
                        <td className={job.status=='Live'? styles.live_status : styles.closed_status}>{job.status}</td>
                        <td>{job.createdAt.substring(0,10)}</td>
                        <td>{job.endDate.substring(0,10)}</td>
                        <td className={job.jobType=='Fulltime'? styles.fulltime : styles.freelance}>{job.jobType}</td>
                        <td>{job.applicants}</td>
                        <td>{job.needs}</td>
                        <td><MdMoreHoriz/></td>
                    </tr>
                    </Link>
                ))}
            </tbody>
          </table>
        </div>
    )
}

export default JobRow;