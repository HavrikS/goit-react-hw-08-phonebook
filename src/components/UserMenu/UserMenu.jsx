import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from '../../redux/auth/auth-operation';
import authSelectors from '../../redux/auth/auth-selectors'
import styles from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getEmail); 

  return (
    <Box >
      <span className={styles.title}>{email}</span>
      <button className={styles.menuButton} type="button" onClick={() => dispatch(authOperations.logOut())}>
        LOGOUT
      </button>          
    </Box>
    );
}