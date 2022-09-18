import { useEffect } from "react";
import { useDispatch } from "react-redux";
import UserRoutes from "./UserRoutes"
import AppBar from './AppBar/AppBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';


import  operations  from "../redux/auth/auth-operation";


const App = () => {

  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(operations.fetchCurrentUser())
  }, [dispatch]);

  return (
    <div>
      <AppBar />      
      <Container>
       <UserRoutes />
      </Container>
    </div>  
    );
  }


export default App;
