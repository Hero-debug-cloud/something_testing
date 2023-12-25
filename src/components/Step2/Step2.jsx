import React, { useEffect, useState } from 'react'

import "./Step2.css"

const Step2 = ({handleChange, dataTransfer}) => {
    const [step2Data, setStep2Data] = useState({
        jobDescription: "",
        responsibilities: "",
        whoYouAre: "",
        niceToHave: "",
      });
    
      const handleJobDescriptionChange = (e) => {
        setStep2Data((prevData) => ({
          ...prevData,
          jobDescription: e.target.value,
        }));
      };
    
      const handleResponsibilitiesChange = (e) => {
        setStep2Data((prevData) => ({
          ...prevData,
          responsibilities: e.target.value,
        }));
      };
    
      const handleWhoYouAreChange = (e) => {
        setStep2Data((prevData) => ({
          ...prevData,
          whoYouAre: e.target.value,
        }));
      };
    
      const handleNiceToHaveChange = (e) => {
        setStep2Data((prevData) => ({
          ...prevData,
          niceToHave: e.target.value,
        }));
      };

      // useEffect(() => {
      //   console.log(step2Data);
      // }, [step2Data]);
    
  return (
    <div className='Step2-container'>

        <div className='Step2-box'>
            <div className="Step2-box-details">
                <h3>Details</h3>
                <label >Add the description of the job, responsibilities , who you are, and nice-to-haves</label>
            </div>

            <div className="Step2-box-descriptions">
                <div className="Step2-box-descriptions-left">
                    <h3>Job Descriptions</h3>
                    <label >Job titles must be describe one position</label>
                </div>
                <div className="Step2-box-descriptions-right">
                <input
            placeholder="Enter job description"
            type="text"
            value={step2Data.jobDescription}
            onChange={handleJobDescriptionChange}
          />
                    <label>Maximum 500 characters</label>
                </div>
                
            </div>
            <div className="Step2-box-Responsibilities">
                <div className="Step2-box-Responsibilities-left">
                    <h3>Responsibilities</h3>
                    <label  >outline the core responsibilities of the position</label>
                </div>
                <div className="Step2-box-Responsibilities-right">
                <input
            placeholder="Enter job responsibilities"
            type="text"
            value={step2Data.responsibilities}
            onChange={handleResponsibilitiesChange}
          />
                    <label>Maximum 500 characters</label>
                </div>

            </div>
            <div className="Step2-box-who-you-are">
                    <div className="Step2-box-who-you-are-left">
                        <h3>Who you Are</h3>
                        <label  >Add your preferred candidates qualifications</label>
                    </div>
                    <div className="Step2-box-who-you-are-right">
                    <input
            placeholder="Enter qualifications"
            type="text"
            value={step2Data.whoYouAre}
            onChange={handleWhoYouAreChange}
          />
                        <label>Maximum 500 Characters</label>
                    </div>

            </div>
            <div className="Step2-box-Nice-to-have">
                    <div className="Step2-box-Nice-to-have-left">
                        <h3>Nice-To-Haves</h3>
                        <label className='Step2-box-Nice-to-have-left-label' >Add nice-to-have skills and qualificatinos for the role to encourage a more diverse set of candidates to apply</label>
                    </div>
                    <div className="Step2-box-Nice-to-have-right">
                    <input
            placeholder="Enter nice-to-have"
            type="text"
            value={step2Data.niceToHave}
            onChange={handleNiceToHaveChange}
          />
                        <label>Maximum 500 Characters</label>
                    </div>

            </div>
            <div className="step2-box-submit">
                <div className="step2-box-submit-button btn"  onClick={()=>{handleChange(2);dataTransfer(step2Data)}}>
                        <label >Next step</label>
                    </div>               
        </div>

        </div>

    </div>
  )
}

export default Step2