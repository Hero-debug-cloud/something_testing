import styles from "./ApplicantsRow.module.css"
import { useEffect, useState } from "react"
import { RxCaretSort } from "react-icons/rx";
import { MdMoreHoriz } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import host from "../../../host";
import { toast } from "react-toastify";

const ApplicantsRow = () => {
    const [applicants, setApplicants] = useState([]);
    const navigate=useNavigate();
    // const URL = import.meta.env.VITE_BASE_URL;
    const TOKEN = localStorage.getItem("Recruiter_token");
    useEffect(()=>{
        const headers = {   
            'Authorization': `Bearer ${TOKEN}`
        }
        const fetchApplicants = async () => {
            await axios
              .get(`${host}/api/job-recruiter/applicants`, { headers })
              .then((response) => {
                setApplicants(response.data.items.jobApplicants);
              })
              .catch((err) => {
                if (
                  err.response.status == 500 &&
                  err.response.data.message == "jwt expired"
                ) {
                    localStorage.setItem("expired",true);
                  navigate("/");
                }
                else{
                    toast(`${err.response.data.message}`)
                }
              });
            
            // setApplicants(response.data.items.jobApplicants.slice(0,10));
        }
        fetchApplicants();
    }, [URL, TOKEN])

    return (
        <div className={styles.table_container}>
            <table className={styles.table}>
                <thead className={styles.table_header}>
                    <tr>
                        <th><input className={styles.checkbox} type="checkbox"></input></th>
                        <th>Full Name <RxCaretSort/></th>
                        <th>Hiring Stage <RxCaretSort/></th>
                        <th>Applied Date <RxCaretSort/></th>
                        <th>Action <RxCaretSort/></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className={styles.table_body}>
                    {applicants.map((applicant, index) => (
                        <tr style={index%2==0?{backgroundColor: '#F8F8FD'} : {}} key={index}>
                            <td><input className={styles.checkbox} type="checkbox"></input></td>
                            <td>
                                <img className={styles.applicant_image}src={applicant.imag} alt="img" />
                                {applicant.name}
                            </td>
                            <td className={applicant.hiringStage=='Contacted'? styles.contacted : styles.declined}>{applicant.hiringStage}</td>
                            <td>{applicant.createdAt.substring(0,10)}</td>
                            <td><Link to={`/applicants/${index}`}><button className={styles.application_button}>See Application</button></Link></td>
                            <td><MdMoreHoriz/></td>
                        </tr>   
                    ))} 
                </tbody>
            </table>
        </div>
    )
}

export default ApplicantsRow;