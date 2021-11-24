import "./App.css";
import { useEffect, Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route } from "react-router";
import authOperations from "./redux/auth/auth-operations";
import AppBar from "./components/AppBar/AppBar";
import Loader from "./components/Loader/Loader";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import authSelectors from "./redux/auth/auth-selectors";

const HomeView = lazy(() => import('./views/HomeView/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView/ContactsView'));


export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrentUser);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  

  return (
    !isFetchingCurrentUser && (
      <div className="App">

      <AppBar />

      <Switch>
        <Suspense fallback={<Loader />}>          
          <PublicRoute exact path="/"><HomeView /></PublicRoute>
          <PublicRoute path="/register" restricted><RegisterView /></PublicRoute>
          <PublicRoute path="/login" restricted redirectTo="/contacts"><LoginView /></PublicRoute>
          <PrivateRoute path="/contacts" redirectTo="/login"><ContactsView /></PrivateRoute>
        </Suspense>
      </Switch>

      
    </div>)
    
  );
  
}



