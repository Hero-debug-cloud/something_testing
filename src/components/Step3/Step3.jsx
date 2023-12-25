import React from "react";
import "./Step3.css";
import { LuPlus } from "react-icons/lu";
import { CiStethoscope } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
const Step3 = ({handleChange}) => {
  return (
    <div className="Step3-container">
      <div className="Step3-box">
        <div className="Step3-box-basic-Information">
          <h3>Basic Information</h3>
          <label>List out yoru top perks and benefits.</label>
        </div>

        <div className="Step3-box-perks-and-benefits">
          <div className="Step3-box-perks-and-benefits-left">
            <h3>Perks and Benefits</h3>
            <label>
              Encourage more people to apply by sharing the attractive rewards
              and benefits you offor your employes.
            </label>
          </div>
          <div className="Step3-box-perks-and-benefits-right">
            <div className="Step3-box-perks-and-benefits-right-add-benefit-button">
              <LuPlus size={30} />
              <label>Add Benefit</label>
            </div>
            <div className="Step3-box-perks-and-benefits-right-row-1">
              <div className="Step3-box-perks-and-benefits-right-row-1-box">
                <div className="Step3-box-perks-and-benefits-right-row-1-box-1st-row">
                  <CiStethoscope size={40} />
                  <IoMdClose size={25} />
                </div>
                <div className="Step3-box-perks-and-benefits-right-row-1-box-details">
                  <h3>Full healthCare</h3>
                  <label>
                    We believe in thriving communities and that starts with our
                    team being happy and health.
                  </label>
                </div>
              </div>
              <div className="Step3-box-perks-and-benefits-right-row-1-box">
                <div className="Step3-box-perks-and-benefits-right-row-1-box-1st-row">
                  <CiStethoscope size={40} />
                  <IoMdClose size={25} />
                </div>
                <div className="Step3-box-perks-and-benefits-right-row-1-box-details">
                  <h3>Full healthCare</h3>
                  <label>
                    We believe in thriving communities and that starts with our
                    team being happy and health.
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="step3-box-submit">
          <div className="step3-box-submit-button btn" onClick={()=>handleChange(3)}>
            <label>Do a Review</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
