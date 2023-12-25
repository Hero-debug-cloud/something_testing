import React, { useEffect, useState } from "react";
import "./Step4.css";
const Step3 = ({dataTransfer}) => {
  const [companyDetails, setCompanyDetails] = useState({
    companyName: "",
    website: "",
    location: "",
    employeeCount: 0,
    industry: "",
    dateFounded: "",
    techStack: "",
  });

  const [aboutCompany, setAboutCompany] = useState({
    description: "",
  });

  const handleCompanyDetailsChange = (field, value) => {
    setCompanyDetails((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };

  const handleAboutCompanyChange = (field, value) => {
    setAboutCompany((prevAbout) => ({
      ...prevAbout,
      [field]: value,
    }));
  };

  const saveChanges = () => {
    // Perform actions to save changes, e.g., send to server
    console.log("Saving changes:", companyDetails, aboutCompany);
  };

  // useEffect(() => {
  //   console.log(companyDetails);
  // }, [companyDetails]);
  return (
    <div className="Step3-container">
      <div className="Step3-box">
        <div className="Step3-box-basic-information">
          <h3>Basic Information</h3>
          <label>This is company information that you can update anytime</label>
        </div>
        <div className="Step3-box-Company-logo">
          <div className="Step3-box-Company-logo-left">
            <h3>Company Logo</h3>
            <label>This image will be shown publicly as company logs</label>
          </div>
          <div className="Step3-box-Company-logo-right">
            <div className="Step3-box-Company-logo-right-img"></div>
          </div>
        </div>
        <div className="Step3-box-Company-details">
          <div className="Step3-box-Company-details-left">
            <h3>Company Details</h3>
            <label>
              Introduce your compayn core info quickly to users by fill up
              company details
            </label>
          </div>
          <div className="Step3-box-Company-details-right">
            <div className="Step3-box-Company-details-right-container">
              <label className=".body-large body-large-semi-bold">
                Company Name
              </label>
              <input
                type="text"
                value={companyDetails.companyName}
                onChange={(e) =>
                  handleCompanyDetailsChange("companyName", e.target.value)
                }
              />
              <label className=".body-large body-large-semi-bold">
                Webiste
              </label>
              <input
                type="text"
                value={companyDetails.website}
                onChange={(e) =>
                  handleCompanyDetailsChange("website", e.target.value)
                }
              />
              <label className=".body-large body-large-semi-bold">
                Location
              </label>

              <input
                type="text"
                value={companyDetails.location}
                onChange={(e) =>
                  handleCompanyDetailsChange("location", e.target.value)
                }
              />
              <div className="Step3-box-Company-details-right-container-emp-ind">
                <div className="Step3-box-Company-details-right-container-emp-ind-employee">
                  <label className=".body-large body-large-semi-bold">
                    Employee
                  </label>
                  <input
                    type="text"
                    value={companyDetails.employeeCount}
                    onChange={(e) =>
                      handleCompanyDetailsChange(
                        "employeeCount",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div className="Step3-box-Company-details-right-container-emp-ind-industry">
                  <label className=".body-large body-large-semi-bold">
                    Industry
                  </label>
                  <input
                    type="text"
                    value={companyDetails.industry}
                    onChange={(e) =>
                      handleCompanyDetailsChange("industry", e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="Step3-box-Company-details-right-container-date">
                <label className=".body-large body-large-semi-bold">
                  Date Founded
                </label>
                <input
                  type="date"
                  value={companyDetails.dateFounded}
                  onChange={(e) =>
                    handleCompanyDetailsChange("dateFounded", e.target.value)
                  }
                />
              </div>
              <label className=".body-large body-large-semi-bold">
                Tech Stack
              </label>
              <input
                type="text"
                value={companyDetails.techStack}
                onChange={(e) =>
                  handleCompanyDetailsChange("techStack", e.target.value)
                }
              />
            </div>
          </div>
        </div>
        <div className="Step3-box-about-company">
          <div className="Step3-box-about-company-left">
            <h3>About Company</h3>
            <label>
              Brief description for your company, URL's are hyperlinked
            </label>
          </div>
          <div className="Step3-box-about-company-right">
            <label>Description</label>
            <textarea
              value={aboutCompany.description}
              onChange={(e) =>
                handleAboutCompanyChange("description", e.target.value)
              }
              cols="30"
              rows="10"
            ></textarea>
            <label>Maximum 500 characters</label>
          </div>
        </div>

        <div className="step3-box-submit ">
          <div className="step3-box-submit-button btn" onClick={()=>{
            dataTransfer(companyDetails)
          }}>
            <label>Save Changes</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
