import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Companies from './Companies';
import CompaniesDetail from './CompaniesDetail';
import HomePage from './HomePage';
import Jobs from './Jobs';
import Login from './Login';
import NavBar from './Navbar';
import SignUp from './SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/" >
              <HomePage />
            </Route>
            <Route exact path="/companies">
              <Companies />
            </Route>
            <Route exact path="/companies/:handle">
              <CompaniesDetail />
            </Route>
            <Route exact path="/jobs">
              <Jobs />
            </Route>
            <Route exact path="/profile"></Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
