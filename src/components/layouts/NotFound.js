import notfound from '../../assets/images/404.png'
import styles from './NotFound.module.css'

const NotFound = () => {
  
    return (  
        <div className={styles.notfound}  >
            <img src={notfound} alt="not found" />
        </div>
    );
}
 
export default NotFound;