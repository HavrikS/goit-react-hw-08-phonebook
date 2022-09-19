
import { NavLink, Link } from "react-router-dom";
import UserMenu from '../UserMenu/UserMenu';
import useAuth from '../../shared/hooks/useAuth';
import Container from 'react-bootstrap/Container';


import styles from "./AppBar.module.css";

const getClassName = ({isActive}) => {
    const className = isActive ? `${styles.link} ${styles.active}` : styles.link;
    return className;
}


const AppBar = () => {
  const isLogin = useAuth()
    return (
      <div className={styles.wrapper}>
        <Container>
        <div className={styles.container}>
          <Link to="/contacts" className={styles.homeLink}>The Phone Book</Link>
          {isLogin ? <UserMenu /> : 
          <ul className={styles.menu}>            
                <li>
                    <NavLink className={getClassName} to="/register">REGISTER</NavLink>                    
                </li>
                <li>
                    <NavLink className={getClassName} to="/login">LOGIN</NavLink>
                </li>                
            </ul>}
          </div>
          </Container>
        </div>
    )
}

export default AppBar;