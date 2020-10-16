import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home/Home';
import OrderRegister from './components/Order/OrderRegister/OrderRegister';
import OrderList from './components/Order/OrderList/OrderList';
import OrderReview from './components/Order/OrderReview/OrderReview';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ServiceList from './components/Admin/ServiceList/ServiceList';
import AddService from './components/Admin/AddService/AddService';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          {/* start */}
          {/* <Route path="/orderReview">
            <OrderReview></OrderReview>
          </Route>
          <Route path="/orderList">
          <OrderList></OrderList>
          </Route>
          <Route path="/orderRegister">
            <OrderRegister></OrderRegister>
          </Route> */}
          {/* end */}

          <PrivateRoute path="/orderRegister/:service/:img/:description">
            <OrderRegister></OrderRegister>
          </PrivateRoute>

          <PrivateRoute path="/orderRegister">
            <OrderRegister></OrderRegister>
          </PrivateRoute>

          <PrivateRoute path="/orderList">
            <OrderList></OrderList>
          </PrivateRoute>

          <PrivateRoute path="/orderReview">
            <OrderReview></OrderReview>
          </PrivateRoute>

          
          
          {/* admin */}
          {/* <Route path="/serviceList">
            <ServiceList></ServiceList>
          </Route>

          <Route path="/addService">
            <AddService></AddService>
          </Route>

          <Router path="/makeAdmin">
              <MakeAdmin></MakeAdmin>
          </Router> */}


          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>

    </UserContext.Provider>
  );
}

export default App;
