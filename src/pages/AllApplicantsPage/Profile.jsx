import styles from "./Profile.module.css"
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {IoArrowBack} from "react-icons/io5"
import { FaStar } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";
import DashboardHeader from "../../components/Header/DashboardHeader";

import host from "../../../host";

const Profile = () => {
    const {index} = useParams();
    const [profile, setProfile] = useState({});
    const [job, setJob] = useState({});
    const TOKEN = localStorage.getItem("Recruiter_token");
    const jobId = localStorage.getItem('clickedJobId');
    useEffect(()=>{
        const headers = {   
            'Authorization': `Bearer ${TOKEN}`
        }
        const fetchApplicantProfile = async () => {
            await axios
              .get(`${host}/api/job-recruiter/applicants`, { headers })
              .then((response) => {
                setProfile(response.data.items.jobApplicants[index]);
              })
              .catch((err) => {
                if (
                  err.response.status == 500 &&
                  err.response.data.message == "jwt expired"
                ) {
                  localStorage.setItem("expired", true);
                  navigate("/");
                } else {
                  toast(`${err.response.data.message}`);
                }
              });
        }
        const fetchAppliedJob = async() => {
            const response = await axios.get(`${host}/api/job-recruiter/jobs`, {headers})
            const resJob = response.data.items?.jobs.find(job => job._id === jobId);
            console.log(resJob)
            setJob(resJob || {});
        }
        fetchApplicantProfile();
        fetchAppliedJob();
    }, [URL, TOKEN, index, jobId])

    return (
        <div className={styles.profile_container}>
            <DashboardHeader/>
            <div className={styles.profile_sub_container}>
                <div className={styles.top_container}>
                    <div className={styles.left_top_at}>
                        <Link to="/applicants" style={{color:"black"}}><IoArrowBack size={30}/></Link>
                        <h2>Applicant Details</h2>
                    </div>
                    <div className={styles.right_top_at}>
                        <select className={styles.action_dropdown} name="More Action" id="action">
                            <option>More Action</option>
                        </select>
                    </div>
                </div> 
                <div className={styles.bottom_container}>
                    <div className={styles.left_profile_section}>
                        <div className={styles.profile_header}>
                            <img src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg"/>
                            <div className={styles.right_profile_header}>
                                <h4>{profile?.name}</h4>
                                <p>{}</p>
                                <div>
                                    <FaStar color="orange"/>
                                    <p>{}</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.apply_content}>
                            <div className={styles.top_apply_content}>
                                <p>Applied Jobs</p>
                                <p>{} days ago</p>
                            </div>
                            <hr />
                            <div className={styles.bottom_apply_content}>
                                <h4>{job.titleOfJob}</h4>
                                <div>
                                    <p>{job.jobCategory}</p>·<p>{job.jobType}</p>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className={styles.contact_content}>
                            <h2>Contact</h2>
                            <div className={styles.contact_frame}>
                                <MdMailOutline color="#7C8493"/>
                                <div className={styles.contact_frame_2}>
                                    <p>Email</p>
                                    <p>{profile?.email}</p>
                                </div>
                            </div>
                            <div className={styles.contact_frame}>
                                <IoPhonePortraitOutline color="#7C8493"/>
                                <div className={styles.contact_frame_2}>
                                    <p>Phone</p>
                                    <p>{profile?.mobileNumber}</p>
                                </div>
                            </div>
                            <div className={styles.contact_frame}>
                                <FaInstagram color="#7C8493"/>
                                <div className={styles.contact_frame_2}>
                                    <p>Instagram</p>
                                    <p>{}</p>
                                </div>
                            </div>
                            <div className={styles.contact_frame}>
                                <FiTwitter color="#7C8493"/>
                                <div className={styles.contact_frame_2}>
                                    <p>Twitter</p>
                                    <p>{}</p>
                                </div>
                            </div>
                            <div className={styles.contact_frame}>
                            <TbWorld color="#7C8493"/>
                                <div className={styles.contact_frame_2}>
                                    <p>Website</p>
                                    <p>{}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.right_profile_section}>
                        <div className={styles.toggle_menu}>
                            <button>Applicant Profile</button>
                            <button>Resume</button>
                        </div>
                        <hr />
                        <div className={styles.profile_info_container}>
                            <h4>Personal Info</h4>
                            <div className={styles.profile_frame}>
                                <div className={styles.profile_sub_frame}>
                                    <p>Full Name</p>
                                    <p>{profile.name}</p>
                                </div>
                                <div className={styles.profile_sub_frame}>
                                    <p>Gender</p>
                                    <p>{}</p>
                                </div>
                            </div>
                            <div className={styles.profile_frame}>
                                <div className={styles.profile_sub_frame}>
                                    <p>Date of Birth</p>
                                    <p>{}</p>
                                </div>
                                <div className={styles.profile_sub_frame}>
                                    <p>Language</p>
                                    <p>{}</p>
                                </div>
                            </div>
                            <div className={styles.profile_sub_frame}>
                                <p>Address</p>
                                <p>{profile?.address}</p>
                            </div>
                        </div>
                        <hr />
                        <div className={styles.professional_container}>
                            <h4>Professional Info</h4>
                            <div className={styles.professional_sub_frame}>
                                <p>About Me</p>
                                <p>{}</p>
                            </div>
                            <div className={styles.professional_frame}>
                                <div className={styles.professional_content}>
                                    <p>Current Job</p>
                                    <p>{}</p>
                                </div>
                                <div className={styles.professional_content}>
                                    <p>Experience in Years</p>
                                    <p>{profile?.experience}</p>
                                </div>
                            </div>
                            <div className={styles.professional_frame}>
                                <div className={styles.professional_content}> 
                                    <p>Highest Qualification Held</p>
                                    <p>{profile?.education}</p>
                                </div>
                                <div className={styles.professional_content}>
                                    <p>Skill Set</p>
                                    <div className={styles.skill_set}>
                                        {profile?.skills?.map((skill, index) => (
                                            <p key={index}>{skill}</p>
                                        ))}        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;