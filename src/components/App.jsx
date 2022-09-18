import { useEffect } from "react";
import { useDispatch } from "react-redux";
import UserRoutes from "./UserRoutes"
import AppBar from './AppBar/AppBar';
import styles from './App.module.css'

import  operations  from "../redux/auth/auth-operation";


const App = () => {

  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(operations.fetchCurrentUser())
  }, [dispatch]);

  return (
    <div>
      <AppBar />
      <div className={styles.container}>
      <UserRoutes />
      </div>
    </div>  
    );
  }


export default App;
