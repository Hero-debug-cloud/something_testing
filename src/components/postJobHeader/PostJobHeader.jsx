import { useEffect, useState } from "react";
import "./PostJobHeader.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { PiHandbagFill } from "react-icons/pi";
import { FaClipboard } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import axios from "axios";
import DashboardHeader from '../Header/DashboardHeader'
import Step1 from "../Step1/Step1";
import Step2 from "../Step2/Step2";
import Step4 from "../Step4/Step4";
import Step3 from "../Step3/Step3";

import host from "../../../host";

import BothModal from "../BothModal";
const PostJobHeader = () => {

  const [logincheck,setLoginCheck]=useState(false);

  //gobal data;
  const [full_data, setFull_Data] = useState({});
  // const URL = import.meta.env.VITE_BASE_URL;
  const TOKEN = localStorage.getItem("Recruiter_token");

  const incomingStep1 = (data) => {
    setFull_Data({
      ...full_data,
      ...data}
    );
  };
  const incomingStep2 = (data) => {
    // const updated={...full_data};
    setFull_Data({
      ...full_data,
      ...data}
    );
  };
  const incomingStep4 = (data) => {
    setFull_Data({
      ...full_data,
      ...data}
    );
    console.log(full_data);
    ///api call here;
    axios.post(`${host}/api/job`, full_data, {
      headers: {
        'Authorization': `Bearer ${TOKEN}`
      },
    })
      .then(response => {
        // Handle the successful response here
        console.log('Response:', response.data);
      })
      .catch(error => {
        // Handle the error here
        console.error('Error:', error.message);
      });
  };
useEffect(()=>{
  if(localStorage.getItem("Recruiter_token")==null || localStorage.getItem("expired")==true) setLoginCheck(true);
},[]);

  const [selected, setselected] = useState(0);
  const data = [
    {
      icon: (
        <PiHandbagFill size={20} color={selected >= 0 ? "white" : "#7C8493"} />
      ),
      name: "Job Information",
    },
    {
      icon: (
        <FaClipboard size={20} color={selected >= 1 ? "white" : "#7C8493"} />
      ),
      name: "Job Description",
    },
    {
      icon: <FaGift size={20} color={selected >= 2 ? "white" : "#7C8493"} />,
      name: "Perks and benefit",
    },
  ];

  const handleBack = ()=>{
   if(selected == 0){
    return;
   }
   setselected(selected-1);

  }

  return (
    <>
      <div className="PostJobHeader">
        <DashboardHeader />
        <BothModal open={logincheck} text="Continue To Your Recruiter Account " done={()=>{}}/>
        <div className="PostJobHeader-2">
          <div className="PostJobHeader-2-upper">
            {/* <FaArrowLeftLong onClick={handleBack} size={30} /> */}
            <label className="PostJobHeader-2-upper-label">Post a Job</label>
          </div>
          <div className="PostJobHeader-2-bottom">
            <div className="PostJobHeader-2-stepbox">
              {data.map((value, index) => {
                return (
                  <div key={index} className="PostJobHeader-2-stepbox-1">
                    <div
                      className={
                        "imageHolder " +
                        (selected >= index ? "imageHolder-active" : "")
                      }
                    >
                      <div className="PostJobHeader-2-stepbox-1-image">
                        {value.icon}
                      </div>
                    </div>
                    <div className="PostJobHeader-2-stepbox-1-right">
                      <label className="PostJobHeader-2-stepbox-1-right-upper-label">
                        Step {index + 1}/3
                      </label>

                      <label className="PostJobHeader-2-stepbox-1-right-bottom-label">
                        {value.name}
                      </label>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {selected == 0 ? (
            <Step1
              handleChange={(index) => setselected(index)}
              dataTransfer={(data) => incomingStep1(data)}
            />
          ) : selected == 1 ? (
            <Step2
              handleChange={(index) => setselected(index)}
              dataTransfer={(data) => incomingStep2(data)}
            />
          ) : selected == 2 ? (
            <Step3 handleChange={(index) => setselected(index)} />
          ) : (
            <Step4 dataTransfer={(data) => incomingStep4(data)} />
          )}
        </div>
      </div>
    </>
  );
};

export default PostJobHeader;
