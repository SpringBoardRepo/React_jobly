
import { Redirect, Route, Switch } from 'react-router-dom';
import Companies from './Companies';
import CompaniesDetail from './CompaniesDetail';
import HomePage from './HomePage';
import Jobs from './Jobs';
import Login from './Login';
import SignUp from './SignUp';
import PrivateRoute from './PrivateRoutes';

function Routes({ login, signUp }) {

    return (
        <Switch>
            <Route exact path="/" >
                <HomePage />
            </Route>
            <Route exact path="/login">
                <Login login={login} />
            </Route>
            <Route exact path="/signup">
                <SignUp signUp={signUp} />
            </Route>
            <PrivateRoute exact path="/companies">
                <Companies />
            </PrivateRoute>
            <PrivateRoute exact path="/companies/:handle">
                <CompaniesDetail />
            </PrivateRoute>
            <PrivateRoute exact path="/jobs">
                <Jobs />
            </PrivateRoute>
            <PrivateRoute exact path="/profile"></PrivateRoute>
            <Redirect to="/" />
        </Switch>
    )
}
export default Routes;