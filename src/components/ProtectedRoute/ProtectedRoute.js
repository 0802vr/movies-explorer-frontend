import React from 'react';
import { Redirect, Route } from 'react-router-dom';
const ProtectedRoute = ({ ...routeProps }) => {
  const [isLogged, setLogged] = React.useState(true);

  React.useEffect(() => {
    if (!localStorage.getItem("jwt")) {
      setLogged(false);
    }
  }, []);

  return isLogged ? <Route {...routeProps} /> : <Redirect to="/" />;
};
export default ProtectedRoute;