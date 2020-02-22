// import React from 'react';
// import ProductsList from '../ProductsList';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
//   } from "react-router-dom";
// import Navigation from '../Components/Common/Nav';

// const RouteProtection = (to, Component) => {

//     return (
//     <Route path={to}>
//     {/* <Navigation /> */}
//     <Component />
//   </Route>
    
//   )
// }

// export default RouteProtection;

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ isLogged, redirectTo, ...props }) => {
  return isLogged ? <Route {...props} /> : <Redirect to={redirectTo} />;
}

export default ProtectedRoute;