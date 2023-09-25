import Dashboard from './components/admin/Dashboard/Dashboard';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
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


function App() {

  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          
          <Route path='/adminPolicies' element={<Policies/>}></Route>
          <Route path='/adminClaims' element={<Claim/>}></Route>
          <Route path='/adminHelp' element={<Help/>}></Route>
          <Route path='/adminCustomer' element={<Customer/>}></Route>
          <Route path='/adminDashboard' element={<Dashboard/>}></Route>
          <Route path='/terms' element={<Terms/>}></Route>
          <Route path='/userterms' element={<UserTerms/>}></Route>
          <Route path='/userpolicy' element={<UserPolicy/>}></Route>
          <Route path='/policy' element={<Policy/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/homelog' element={<HomeLog/>}></Route>
          <Route path='/help' element={<UserHelp/>}></Route>
          <Route path='/application' element={<Application/>}></Route>
          
        </Routes>
      </Router>

      
    </div>
  );
}

export default App;
