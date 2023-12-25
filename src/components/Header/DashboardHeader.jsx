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
              <label className="PostJobHeader-1-companyName-label">
                Company
              </label>

              <label className="postJobHeader-1-companyName-dropDown">
                Nomad
                <FaChevronDown className="postJobHeader-1-companyName-dropDown-pointer" />
              </label>
            </div>
          </div>

          <div className="PostJobHeader-1-right">
            <LuBell size={30} />
            <div className="PostJobHeader-1-button">
              <FiPlus size={30} />
              <label className="PostJobHeader-1-right-label">Post a job</label>
            </div>
          </div>
        </div>
    )
}

export default DashboardHeader;