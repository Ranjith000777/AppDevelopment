import Dashboard from './components/admin/Dashboard/Dashboard';

import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Policies from './components/admin/Policies/Policies';
import UserHelp from './components/Users/UserHelp';
import Claim from './components/admin/Settings/Claim';
import Help from './components/admin/Help/Help';
import Customer from './components/admin/Customer/Customer';
import Login from './components/Login';
import Signup from './components/Signup';
import Terms from './components/Terms';
import Policy from './components/Policy';
import Home from './components/Users/Home';
import Application from './components/Users/Application';
import HomeLog from './components/Users/HomeLog';
import UserPolicy from './components/Users/UserPolicy';
import UserTerms from './components/Users/UserTerms';
import AboutUs from './components/Users/AboutUs';
import { useUser } from './components/context/UserContext';
import { UserProvider } from './components/context/UserContext';
import UserDocument from './components/Users/UserDocument';
import HomeInsurance from './components/InsuranceType/HomeInsurance';
import LifeInsurance from './components/InsuranceType/LifeInsurance';


function App() {
  const PrivateRoute = ({ children }) => {
    const { isUserLoggedIn } = useUser();
    return isUserLoggedIn ? children : <Navigate to="/" replace />;
};
  return (
    <div className="App">
      <UserProvider>

      <Router>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          
          <Route path='/adminPolicies' element={
          <PrivateRoute>
          <Policies/>
          </PrivateRoute>}></Route>
          <Route path='/adminClaims' element={
          <PrivateRoute>
          <Claim/>
          </PrivateRoute>}></Route>
          <Route path='/adminHelp' element={
          <PrivateRoute>
          <Help/>
          </PrivateRoute>}></Route>
          <Route path='/adminCustomer' element={<PrivateRoute>
          <Customer/>
          </PrivateRoute>}></Route>
          <Route path='/adminDashboard' element={
          <PrivateRoute>
          <Dashboard/>
          </PrivateRoute>}></Route>
          <Route path='/terms' element={
          <PrivateRoute>
          <Terms/>
          </PrivateRoute>}></Route>
          <Route path='/userterms' element={<UserTerms/>}></Route>
          <Route path='/userpolicy' element={<UserPolicy/>}></Route>
          <Route path='/policy' element={
          <PrivateRoute>
          <Policy/>
          </PrivateRoute>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/homelog' element={
                    <PrivateRoute>
                        <HomeLog />
                    </PrivateRoute>} />
          <Route path='/help' element={<UserHelp/>}></Route>
          <Route path='/application' element={<Application/>}></Route>
          <Route path='/aboutus' element={<AboutUs/>}></Route>
        <Route path='/userdocument' element={<UserDocument/>}></Route>
        <Route path='/homeinsurance' element={<HomeInsurance/>}></Route>
        <Route path='/lifeinsurance' element={<LifeInsurance/>}></Route>
        </Routes>
      </Router>
      </UserProvider>

      
    </div>
  );
}

export default App;
