import { BallTriangle } from  'react-loader-spinner'
import styles from 'components/Loader/Loader.module.css'




const Loader = () => {
    
    return (
        <div className={styles.loader}>
            <BallTriangle />
        </div>
    )
};


export default Loader;