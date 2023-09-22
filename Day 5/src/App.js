import Dashboard from './components/admin/Dashboard/Dashboard';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Policies from './components/admin/Policies/Policies';
import Document from './components/admin/Documents/Document';
import Settings from './components/admin/Settings/Settings';
import Help from './components/admin/Help/Help';
import Customer from './components/admin/Customer/Customer';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {

  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          
          <Route path='/adminPolicies' element={<Policies/>}></Route>
          <Route path='/adminDocument' element={<Document/>}></Route>
          <Route path='/adminSettings' element={<Settings/>}></Route>
          <Route path='/adminHelp' element={<Help/>}></Route>
          <Route path='/adminCustomer' element={<Customer/>}></Route>
          <Route path='/adminDashboard' element={<Dashboard/>}></Route>
        </Routes>
      </Router>

      
    </div>
  );
}

export default App;
