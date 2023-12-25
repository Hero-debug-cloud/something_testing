import { IoFilterSharp } from "react-icons/io5";
import styles from "./Filter.module.css"
const Filter = () => {
    return (
        <div className={styles.filter_container}>
            <button>
                <IoFilterSharp/>
                <p>Filter</p>
            </button>
        </div>
    )
}

export default Filter;