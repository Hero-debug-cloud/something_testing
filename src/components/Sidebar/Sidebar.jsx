import styles from './Sidebar.module.css'
import { IoChatboxEllipsesSharp } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { MdGroups2 } from "react-icons/md";
import { IoMdHelpCircleOutline } from "react-icons/io";
import logo from '../../assets/logo.jpg'
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
const Sidebar = () => {
  const [loc, setLoc] = useState('');
  const location = useLocation()
  useEffect(()=>{
    setLoc(location.pathname);
  },[location])
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <img src={logo} alt="Company Logo" />
        <h2>Active Life</h2>
      </div>
      <nav>
        <ul>
          <li>
            <Link>
            <button > 
              <FaHome/>
              Dashboard
            </button>
            </Link>
          </li>
          <li>
            <Link className={styles.link_field} to='/post'>
            <button className={loc=='/post' || loc=='/'?styles.active:styles.inactive}> 
              <IoChatboxEllipsesSharp/>
              Post a Job
            </button>
            </Link>
          </li>
          <li>
            <Link className={styles.link_field} to='all'>
            <button className={loc=='/all'||loc=='/applicants'||loc=='/profile'?styles.active:styles.inactive}><MdGroups2/>All Applicants</button>
            </Link>
          </li>
          <hr />
          <li>
          <Link className={styles.link_field} to='/'>
            <h4>SETTINGS</h4>
            <button><IoMdHelpCircleOutline/>Help Center</button>
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.user_login}>
        {/* User login information or login button */}
        <img src="path/to/your/logo.png" alt="User Name" />
      </div>
    </div>
  );
};

export default Sidebar;
