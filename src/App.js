import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import Home from './Pages/Home/Home';
import NavBar from './Components/Navbar/Navbar'
import AddUser from './Pages/AddUser/AddUser/AddUser';
import View from './Pages/ViewUser/View';
import EditUser from './Pages/EditUser/EditUser';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Router>
       <Routes>
          <Route element={<Home/>} path="/"/>
          <Route element={<AddUser/>} path="/AddUser"/>
          <Route element={<View/>} path="/View/:id"/>
          <Route element={<EditUser/>} path="/Edit/:id"/>
        </Routes>
    </Router>    </div>
  );
}

export default App;
