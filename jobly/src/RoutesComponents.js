
import { Redirect, Route, Switch, Routes } from 'react-router-dom';
import Companies from './Companies';
import CompaniesDetail from './CompaniesDetail';
import HomePage from './HomePage';
import Jobs from './Jobs';
import Login from './Login';
import SignUp from './SignUp';
import PrivateRoute from './PrivateRoutes';
import Profile from './Profile';

function RoutesComponents({ login, signUp }) {

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
            <PrivateRoute exact path="/profile">
                <Profile />
            </PrivateRoute>
            <Redirect to="/" />

        </Switch>
    )
}
export default RoutesComponents;