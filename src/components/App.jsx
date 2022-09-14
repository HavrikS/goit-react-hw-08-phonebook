import { Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage/HomePage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import ContactsPage from '../pages/ContactsPage/ContactsPage';
import AppBar from './AppBar/AppBar';
import styles from './App.module.css'
// import css from 'components/App.module.css'




const App = () => {

  return (
    <div>
      <AppBar />
      <div className={styles.container}>
      <Routes> 
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />        
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />  
      </Routes>
      </div>
    </div>  
    );
  }


export default App;
