import styles from "./TopApplicationsTable.module.css"
import { IoArrowBack } from "react-icons/io5";
import { LuDot } from "react-icons/lu";
import { Link } from "react-router-dom";
import axios from "axios";
import host from "../../../host";
import { useStatStyles } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const TopApplicationsTable = () => {
    const [job, setJob] = useState({});
    const TOKEN = localStorage.getItem('Recruiter_token');
    const jobId = localStorage.getItem('clickedJobId');
    useEffect(() => {
        const headers = {   
            'Authorization': `Bearer ${TOKEN}`
        }
        const fetchJobs =  async () => {
            const response = await axios.get(`${host}/api/job-recruiter/jobs`, {headers})
            const resJob = response.data.items?.jobs.find(job => job._id === jobId);
            setJob(resJob || {});
        }
        fetchJobs();
    }, [TOKEN, jobId])
    return(
        <div className={styles.top_container}>
            <div className={styles.left_top_at}>
                <div className={styles.back_arrow}>
                    <Link to="/all" style={{color:"black"}}><IoArrowBack size={32}/></Link>
                </div>
                <div className={styles.job_role_cont}>
                    <h2>{job.titleOfJob}</h2>
                    <div>
                        <p>{job.jobCategory}</p> 
                        <LuDot/>
                        <p>{job.jobType}</p>
                        <LuDot/>
                        <p>{}</p>
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