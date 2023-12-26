import logo from "../../assets/Nomad.png";
import { FaChevronDown } from "react-icons/fa";
import { LuBell } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import './DashboardHeader.css';
const DashboardHeader = () => {
    return (
        <div className="PostJobHeader-1">
          <div className="PostJobHeader-1-left">
            <div className="PostJobHeader-logo">
              <img src={logo} alt="img" />
            </div>
            <div className="PostJobHeader-1-companyName">
              <div className="PostJobHeader-1-companyName-label">
                Company
              </div>
              <div className="postJobHeader-1-companyName-dropDown">
                <h4>Nomad</h4>
                <FaChevronDown className="postJobHeader-1-companyName-dropDown-pointer" />
              </div>
            </div>
          </div>

          <div className="PostJobHeader-1-right">
            <LuBell size={24} />
            <div className="PostJobHeader-1-button">
              <FiPlus size={24} />
              <p className="PostJobHeader-1-right-label">Post a job</p>
            </div>
          </div>
        </div>
    )
}

export default DashboardHeader;