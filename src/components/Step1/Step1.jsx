import React, { useEffect, useState } from "react";
import "./Step1.css";
import { MdOutlineCurrencyRupee } from "react-icons/md";
const Step1 = ({ handleChange , dataTransfer }) => {
  const [Step1_data, setStep1_data] = useState({
    jobTitle: "",
    type_of_employment: [],
    salary: { start: "", end: "" },
    categories: "",
    required_skills: "",
  });

  const type_of_employment_data = [
    "full-time",
    "Part-time",
    "Remote",
    "Internship",
    "Contract",
  ];

  const handleJobTitleChange = (e) => {
    setStep1_data((prevData) => ({
      ...prevData,
      jobTitle: e.target.value,
    }));
  };

  const handleTypeOfEmploymentChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setStep1_data((prevData) => {
      if (isChecked) {
        // Add the value to the array if checkbox is checked
        return {
          ...prevData,
          type_of_employment: [...prevData.type_of_employment, value],
        };
      } else {
        // Remove the value from the array if checkbox is unchecked
        const updatedEmploymentTypes = prevData.type_of_employment.filter(
          (type) => type !== value
        );
        return {
          ...prevData,
          type_of_employment: updatedEmploymentTypes,
        };
      }
    });
  };

  const handleSalaryChange = (field, e) => {
    const value = e.target.value;
    setStep1_data((prevData) => ({
      ...prevData,
      salary: { ...prevData.salary, [field]: value },
    }));
  };

  const handleCategoriesChange = (e) => {
    const value = e.target.value;
    setStep1_data((prevData) => ({
      ...prevData,
      categories: value,
    }));
  };

  const handleRequiredSkillsChange = (e) => {
    const value = e.target.value;
    setStep1_data((prevData) => ({
      ...prevData,
      required_skills: value,
    }));
  };

  // useEffect(() => {
  //   console.log(Step1_data);
  // }, [Step1_data]);

  return (
    <div className="step1-container">
      <div className="step1-box">
        <div className="BasicInformation">
          <div className="step1-box-BasicInformation-left  ">
            <h3 className="body-large body-large-semi-bold">
              Basic Information
            </h3>
            <label className="BasicInformation-label body-large body-large-regular ">
              This information will be displayed publicly
            </label>
          </div>
        </div>
        <div className="step1-box-jobTitle">
          <div className="step1-box-jobTitle-left">
            <h3 className="body-large body-large-semi-bold">Job title</h3>
            <label className="body-large body-large-regular">
              Job titles must be describe one position
            </label>
          </div>
          <div className="step1-box-jobTitle-right">
            <input
              className="body-large body-large-regular"
              type="text"
              placeholder="e.g software Engineer"
              value={Step1_data.jobTitle}
              onChange={handleJobTitleChange}
            />
            <label className="step1-box-jobTitle-right-label body-large body-large-regular">
              At least 80 characters
            </label>
          </div>
        </div>
        <div className="step1-box-type-of-employment">
          <div className="step1-box-type-of-employment-left ">
            <h3 className="body-large body-large-semi-bold">
              Type of employment
            </h3>
            <label className="body-large body-large-regular">
              You can select multiple type of employment
            </label>
          </div>
          <div className="step1-box-type-of-employment-right">
            {type_of_employment_data.map((value, index) => {
              return (
                <div>
               <input
              type="checkbox"
              value={value}
              checked={Step1_data.type_of_employment.includes(value)}
              onChange={handleTypeOfEmploymentChange}
            />
                  <label className="body-large body-large-regular">
                    {" "}
                    {value}{" "}
                  </label>
                </div>
              );
            })}
          </div>
        </div>

        <div className="step1-box-salary">
          <div className="step1-box-salary-left">
            <h3 className="body-large body-large-semi-bold">Salary </h3>
            <label className="body-large body-large-regular">
              Please spicify the estimade salary range for the role "You can
              leave this blank
            </label>
          </div>
          <div className="step1-box-salary-right">
            <div className="step1-box-salary-right-input">
              <div className="rupee-container">
                <MdOutlineCurrencyRupee className="rupee-sign" />

                <input
                  type="number"
                  value={Step1_data.salary.start}
                  onChange={(e) => handleSalaryChange("start", e)}
                />
              </div>
              <label>to</label>
              <div className="rupee-container">
                <MdOutlineCurrencyRupee className="rupee-sign" />

                <input
                  type="number"
                  value={Step1_data.salary.end}
                  onChange={(e) => handleSalaryChange("end", e)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="step1-box-Categories">
          <div className="step1-box-Categories-left">
            <h3 className="body-large body-large-semi-bold"> Categories</h3>
            <label className="body-large body-large-regular">
              You can select multiple job categories
            </label>
          </div>
          <div className="step1-box-Categories-right">
            <h3 className="body-large body-large-regular">
              Select Job Categories
            </h3>
            <select
              onChange={handleCategoriesChange}
              className="step1-box-Categories-right-drop-down  "
              name=""
              id=""
            >
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="remote">Remote</option>
              <option value="internship">Internship</option>
              <option value="contract">Contract</option>
            </select>
          </div>
        </div>
        <div className="step1-box-Required-skills">
          <div className="step1-box-Required-skills-left">
            <h3 className="body-large body-large-semi-bold">Required Skills</h3>
            <label className="body-large body-large-regular">
              Add required skills for the job
            </label>
          </div>
          <div className="step1-box-Required-skills-right">
            <input
              type="text"
              value={Step1_data.required_skills}
              onChange={handleRequiredSkillsChange}
            />
          </div>
        </div>
        <div className="step1-box-submit">
          <div
            className="step1-box-submit-button btn"
            onClick={() => {handleChange(1);
            
            dataTransfer(Step1_data)
            }}
          >
            <label>Next step</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;
