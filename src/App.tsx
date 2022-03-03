import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Newusers from './components/addNewUser/newUser';
import Allusers from './components/allUsers/allUsers';
import Navbar from './components/Navbar/Navbar';
import Edituser from './components/editUsers/editUser';


function App() {
  return (
    <div className="App">
     
      <BrowserRouter>   
      <Navbar/>
      <Routes>
        <Route  path="/" element={<Allusers/>} ></Route> 
        <Route  path="/newusers" element={<Newusers/>} > </Route>
        <Route  path="/editusers/:id" element={<Edituser/>} ></Route>
         
         
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
